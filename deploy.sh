#!/usr/bin/env bash
#
# deploy.sh — build this app and deploy it to the WPC HMT maps endpoint,
# safely cleaning up old hashed build files.
#
#   Usage:
#     ./deploy.sh <dev> [--dry-run] [--skip-build]
#
#   Targets (URL  ->  S3 prefix in bucket s3-east-www.wpc.woc.noaa.gov):
#     dev    https://www.wpc.ncep.noaa.gov/test_scripts/hmt-maps/    public/test_scripts/hmt-maps/
#
#   Flags:
#     --dry-run     Build, then show exactly what WOULD upload/delete — no changes made.
#     --skip-build  Reuse the existing ./build (don't run npm install / npm run build).
#
# Deploy order (so a live page never requests an asset that's been deleted):
#   1. Upload the new build's assets/ — old and new hashed files coexist.
#   2. Upload the other root files (conf/, favicon, manifest, etc.), then
#      index.html (the atomic switch to the new build) with Cache-Control:
#      no-cache so caches revalidate it per load. conf/ is uploaded no-cache
#      too — those files have stable names and are fetched at runtime, so a
#      cached copy would hide config edits.
#   3. Prune old assets, keeping the build just uploaded AND the previous
#      deploy's files (read from deploy-manifest.txt). A build's assets are
#      only deleted two deploys after they shipped, so visitors/CDNs still
#      holding the previous index.html keep a working set of assets.
#   4. Upload deploy-manifest.txt listing this build's assets for the next run.
#
# Safety notes:
#   * `--delete` is never used. Cleanup deletes are explicit per-file removals
#     scoped ONLY to the target's `assets/` subfolder, which contains nothing
#     but Vite build output (js/css/map). conf/ and the other root files live
#     at the prefix root and are never eligible for deletion.
#   * A guard aborts the deploy if the remote assets/ folder contains anything
#     whose extension isn't a normal build artifact (which the prune could
#     otherwise remove).
#   * The HMT imagery the app displays is served from elsewhere on the host —
#     nothing under this prefix is shared with the data pipeline.
#
# Note: this app's Vite build outputs to ./build (not ./dist), per
# BUILD_PATH in vite.config.js.

# ---------------------------------------------------------------------------
# Replaces the old csh scripts (deploy_test.csh / deploy_final.csh), removed
# in favor of this one. For the record, what they did:
#
#   Both ran on the WPC host from /shared_data/wpc-app/ and were identical
#   except for their destination. Each one:
#     1. Made a timestamped source backup dir (./source_code_backup[_final]_
#        YYYYMMDD_HHMM, UTC) holding *.json, *.html, *.js, public/ and src/,
#        then chmod -R g+w on it.
#     2. Rotated the previous build: rm -rf build_backup; cp -r build
#        build_backup; rm -rf build.
#     3. npm run build, then chmod -R g+w on build/ and build_backup/.
#     4. aws s3 cp build <dest> --recursive   (no --delete, so old hashed
#        assets accumulated at the destination forever).
#
#   Destinations:
#     deploy_test.csh   s3://s3-east-www.wpc.woc.noaa.gov/public/hmt/hmt_webpages/webtest/
#     deploy_final.csh  s3://s3-east-www.wpc.woc.noaa.gov/public/hmt/hmt_webpages/maps/
#
#   Those two prefixes are NOT touched by this script — its dev target is the
#   separate public/test_scripts/hmt-maps/. Anything already deployed there by
#   the old scripts is still live and untouched.
#
#   Dropped on purpose, and why:
#     * Source backup dirs — git is the history now.
#     * build_backup/ rotation — the deploy-manifest grace list below keeps the
#       previous deploy's assets live remotely, which is what the rollback was
#       actually protecting against.
#     * chmod g+w — only mattered for the shared host's group-writable dirs.
#   Still to sort out if a production target is added back: those runs happened
#   on the host against /shared_data/wpc-app/, not a local checkout.
# ---------------------------------------------------------------------------

set -euo pipefail

BUCKET="s3-east-www.wpc.woc.noaa.gov"
BUILD_DIR="build"

# File extensions Vite legitimately emits into build/assets/. Anything in the remote
# assets/ folder with a different extension (or a subfolder, which has no such
# extension) trips the guard and aborts the deploy before pruning runs.
ASSET_EXTS='js|css|wasm|map|woff|woff2|ttf|otf|eot|svg|png|jpg|jpeg|gif|webp|avif|ico'

usage() {
  sed -n '2,41p' "$0" | sed 's/^# \{0,1\}//'
  exit "${1:-1}"
}

# ---- parse args -------------------------------------------------------------
TARGET=""
DRYRUN=0
SKIP_BUILD=0
for arg in "$@"; do
  case "$arg" in
    dev)          TARGET="$arg" ;;
    --dry-run)    DRYRUN=1 ;;
    --skip-build) SKIP_BUILD=1 ;;
    -h|--help)    usage 0 ;;
    *) echo "Unknown argument: $arg" >&2; usage 1 ;;
  esac
done

case "$TARGET" in
  dev) PREFIX="public/test_scripts/hmt-maps/"; URL="https://www.wpc.ncep.noaa.gov/test_scripts/hmt-maps/" ;;
  "")  echo "Error: no target given." >&2; usage 1 ;;
esac

DEST="s3://${BUCKET}/${PREFIX}"
# Written at the end of every deploy: the list of asset filenames that deploy
# shipped. The next deploy reads it as its "keep" grace list. Lives at the
# prefix root (never inside assets/, where the extension guard would flag it).
MANIFEST_URI="${DEST}deploy-manifest.txt"
SYNC_FLAGS=()
[ "$DRYRUN" -eq 1 ] && SYNC_FLAGS+=(--dryrun)

# ---- show plan --------------------------------------------------------------
BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo '?')"
ACCT="$(aws sts get-caller-identity --query Account --output text 2>/dev/null || echo '?')"
echo "────────────────────────────────────────────────────────────────"
echo "  Target      : $TARGET"
echo "  URL         : $URL"
echo "  Destination : $DEST"
echo "  Git branch  : $BRANCH"
echo "  AWS account : $ACCT"
[ "$DRYRUN" -eq 1 ] && echo "  MODE        : DRY RUN (no changes will be made)"
echo "────────────────────────────────────────────────────────────────"

# ---- build ------------------------------------------------------------------
if [ "$SKIP_BUILD" -eq 0 ]; then
  echo "==> npm install"
  npm install
  echo "==> npm run build"
  npm run build          # runs: vite build  (outDir: ./build)
else
  echo "==> Skipping build (--skip-build); using existing ./${BUILD_DIR}"
fi

if [ ! -f "${BUILD_DIR}/index.html" ] || [ ! -d "${BUILD_DIR}/assets" ]; then
  echo "Error: ./${BUILD_DIR}/index.html or ./${BUILD_DIR}/assets missing — build did not produce expected output." >&2
  exit 1
fi

# macOS leaves these in public/, and Vite copies them through to the build.
find "${BUILD_DIR}" -name '.DS_Store' -delete

# ---- safety guard: remote assets/ must be build-only before we prune --------
# List the remote assets/ folder and flag any entry whose extension isn't a normal
# build artifact (subfolder entries like "foo/" have no such extension, so they flag too).
echo "==> Verifying ${PREFIX}assets/ contains only build artifacts"
UNEXPECTED="$(aws s3 ls "${DEST}assets/" 2>/dev/null | awk '{print $NF}' \
              | grep -viE "\.(${ASSET_EXTS})$" || true)"
if [ -n "$UNEXPECTED" ]; then
  echo "ABORT: unexpected non-build files found in ${PREFIX}assets/:" >&2
  echo "$UNEXPECTED" | sed 's/^/    /' >&2
  echo "The prune step could remove these. Investigate before deploying." >&2
  exit 1
fi

# ---- 1) previous deploy's asset list (grace list for the prune step) --------
# Missing manifest (first deploy with this script, or a fetch error): fall back
# to treating EVERYTHING currently in remote assets/ as the previous build, so
# nothing is pruned out from under a cached index.html this time around.
echo "==> Fetching previous deploy's manifest"
PREV_KEEP="$(aws s3 cp "$MANIFEST_URI" - 2>/dev/null || true)"
if [ -z "$PREV_KEEP" ]; then
  echo "    No manifest found — keeping all existing remote assets this deploy."
  PREV_KEEP="$(aws s3 ls "${DEST}assets/" 2>/dev/null | awk '{print $NF}' || true)"
fi

# ---- 2) assets/: upload the new build (no deletes) --------------------------
# New hashed files land alongside the old ones, so the currently-live
# index.html keeps resolving its assets while this runs.
echo "==> Uploading new assets/"
aws s3 sync "./${BUILD_DIR}/assets/" "${DEST}assets/" ${SYNC_FLAGS[@]+"${SYNC_FLAGS[@]}"}

# ---- 3) root files: everything except assets/, conf/ and index.html ---------
# favicon.ico, logo*.png, manifest.json, robots.txt — stable names, safe to
# overwrite in place. No --delete anywhere.
echo "==> Uploading root files (favicon, manifest, etc.) — no deletes"
aws s3 cp "./${BUILD_DIR}/" "${DEST}" --recursive \
  --exclude "assets/*" --exclude "conf/*" --exclude "index.html" \
  ${SYNC_FLAGS[@]+"${SYNC_FLAGS[@]}"}

# conf/*.json drive the product menus and are fetched at runtime by stable
# name (App.jsx: fetch(confUrl + '/conf/product_conf.json')). Uploaded
# no-cache so a config change is picked up without waiting out a cached copy.
echo "==> Uploading conf/ (no-cache)"
aws s3 cp "./${BUILD_DIR}/conf/" "${DEST}conf/" --recursive \
  --cache-control "no-cache" ${SYNC_FLAGS[@]+"${SYNC_FLAGS[@]}"}

# index.html goes up last (the switch to the new build) with no-cache so
# browsers/CDNs revalidate it on every load and pick up new asset hashes
# immediately. Harmless if intermediate caches ignore origin cache headers.
echo "==> Uploading index.html (no-cache)"
aws s3 cp "./${BUILD_DIR}/index.html" "${DEST}index.html" \
  --cache-control "no-cache" ${SYNC_FLAGS[@]+"${SYNC_FLAGS[@]}"}

# ---- 4) prune assets from two-plus deploys ago ------------------------------
# Keep the build just uploaded plus everything the previous deploy shipped;
# delete the rest. Deletes are explicit per-file removals inside assets/ only.
echo "==> Pruning assets from two-plus deploys ago"
CURR_FILES="$(cd "${BUILD_DIR}/assets" && find . -type f | sed 's|^\./||' | sort -u)"
REMOTE_FILES="$(aws s3 ls "${DEST}assets/" 2>/dev/null | awk '{print $NF}' | sort -u || true)"
KEEP_FILES="$(printf '%s\n%s\n' "$CURR_FILES" "$PREV_KEEP" | sed '/^$/d' | sort -u)"
TO_DELETE="$(comm -23 <(printf '%s\n' "$REMOTE_FILES" | sed '/^$/d') <(printf '%s\n' "$KEEP_FILES"))"
if [ -z "$TO_DELETE" ]; then
  echo "    Nothing to prune."
else
  printf '%s\n' "$TO_DELETE" | while IFS= read -r f; do
    [ -n "$f" ] || continue
    aws s3 rm "${DEST}assets/${f}" ${SYNC_FLAGS[@]+"${SYNC_FLAGS[@]}"}
  done
fi

# ---- 5) record this build's assets for the next deploy's grace list ---------
if [ "$DRYRUN" -eq 1 ]; then
  echo "==> (dry run) Skipping manifest upload"
else
  echo "==> Uploading deploy manifest"
  printf '%s\n' "$CURR_FILES" | aws s3 cp - "$MANIFEST_URI"
fi

echo "────────────────────────────────────────────────────────────────"
if [ "$DRYRUN" -eq 1 ]; then
  echo "  DRY RUN complete — nothing was changed."
else
  echo "  Deployed to $TARGET"
  echo "  $URL"
fi
echo "────────────────────────────────────────────────────────────────"

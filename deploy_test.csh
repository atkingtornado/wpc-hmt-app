#!/bin/csh
cd /shared_data/wpc-app/
set tdate = `date +%Y%m%d -u`
set hour = `date +%H -u`
set min = `date +%M -u`
set dirname = "./source_code_backup_${tdate}_${hour}${min}"
mkdir ${dirname}
cp *.json ${dirname}
cp *.html ${dirname}
cp *.js ${dirname}
cp -r public ${dirname}
cp -r src ${dirname}
chmod -R g+w ${dirname}

rm -rf build_backup
cp -r build build_backup
rm -rf build
npm run build
chmod -R g+w build
chmod -R g+w build_backup
aws s3 cp build s3://s3-east-www.wpc.woc.noaa.gov/public/hmt/hmt_webpages/webtest/ --recursive

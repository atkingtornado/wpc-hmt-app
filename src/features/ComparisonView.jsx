import ComparisonPanel from './ComparisonPanel'

const ComparisonView = ({
    comparisonMode,
    panels,
    prodConf,
    modelConf,
    subModelConf,
    aiModelConf,
    ensemblesPQPFConf,
    obsConf,
    eroConf,
    ariFfgConf,
    menuSelections,
    fcstHr,
    urlBase,
    domain,
    retro,
    display,
    filterHourThresh,
    onPanelChange,
    sharedCycle,
    referencePanel,
    onReferencePanelChange
}) => {

    const panelCount = comparisonMode === "4-panel" ? 4 : 2
    const refPanelSelections = panels[referencePanel] || panels[0]

    return (
        <div className={`grid grid-cols-2 gap-2 w-full ${comparisonMode === "4-panel" ? "grid-rows-2" : ""}`}
             style={{ minHeight: comparisonMode === "4-panel" ? '900px' : '500px' }}
        >
            {panels.slice(0, panelCount).map((panelSelections, idx) => (
                <ComparisonPanel
                    key={idx}
                    panelIndex={idx}
                    panelSelections={panelSelections}
                    prodConf={prodConf}
                    modelConf={modelConf}
                    subModelConf={subModelConf}
                    aiModelConf={aiModelConf}
                    ensemblesPQPFConf={ensemblesPQPFConf}
                    obsConf={obsConf}
                    eroConf={eroConf}
                    ariFfgConf={ariFfgConf}
                    menuSelections={menuSelections}
                    fcstHr={fcstHr}
                    urlBase={urlBase}
                    domain={domain}
                    retro={retro}
                    display={display}
                    filterHourThresh={filterHourThresh}
                    onPanelChange={onPanelChange}
                    sharedCycle={sharedCycle}
                    isReference={idx === referencePanel}
                    onSetReference={() => onReferencePanelChange(idx)}
                    refPanelSelections={refPanelSelections}
                />
            ))}
        </div>
    )
}

export default ComparisonView

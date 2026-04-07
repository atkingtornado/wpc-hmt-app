import Select from 'react-select'
import ImageDisplay from './ImageDisplay'
import Tooltip from '@mui/material/Tooltip'
import InfoIcon from '@mui/icons-material/Info'
import moment from 'moment'

const ComparisonPanel = ({
    panelIndex,
    panelSelections,
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
    isReference,
    onSetReference,
    refPanelSelections
}) => {

    const modelOptions = Object.keys(modelConf).map((model) => ({ value: model, label: model }))
    const subModelOptions = Object.keys(subModelConf).map((model) => ({ value: model, label: model }))
    const aiModelOptions = Object.keys(aiModelConf).map((model) => ({ value: model, label: model }))
    const ensemblesPQPFOptions = Object.keys(ensemblesPQPFConf).map((prod) => ({ value: prod, label: prod }))
    const eroOptions = Object.keys(eroConf).map((prod) => ({ value: prod, label: prod }))
    const obsOptions = Object.keys(obsConf).map((prod) => ({ value: prod, label: prod }))
    const ariFfgOptions = Object.keys(ariFfgConf).map((prod) => ({ value: prod, label: prod }))
    const groupedProductOptions = [
        { label: "Models", options: modelOptions },
        { label: "SubHourly Models", options: subModelOptions },
        { label: "Ensembles", options: ensemblesPQPFOptions },
        { label: "AI Models", options: aiModelOptions },
        { label: "EROs", options: eroOptions },
        { label: "Observations", options: obsOptions },
        { label: "ARIs & FFGs", options: ariFfgOptions }
    ]

    const paramGroupOptions = Object.keys(prodConf[panelSelections.selectedProduct]["parameters"]).map((grp) => ({ value: grp, label: grp }))
    const paramOptions = Object.keys(prodConf[panelSelections.selectedProduct]["parameters"][panelSelections.selectedParameterGroup]).map(
        (param) => ({
            value: param,
            label: prodConf[panelSelections.selectedProduct]["parameters"][panelSelections.selectedParameterGroup][param].label
        })
    )

    // Determine the effective init time for this panel
    let effectiveRun
    if (!sharedCycle) {
        // Independent mode: use panel's own selected cycle
        effectiveRun = panelSelections.selectedRun || menuSelections.selectedRun
    } else if (isReference) {
        // Shared mode, reference panel: use the global shared cycle
        effectiveRun = menuSelections.selectedRun
    } else {
        // Shared mode, non-reference panel: find the nearest init that is not after the reference run
        const refRunMoment = moment.utc(menuSelections.selectedRun, 'HH z ddd DD MMM YYYY')
        const panelDateOptions = panelSelections.dateOptions || []
        let bestRun = menuSelections.selectedRun
        let bestDiff = Infinity
        panelDateOptions.forEach((d) => {
            const diff = refRunMoment.diff(d, 'minutes')
            // diff >= 0 means d is not after refRun
            if (diff >= 0 && diff < bestDiff) {
                bestDiff = diff
                bestRun = d.format('HH z ddd DD MMM YYYY')
            }
        })
        effectiveRun = bestRun
    }

    // Build panel-specific menuSelections by merging run with panel selections
    const panelMenuSelections = {
        selectedProduct: panelSelections.selectedProduct,
        selectedParameterGroup: panelSelections.selectedParameterGroup,
        selectedParameter: panelSelections.selectedParameter,
        selectedRun: effectiveRun
    }

    // Determine this panel's model characteristics
    const currProdConf = prodConf[panelSelections.selectedProduct]
    const currParamConf = currProdConf["parameters"][panelSelections.selectedParameterGroup][panelSelections.selectedParameter]
    const isStatic = (currProdConf.static_image) || (currProdConf.no_fhr_in_url) || (currProdConf.display_slider === false)
    const isSubhour = (`subhour` in currProdConf) && currProdConf.subhour
    const isSubhmax = panelSelections.selectedParameter === "subhmax15precip"

    // Determine reference panel's time system
    const refProdConf = prodConf[refPanelSelections.selectedProduct]
    const refIsSubhour = (`subhour` in refProdConf) && refProdConf.subhour
    const refIsSubhmax = refPanelSelections.selectedParameter === "subhmax15precip"
    // Is the slider in 15-min indices?
    const sliderIsSubhour = refIsSubhour && !refIsSubhmax

    // Convert slider value (in reference panel's units) to this panel's native fcstHr
    let panelFcstHr = fcstHr
    if (sliderIsSubhour && !(isSubhour && !isSubhmax)) {
        // Slider is in 15-min indices, but this panel uses hours: floor to nearest hour
        panelFcstHr = Math.floor(fcstHr / 4)
    } else if (!sliderIsSubhour && isSubhour && !isSubhmax) {
        // Slider is in hours, but this panel uses 15-min indices
        panelFcstHr = fcstHr * 4
    }

    // Offset fcstHr for init time differences between reference panel and this panel
    // Valid time = init + fcstHr, so if ref is 12z and panel is 06z, panel needs +6 fcstHr
    const refRun = sharedCycle ? menuSelections.selectedRun : (refPanelSelections.selectedRun || menuSelections.selectedRun)
    const refRunMoment = moment.utc(refRun, 'HH z ddd DD MMM YYYY')
    const panelRunMoment = moment.utc(effectiveRun, 'HH z ddd DD MMM YYYY')
    const initHourDiff = refRunMoment.diff(panelRunMoment, 'hours')
    if (isSubhour && !isSubhmax) {
        panelFcstHr += initHourDiff * 4
    } else {
        panelFcstHr += initHourDiff
    }

    // Check if the current forecast hour is in range for this panel's model
    // Static/single-image products are always "in range"
    let isOutOfRange = false
    if (!isStatic) {
        const minHr = filterHourThresh(currParamConf.min_fcst_hr, display)
        let maxHr = filterHourThresh(currProdConf.num_fcst_hrs, display)
        if (isSubhour && isSubhmax) {
            maxHr = Math.floor(maxHr / 4)
        }
        isOutOfRange = panelFcstHr < minHr || panelFcstHr > maxHr
    }

    const handleChange = (e, selectionID) => {
        onPanelChange(panelIndex, selectionID, e.value)
    }

    const selectStyles = {
        control: (base) => ({ ...base, minHeight: 32 }),
        valueContainer: (base) => ({ ...base, padding: '0 6px' }),
        input: (base) => ({ ...base, margin: 0, padding: 0 }),
        indicatorsContainer: (base) => ({ ...base, height: 32 }),
    }

    // Per-panel cycle options
    const panelDateOptions = panelSelections.dateOptions || []
    const cycleOptions = panelDateOptions.map((date) => ({
        value: date.format('HH z ddd DD MMM YYYY'),
        label: date.format('HH z ddd DD MMM YYYY')
    }))

    return (
        <div className={`border rounded flex flex-col ${isReference ? 'border-blue-500 border-2' : 'border-gray-300'}`}>
            <div className="bg-gray-100 p-2 flex flex-wrap gap-1 items-end">
                <Tooltip title="Set as reference panel">
                    <button
                        onClick={onSetReference}
                        className={`self-center mr-1 w-4 h-4 rounded-full border-2 flex-shrink-0 ${isReference ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400 hover:border-blue-400'}`}
                        aria-label={`Set panel ${panelIndex + 1} as reference`}
                    />
                </Tooltip>
                <div className="flex-1 min-w-[120px]">
                    <Select
                        aria-label={`panel ${panelIndex} product select`}
                        options={groupedProductOptions}
                        value={{ value: panelSelections.selectedProduct, label: panelSelections.selectedProduct }}
                        onChange={(e) => handleChange(e, "selectedProduct")}
                        isSearchable
                        styles={selectStyles}
                    />
                    <span style={{ opacity: 0.4, fontSize: 11 }}>Model</span>
                </div>
                {!sharedCycle &&
                    <div className="flex-1 min-w-[140px]">
                        <Select
                            aria-label={`panel ${panelIndex} cycle select`}
                            options={cycleOptions}
                            value={{ value: effectiveRun, label: effectiveRun }}
                            onChange={(e) => handleChange(e, "selectedRun")}
                            isSearchable
                            styles={selectStyles}
                        />
                        <span style={{ opacity: 0.4, fontSize: 11 }}>Cycle</span>
                    </div>
                }
                <div className="flex-1 min-w-[120px]">
                    <Select
                        aria-label={`panel ${panelIndex} param group select`}
                        options={paramGroupOptions}
                        value={{ value: panelSelections.selectedParameterGroup, label: panelSelections.selectedParameterGroup }}
                        onChange={(e) => handleChange(e, "selectedParameterGroup")}
                        isSearchable
                        styles={selectStyles}
                    />
                    <span style={{ opacity: 0.4, fontSize: 11 }}>Param Group</span>
                </div>
                <div className="flex-1 min-w-[120px]">
                    <Select
                        aria-label={`panel ${panelIndex} parameter select`}
                        options={paramOptions}
                        value={{
                            value: panelSelections.selectedParameter,
                            label: prodConf[panelSelections.selectedProduct]["parameters"][panelSelections.selectedParameterGroup][panelSelections.selectedParameter].label
                        }}
                        onChange={(e) => handleChange(e, "selectedParameter")}
                        isSearchable
                        styles={selectStyles}
                    />
                    <span style={{ opacity: 0.4, fontSize: 11 }}>Parameter</span>
                </div>
                {initHourDiff !== 0 &&
                    <Tooltip title={`Init: ${effectiveRun}`} arrow>
                        <InfoIcon sx={{ fontSize: 22, color: '#d97706', cursor: 'pointer', alignSelf: 'center' }} />
                    </Tooltip>
                }
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                {isOutOfRange ?
                    <p className="text-gray-400 text-sm p-4">No data at forecast hour {fcstHr} for {panelSelections.selectedProduct}</p>
                :
                    <ImageDisplay
                        retro={retro}
                        urlBase={urlBase}
                        domain={domain}
                        prodConf={prodConf}
                        fcstHr={isStatic ? 1 : panelFcstHr}
                        menuSelections={panelMenuSelections}
                        display={display}
                        filterHourThresh={filterHourThresh}
                        comparisonMode={true}
                    />
                }
            </div>
        </div>
    )
}

export default ComparisonPanel

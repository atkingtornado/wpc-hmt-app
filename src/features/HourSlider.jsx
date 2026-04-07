import { useState, useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import moment from 'moment';

// import { modelConf, ensemblesPQPFConf, obsEroAriFfgConf } from '../conf.js';

// const prodConf = {
//     ...modelConf,
//     ...ensemblesPQPFConf,
//     ...obsEroAriFfgConf
// }

const HourSlider = (props) => {

    let currParamConf = props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]]
    let currProdConf = props.prodConf[props.menuSelections["selectedProduct"]]


    // This portion set the forcast hour value when you move the sliders bar... so [+01] or [-01]
    // Didn't need to change for subhourly because can think of each 15m as a fhr timestep, so have 18*4
    const valueLabelFormat = (value) => {
        // Determine if we're in a subhourly context (15-min indices)
        let isSubhourSlider = false
        if (props.comparisonPanels && props.comparisonPanels.length > 0) {
            let refPanel = props.comparisonPanels[props.referencePanel || 0]
            if (refPanel) {
                let rProdConf = props.prodConf[refPanel.selectedProduct]
                isSubhourSlider = (`subhour` in rProdConf) && rProdConf.subhour && refPanel.selectedParameter !== "subhmax15precip"
            }
        } else {
            isSubhourSlider = (`subhour` in currProdConf) && currProdConf.subhour && props.menuSelections["selectedParameter"] !== "subhmax15precip"
        }

        if (isSubhourSlider) {
            let hours = value / 4
            let label = hours % 1 === 0 ? hours.toString() : hours.toFixed(2)
            return `[+${label}]`
        }

        let formattedLabel = value
        if(value < 10){
            formattedLabel = '0'+formattedLabel
        }

        let tmpDate = moment.utc(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')

        if((`archive` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].archive)) {
            tmpDate.subtract(value, "hours")
            return `[-${formattedLabel}]`;
        } else {
            tmpDate.add(value, "hours")
            return `[+${formattedLabel}]`;
        }

    }
    //VALID: ${tmpDate.format('HH z ddd DD MMM YYYY')}

    let validTimeLabel = ""
    let tmpDate = moment.utc(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
    //const [max, setMax] = useState()
    let max=props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
    //let max=useRef(0)
    if((`subhour` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].subhour)) {
        if (props.menuSelections["selectedParameter"] === "subhmax15precip" ) {
            //setMax(props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)*4)
            max=Math.floor(max/4)
        }
    }

    // In comparison mode, slider uses the reference panel's native units
    let refMin = props.filterHourThresh(currParamConf.min_fcst_hr, props.display)
    let refMax = max
    let refStep = props.filterHourThresh(currParamConf.fcst_hr_step, props.display)
    let refIsSubhour = false
    let refIsSubhmax = false
    if (props.comparisonPanels && props.comparisonPanels.length > 0) {
        let refPanel = props.comparisonPanels[props.referencePanel || 0]
        if (refPanel) {
            let rProdConf = props.prodConf[refPanel.selectedProduct]
            let rParamConf = rProdConf["parameters"][refPanel.selectedParameterGroup][refPanel.selectedParameter]
            let rIsStatic = (rProdConf.static_image) || (rProdConf.no_fhr_in_url) || (rProdConf.display_slider === false)
            refIsSubhour = (`subhour` in rProdConf) && rProdConf.subhour
            refIsSubhmax = refPanel.selectedParameter === "subhmax15precip"

            if (!rIsStatic) {
                refMin = props.filterHourThresh(rParamConf.min_fcst_hr, props.display)
                refMax = props.filterHourThresh(rProdConf.num_fcst_hrs, props.display)
                refStep = props.filterHourThresh(rParamConf.fcst_hr_step, props.display)
                // For subhmax15precip, max is divided by 4 (hours, not 15-min indices)
                if (refIsSubhour && refIsSubhmax) {
                    refMax = Math.floor(refMax / 4)
                }
                // For other subhourly params, native units are 15-min indices - keep as-is
            }
        }
    }
    //     else {
    //         //setMax(props.filterHourThresh(currProdConf.num_fcst_hrs, props.display))
    //         max=props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
    //     }
    // }
    // else {
    //     //setMax(props.filterHourThresh(currProdConf.num_fcst_hrs, props.display))
    //     max=props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
    // }

    if (props.comparisonPanels && props.comparisonPanels.length > 0) {
        // In comparison mode, use reference panel's run time and time system
        let refPanel = props.comparisonPanels[props.referencePanel || 0]
        if (refPanel) {
            let refRun = refPanel.selectedRun || props.menuSelections["selectedRun"]
            tmpDate = moment.utc(refRun, 'HH z ddd DD MMM YYYY')
        }
        if (refIsSubhour && !refIsSubhmax) {
            // Slider is in 15-min indices
            let quotient = Math.floor(props.fcstHr / 4)
            let remainder = props.fcstHr % 4
            let mm = remainder * 15
            tmpDate = tmpDate.add(quotient, "hours")
            tmpDate = tmpDate.add(mm, "minutes")
            validTimeLabel = `${tmpDate.format('HHmm z ddd DD MMM YYYY')}`
        } else {
            // Slider is in hours
            tmpDate = tmpDate.add(props.fcstHr, "hours")
            validTimeLabel = `${tmpDate.format('HH z ddd DD MMM YYYY')}`
        }
    } else if((`archive` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].archive)) {
        tmpDate = tmpDate.subtract(props.fcstHr, "hours")
        validTimeLabel = `${tmpDate.format('HH z ddd DD MMM YYYY')}`
    } else if((`subhour` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].subhour)) {
        if (props.menuSelections["selectedParameter"] === "subhmax15precip" ) {
            tmpDate = tmpDate.add(props.fcstHr, "hours")
            validTimeLabel = `${tmpDate.format('HH z ddd DD MMM YYYY')}`
        } else {
            var quotient = Math.floor(props.fcstHr/4);
            var remainder = props.fcstHr % 4;
            var mm;
            if(remainder === 0) {
                mm = 0
            } else if (remainder === 1) {
                mm = 15
            } else if (remainder === 2) {
                mm = 30
            } else if (remainder === 3) {
                mm = 45
            }
            tmpDate = tmpDate.add(quotient, "hours")
            tmpDate = tmpDate.add(mm, "minutes")
            //var newHour = Math.floor(props.fcstHr*4+4);  //the 15m data has 4 fhr before getting to hourly fhr1. Example 12cyc for HRRR v13z fhr is 01, but for HRRR15 its
            //tmpDate = tmpDate.add(newHour, "hours")
            validTimeLabel = `${tmpDate.format('HHmm z ddd DD MMM YYYY')}`
            //max=max*4
        }
    } else {
        tmpDate = tmpDate.add(props.fcstHr, "hours")
        validTimeLabel = `${tmpDate.format('HH z ddd DD MMM YYYY')}`
    }

    // console.log(tmpDate.format('HH z ddd DD MMM YYYY'))
    let showSlider = true
    if((`display_slider` in props.prodConf[props.menuSelections['selectedProduct']]) && (!props.prodConf[props.menuSelections['selectedProduct']].display_slider)) {
        showSlider = false
    }

    return (
        <>
            {currParamConf !== null && showSlider ?
                <div className="flex flex-col w-full max-w-4xl pb-2 pt-6 pl-[40px] pr-[40px] lg:pl-0 lg:pr-0">
                    <Slider
                    value={props.fcstHr}
                    track={false}
                    aria-label="forecast_hour"
                    defaultValue={props.comparisonPanels ? refMin : props.filterHourThresh(currParamConf.min_fcst_hr, props.display)}
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    step={props.comparisonPanels ? refStep : props.filterHourThresh(currParamConf.fcst_hr_step, props.display)}
                    marks
                    min={props.comparisonPanels ? refMin : props.filterHourThresh(currParamConf.min_fcst_hr, props.display)}
                    max={props.comparisonPanels ? refMax : max}
                    onChange={props.onChange}
                    valueLabelDisplay="on"
                    />
                    <p
                    className="text-center"
                    >
                        <b>Valid: </b> {validTimeLabel}
                    </p>
                </div>
            :
                null
            }
        </>
    )
}

export default HourSlider
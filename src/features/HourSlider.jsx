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
    //     else {
    //         //setMax(props.filterHourThresh(currProdConf.num_fcst_hrs, props.display))
    //         max=props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
    //     }
    // }
    // else {
    //     //setMax(props.filterHourThresh(currProdConf.num_fcst_hrs, props.display))
    //     max=props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
    // }

    if((`archive` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].archive)) {
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
                    defaultValue={props.filterHourThresh(currParamConf.min_fcst_hr, props.display)}
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    step={props.filterHourThresh(currParamConf.fcst_hr_step, props.display)}
                    marks
                    min={props.filterHourThresh(currParamConf.min_fcst_hr, props.display)}
                    //max={props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)}
                    max={max}
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
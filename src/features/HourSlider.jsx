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



    const valueLabelFormat = (value) => {

        let formattedLabel = value
        if(value < 10){
            formattedLabel = '0'+formattedLabel
        } 

        let tmpDate = moment.utc(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')

        if(props.menuSelections['selectedProduct'] === "Observations") {
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

    if(props.menuSelections['selectedProduct'] === "Observations") {
        tmpDate = tmpDate.subtract(props.fcstHr, "hours")
        validTimeLabel = `${tmpDate.format('HH z ddd DD MMM YYYY')}`
    } else {
        tmpDate = tmpDate.add(props.fcstHr, "hours")
        validTimeLabel = `${tmpDate.format('HH z ddd DD MMM YYYY')}`
    }

    // console.log(tmpDate.format('HH z ddd DD MMM YYYY'))

    return (
        <>
            {currParamConf !== null ?
                <div className="flex flex-col w-full max-w-4xl pb-2 pt-6 pl-[40px] pr-[40px] lg:pl-0 lg:pr-0">
                    <Slider
                      // value={props.fcstHr}
                      track={false}
                      aria-label="forecast_hour"
                      defaultValue={currParamConf.min_fcst_hr}
                      getAriaValueText={valueLabelFormat}
                      valueLabelFormat={valueLabelFormat}
                      step={currParamConf.fcst_hr_step}
                      marks
                      min={currParamConf.min_fcst_hr}
                      max={currProdConf.num_fcst_hrs}
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
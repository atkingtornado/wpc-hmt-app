import { useState, useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import Moment from 'react-moment';
import moment from 'moment';

import { modelConf, ensemblesPQPFConf } from '../conf.js';

const prodConf = {
    ...modelConf,
    ...ensemblesPQPFConf
}

const HourSlider = (props) => {

    let currParamConf = prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]]
    let currProdConf = prodConf[props.menuSelections["selectedProduct"]]

    const valueLabelFormat = (value) => {

        let formattedLabel = value
        if(value < 10){
            formattedLabel = '0'+formattedLabel
        } 

        let tmpDate = moment(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
        tmpDate.add(value, "hours")

        return `[+${formattedLabel}] VALID: ${tmpDate.format('HH z ddd DD MMM YYYY')}`;
    }


    return (
        <>
            {currParamConf !== null ?
                <div className="flex w-full max-w-2xl pb-2 pt-6">
                    <Slider
                      value ={props.fcstHr}
                      track={false}
                      aria-label="forecast_hour"
                      defaultValue={currParamConf.min_fcst_hr}
                      valueLabelDisplay="auto"
                      getAriaValueText={valueLabelFormat}
                      valueLabelFormat={valueLabelFormat}
                      step={currParamConf.fcst_hr_step}
                      marks
                      min={currParamConf.min_fcst_hr}
                      max={currProdConf.num_fcst_hrs}
                      onChange={props.onChange}
                      valueLabelDisplay="on"
                    />
                </div>
            :
                null
            }
        </>
    )
}

export default HourSlider
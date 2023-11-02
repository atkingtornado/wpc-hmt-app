import { useState, useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider';
import Moment from 'react-moment';
import moment from 'moment';

const HourSlider = (props) => {
	const valueLabelFormat = (value) => {
  	let formattedLabel = value
	  if(value < 10){
	    formattedLabel = '0'+formattedLabel
	  } 

	  let tmpDate = moment(props.run, 'HH z ddd DD MMM YYYY')
	  tmpDate.add(value, "hours")

	  return `[+${formattedLabel}] VALID: ${tmpDate.format('HH z ddd DD MMM YYYY')}`;
	}
	return (
    <div className="flex w-full max-w-2xl pb-2 pt-6">
    		<Slider
    			track={false}
    		  aria-label="forecast_hour"
    		  defaultValue={props.minHr}
    		  valueLabelDisplay="auto"
    		  getAriaValueText={valueLabelFormat}
        	valueLabelFormat={valueLabelFormat}
    		  step={1}
    		  marks
    		  min={props.minHr}
    		  max={props.maxHr}
    		  onChange={props.onChange}
    		  valueLabelDisplay="on"
    		/>
    </div>
	)
}

export default HourSlider
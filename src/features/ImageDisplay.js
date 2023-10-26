import { useState, useEffect } from 'react'

import Moment from 'react-moment';
import moment from 'moment';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { modelConf, ensemblesPQPFConf } from '../conf.js';

const prodConf = {
	...modelConf,
	...ensemblesPQPFConf
}


const ImageDisplay = () => {

	const initialProduct = Object.keys(prodConf)[0]
	const initalRun = ""
	const initialParameterGroup = Object.keys(prodConf[initialProduct]["parameters"])[0]
	const initialParameter = Object.keys(prodConf[initialProduct]["parameters"][initialParameterGroup])[0]

	const [fcstHr, setFcstHr] = useState(0)
	// const [maxHr, setMaxHr] = useState(prodConf[initialProduct]["num_fcst_hrs"])
	const [menuSelections, setSelectedMenuSelections] = useState({
		"selectedProduct": initialProduct,
		"selectedRun": initalRun,
		"selectedParameterGroup": initialParameterGroup,
		"selectedParameter": initialParameter
	})
	const [imgLink, setImgLink] = useState(null)
	const [dateOptions, setDateOptions] = useState([])

	useEffect(() => {
		genDateOptions()
	},[])



	useEffect(() => {
		constructImgUrl()
	},[menuSelections, fcstHr])

	const genDateOptions = () => {
		let currentDate = moment().utc()
		currentDate.subtract(1, 'hours');
		let run_hrs = prodConf[menuSelections["selectedProduct"]]["run_hrs"]

		let start_hr = null
		run_hrs.forEach((hr) => {
			if ( parseInt(hr) < currentDate.hour() ) {
				start_hr = hr
			}
		})
		currentDate.set({hour:start_hr, minute:0, second:0})

		let freq = 1
		if(run_hrs.length > 2) {
			freq = parseInt(run_hrs[1]) - parseInt(run_hrs[0]) 
		}

		let endDate = moment(currentDate).subtract(4, 'days'); 
		let dateArr = [currentDate]
		let index = 0

		while (dateArr[index] > endDate){
			let tmpDate = moment(dateArr[index]).subtract(freq, 'hours');
			dateArr.push(tmpDate)
			index+=1
		}
		setDateOptions(dateArr)

		if(menuSelections["selectedRun"] === ""){
			let tmpMenuSelections = {...menuSelections}

			tmpMenuSelections["selectedRun"] = dateArr[0].format('HH z ddd DD MMM YYYY')
			setSelectedMenuSelections(tmpMenuSelections)
		}
	}

	const constructImgUrl = () => {
		let url = prodConf[menuSelections["selectedProduct"]]["url_base"]

		let fcstHrStr = ""
		if(fcstHr < 10) {
			fcstHrStr = "0"+fcstHr.toString()
		} else {
			fcstHrStr = fcstHr.toString()
		}

		if(menuSelections["selectedRun"] !== ''){
			let tmpDate = moment(menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')

			url += menuSelections["selectedParameter"] + "_" + tmpDate.format("YYYYMMDDHH") + "f" + fcstHrStr + ".png"
			setImgLink(url)
		}
		
	}

	const handleMenuChange = (e, selectionID) => {
		let tmpMenuSelections = {...menuSelections}
		tmpMenuSelections[selectionID] = e.target.value

		if (selectionID === "selectedProduct") {
			genDateOptions()

			let allParamGroups = []
			let allParams = []

			Object.keys(prodConf[e.target.value]["parameters"]).forEach((grp) => {
				Object.keys(prodConf[e.target.value]["parameters"][grp]).forEach((param) => {
					allParamGroups.push(grp)
					allParams.push(param)
				})
			})

			if(!allParams.includes(menuSelections["selectedParameter"])) {
				tmpMenuSelections["selectedParameter"] = allParams[0]
				tmpMenuSelections["selectedParameterGroup"] = allParams[0]
			}
		}
		else if (selectionID === "selectedParameter") {
			let allParamGroups = []
			let allParams = []
			Object.keys(prodConf[menuSelections["selectedProduct"]]["parameters"]).forEach((grp) => {
				Object.keys(prodConf[menuSelections["selectedProduct"]]["parameters"][grp]).forEach((param) => {
					allParamGroups.push(grp)
					allParams.push(param)
				})
			})

			let index = allParams.indexOf(e.target.value)
			tmpMenuSelections["selectedParameterGroup"] = allParamGroups[index]
		}

		setSelectedMenuSelections(tmpMenuSelections)
	}

	const handleSliderChange = (e) => {
		setFcstHr(e.target.value)
	}

	return(
		<div className="w-full flex flex-col justify-center items-center">
			<SelectionMenu dateOptions={dateOptions} menuSelections={menuSelections} onChange={handleMenuChange}/>
			<HourSlider onChange={handleSliderChange} value={fcstHr} run={menuSelections["selectedRun"]} maxHr={prodConf[menuSelections["selectedProduct"]]["num_fcst_hrs"]} minHr={prodConf[menuSelections["selectedProduct"]]["min_fcst_hr"]}/>
			<div className="">
				<Zoom>
					<img className="min-h-[700px] h-[calc(100vh-365px)]" src={imgLink}></img>
				</Zoom>
			</div>
		</div>
	)
}

const SelectionMenu = (props) => {

	return (
		<div className="m-2 flex">
			<div className="m-2">
				<FormControl fullWidth>
		        <InputLabel id="model-select-label">Product</InputLabel>
		        <Select
		          labelId="model-select-label"
		          id="model-select"
		          value={props.menuSelections["selectedProduct"]}
		          label="Model"
		          onChange={(e)=>{props.onChange(e, "selectedProduct")}}
		        >
		        	<ListSubheader>Models</ListSubheader>
		        	{
		        		Object.keys(modelConf).map((model)=>{
		        			return (
		        				<MenuItem key={model} value={model}>{model}</MenuItem>
		        			)
		        		})
		        	}
		        	<ListSubheader>Ensembles & PQPF</ListSubheader>
		        	{
		        		Object.keys(ensemblesPQPFConf).map((prod)=>{
		        			return (
		        				<MenuItem key={prod} value={prod}>{prod}</MenuItem>
		        			)
		        		})
		        	}
		        	<ListSubheader>OBS, EROs, ARIs, & FFGs</ListSubheader>

		        </Select>
		    </FormControl>
	    </div>
	    <div className="m-2">
				<FormControl fullWidth>
		        <InputLabel id="run-select-label">Run</InputLabel>
		        <Select
		          labelId="run-select-label"
		          id="run-select"
		          value={props.menuSelections["selectedRun"]}
		          label="Run"
		          onChange={(e)=>{props.onChange(e, "selectedRun")}}
		          defaultValue = ""
		        >
		        	{
		        		props.dateOptions.map((date) => {
		        			return(<MenuItem key={date.format('HH z ddd DD MMM YYYY')} value={date.format('HH z ddd DD MMM YYYY')}>{date.format('HH z ddd DD MMM YYYY')}</MenuItem>)
		        		})
		        	}

		        </Select>
		    </FormControl>
	    </div>
	    <div className="m-2">
		    <FormControl fullWidth>
		        <InputLabel id="parameter-select-label">Parameter</InputLabel>
		        <Select
		          labelId="parameter-select-label"
		          id="parameter-select"
		          value={props.menuSelections["selectedParameter"]}
		          label="Parameter"
		          onChange={(e)=>{props.onChange(e, "selectedParameter")}}
		        >
		        	{

		        		Object.keys(prodConf[props.menuSelections["selectedProduct"]]["parameters"]).map((grp, i) => {

		        			return (
		        				[
			        				<ListSubheader>
			        					{grp}
			        				</ListSubheader>,
			        				
			        				...Object.keys(prodConf[props.menuSelections["selectedProduct"]]["parameters"][grp]).map((param, i) => {
			        					return(
			        						<MenuItem key={param} value={param}>{prodConf[props.menuSelections["selectedProduct"]]["parameters"][grp][param]}</MenuItem>
			        					)
			        				})
				        			
				        		]
		        			)
		        		})
		        	}
		        </Select>
		    </FormControl>
		  </div>
    </div>
	)
}

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

export default ImageDisplay
import { useState, useEffect, useRef } from 'react'

import Select from 'react-select'

import { modelConf, ensemblesPQPFConf, obsEroAriFfgConf } from '../conf.js';

const prodConf = {
	...modelConf,
	...ensemblesPQPFConf, 
	...obsEroAriFfgConf
}

const SelectionMenu = (props) => {
	const modelOptions = Object.keys(modelConf).map((model)=>({value:model, label:model}))
	const ensemblesPQPFOptions = Object.keys(ensemblesPQPFConf).map((prod)=>({value:prod, label:prod}))
	const obsEroAriFfgOptions = Object.keys(obsEroAriFfgConf).map((prod)=>({value:prod, label:prod}))
	const groupedProductOptions = [
		{label: "Models", options: modelOptions},
		{label: "Ensembles & PQPF", options: ensemblesPQPFOptions},
		{label: "Obs, EROs, ARIs, & FFGs", options: obsEroAriFfgOptions}
	]

	const runOptions = props.dateOptions.map((date)=>({value:date.format('HH z ddd DD MMM YYYY'), label:date.format('HH z ddd DD MMM YYYY')}))

	const groupedParamOptions = []
	Object.keys(prodConf[props.menuSelections["selectedProduct"]]["parameters"]).map((grp, i) => {
		groupedParamOptions.push({label: grp, options: []})

		Object.keys(prodConf[props.menuSelections["selectedProduct"]]["parameters"][grp]).map((param, j) => {
			groupedParamOptions[i]['options'].push({label: prodConf[props.menuSelections["selectedProduct"]]["parameters"][grp][param].label, value: param})
		})
	})

	return (
		<div className="m-2 flex w-full max-w-2xl">
			<div className="m-2 w-1/5">
				<Select 
					aria-label="product select"
					options={groupedProductOptions}
					value={{ value: props.menuSelections["selectedProduct"], label: props.menuSelections["selectedProduct"]}}
					onChange={(e)=>{props.onChange(e, "selectedProduct")}}
					isSearchable
				/>
	   		</div>
	   		<div className="m-2 w-2/5">
	   			<Select 
					aria-label="run select"
					options={runOptions}
					value={{ value: props.menuSelections["selectedRun"], label: props.menuSelections["selectedRun"]}}
					onChange={(e)=>{props.onChange(e, "selectedRun")}}
					isSearchable
				/>
			</div>
			<div className="m-2 w-2/5">
	   			<Select 
					aria-label="parameter select"
					options={groupedParamOptions}
					value={{ value: props.menuSelections["selectedParameter"], label: prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]].label}}
					onChange={(e)=>{props.onChange(e, "selectedParameter")}}
					isSearchable
				/>
			</div>
	   	</div>
	)
}
export default SelectionMenu
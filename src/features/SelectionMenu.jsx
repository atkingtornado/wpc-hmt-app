import { useState, useEffect, useRef } from 'react'

import Select from 'react-select'

// import { modelConf, ensemblesPQPFConf, obsEroAriFfgConf } from '../conf.js';

// const prodConf = {
// 	...modelConf,
// 	...ensemblesPQPFConf, 
// 	...obsEroAriFfgConf
// }

const SelectionMenu = (props) => {
	const categories = ["Models", "Ensembles & PQPF", "Obs, EROs, ARIs, & FFGs"]
	const categoryOptions = Object.keys(categories).map((category)=>({value:category, label:category}))
	const modelOptions = Object.keys(props.modelConf).map((model)=>({value:model, label:model}))
	const ensemblesPQPFOptions = Object.keys(props.ensemblesPQPFConf).map((prod)=>({value:prod, label:prod}))
	const obsEroAriFfgOptions = Object.keys(props.obsEroAriFfgConf).map((prod)=>({value:prod, label:prod}))
	const groupedProductOptions = [
		{label: "Models", options: modelOptions},
		{label: "Ensembles & PQPF", options: ensemblesPQPFOptions},
		{label: "Obs, EROs, ARIs, & FFGs", options: obsEroAriFfgOptions}
	]

	const runOptions = props.dateOptions.map((date)=>({value:date.format('HH z ddd DD MMM YYYY'), label:date.format('HH z ddd DD MMM YYYY')}))
	const paramGroupOptions = Object.keys(props.prodConf[props.menuSelections["selectedProduct"]]["parameters"]).map((grp, i) => ({value:grp, label:grp}))
	const paramOptions = Object.keys(props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]]).map(
		(param, j) => (
			{value:param, label: props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][param].label}
		)
	)

	// const groupedParamOptions = []
	// Object.keys(prodConf[props.menuSelections["selectedProduct"]]["parameters"]).map((grp, i) => {
	// 	groupedParamOptions.push({label: grp, options: []})

	// 	Object.keys(prodConf[props.menuSelections["selectedProduct"]]["parameters"][grp]).map((param, j) => {
	// 		groupedParamOptions[i]['options'].push({label: prodConf[props.menuSelections["selectedProduct"]]["parameters"][grp][param].label, value: param})
	// 	})
	// })

	return (
		<div className="m-2 flex w-full max-w-5xl">
			<div className="m-2 w-1/4">
				<Select 
					aria-label="product select"
					options={groupedProductOptions}
					value={{ value: props.menuSelections["selectedProduct"], label: props.menuSelections["selectedProduct"]}}
					onChange={(e)=>{props.onChange(e, "selectedProduct")}}
					isSearchable
				/>
	   		</div>
	   		<div className="m-2 w-1/4">
	   			<Select 
					aria-label="run select"
					options={runOptions}
					value={{ value: props.menuSelections["selectedRun"], label: props.menuSelections["selectedRun"]}}
					onChange={(e)=>{props.onChange(e, "selectedRun")}}
					isSearchable
				/>
			</div>
			<div className="m-2 w-1/4">
	   			<Select 
					aria-label="param group select"
					options={paramGroupOptions}
					value={{ value: props.menuSelections["selectedParameterGroup"], label: props.menuSelections["selectedParameterGroup"]}}
					onChange={(e)=>{props.onChange(e, "selectedParameterGroup")}}
					isSearchable
				/>
			</div>
			<div className="m-2 w-1/4">
	   			<Select 
					aria-label="parameter select"
					options={paramOptions}
					value={{ value: props.menuSelections["selectedParameter"], label:props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]].label}}
					onChange={(e)=>{props.onChange(e, "selectedParameter")}}
					isSearchable
				/>
			</div>
	   	</div>
	)
}
export default SelectionMenu
import { useState, useEffect, useRef } from 'react'

import Select from 'react-select'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const SelectionMenuBottom = (props) => {

	const categories = ["Models", "Subhourly Models", "AI Models", "Ensembles", "Obs, EROs, ARIs, & FFGs"]
	const categoryOptions = Object.keys(categories).map((category)=>({value:category, label:category}))
	const modelOptions = Object.keys(props.modelConf).map((model)=>({value:model, label:model}))
	const subModelOptions = Object.keys(props.subModelConf).map((model)=>({value:model, label:model}))
	const aiModelOptions = Object.keys(props.aiModelConf).map((model)=>({value:model, label:model}))
	const ensemblesPQPFOptions = Object.keys(props.ensemblesPQPFConf).map((prod)=>({value:prod, label:prod}))
	const eroOptions = Object.keys(props.eroConf).map((prod)=>({value:prod, label:prod}))
    const obsOptions = Object.keys(props.obsConf).map((prod)=>({value:prod, label:prod}))
    const ariFfgOptions = Object.keys(props.ariFfgConf).map((prod)=>({value:prod, label:prod}))
	const groupedProductOptions = [
		{label: "Models", options: modelOptions},
        {label: "SubHourly Models", options: subModelOptions},
        {label: "Ensembles", options: ensemblesPQPFOptions},
		{label: "AI Models", options: aiModelOptions},        
		{label: "EROs", options: eroOptions},
        {label: "Observations", options: obsOptions},
        {label: "ARIs & FFGs", options: ariFfgOptions}
	]

	const runOptions = props.dateOptions.map((date)=>({value:date.format('HH z ddd DD MMM YYYY'), label:date.format('HH z ddd DD MMM YYYY')}))
	const paramGroupOptions = Object.keys(props.prodConf[props.menuSelections["selectedProduct"]]["parameters"]).map((grp, i) => ({value:grp, label:grp}))
	const paramOptions = Object.keys(props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]]).map(
		(param, j) => (
			{value:param, label: props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][param].label}
		)
	)

	return (
        <>
        <div className="m-1 flex flex-col w-full max-w-5xl">
            <div className="w-[95%] flex flex-col space-y-[10px] p-2">
                <div className="w-full">
                    <Select 
                        aria-label="product select"
                        options={groupedProductOptions}
                        value={{ value: props.menuSelections["selectedProduct"], label: props.menuSelections["selectedProduct"]}}
                        onChange={(e)=>{props.onChange(e, "selectedProduct")}}
                        isSearchable
                    />
                    <span style={{ opacity: 0.4, fontSize: 14 }}>Select Model</span>
                </div>
                <div className="w-full">
                    <Select 
                        aria-label="run select"
                        options={runOptions}
                        value={{ value: props.menuSelections["selectedRun"], label: props.menuSelections["selectedRun"]}}
                        onChange={(e)=>{props.onChange(e, "selectedRun")}}
                        isSearchable
                    />
                    <span style={{ opacity: 0.4, fontSize: 14 }}>Select Cycle</span>
                </div>
                <div className="w-full">
                    <Select 
                        aria-label="param group select"
                        options={paramGroupOptions}
                        value={{ value: props.menuSelections["selectedParameterGroup"], label: props.menuSelections["selectedParameterGroup"]}}
                        onChange={(e)=>{props.onChange(e, "selectedParameterGroup")}}
                        isSearchable
                    />
                    <span style={{ opacity: 0.4, fontSize: 14 }}>Parameter Group</span>
                </div>
                <div className="w-full">
                    <Select 
                        aria-label="parameter select"
                        options={paramOptions}
                        value={{ value: props.menuSelections["selectedParameter"], label:props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]].label}}
                        onChange={(e)=>{props.onChange(e, "selectedParameter")}}
                        isSearchable
                    />
                    <span style={{ opacity: 0.4, fontSize: 14 }}>Parameter</span>
                </div>
            </div>
        </div>
        </>
	)
}
export default SelectionMenuBottom
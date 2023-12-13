import { useState, useEffect, useRef } from 'react'

import Select from 'react-select'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

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

	return (
		<div className="m-1 flex flex-col w-full max-w-5xl">
			<div className="m-1 flex w-full justify-center">

				<div className="flex m-2">
					<ToggleButtonGroup
					  color="primary"
				      value={props.retro}
				      exclusive
				      onChange={props.handleRetroChange}
				      aria-label="retro"

				    >
				      <ToggleButton value={true}><b>Retro</b></ToggleButton>
				      <ToggleButton value={false}><b>Current</b></ToggleButton>
				    </ToggleButtonGroup>
				</div>
				<div>

				    {props.retro ?
				    	<div className="flex grow justify-center m-2">
							<LocalizationProvider dateAdapter={AdapterMoment}>
								<DatePicker 
									value={props.retroDate}
									label="Valid forecast end time (12z)" 
									onChange={props.handleRetroDateChange}
									disableFuture 
								/>
							</LocalizationProvider>
						</div>
				    :
				    	null
				    }
				</div>

			</div>
			{props.retro ?
				<>
					<div className="flex justify-center mt-2 mb-2 w-full">
						<div className="max-w-lg grow ">
							<ToggleButtonGroup
							  color="primary"
						      value={props.domain}
						      exclusive
						      onChange={props.handleDomainChange}
						      aria-label="domain"
						      size="small"
						      fullWidth
						    >
						      <ToggleButton value="conus"><b>CONUS</b></ToggleButton>
						      <ToggleButton value="zoomed"><b>Domain 1</b></ToggleButton>
						      <ToggleButton value="zoomed2"><b>Domain 2</b></ToggleButton>
						    </ToggleButtonGroup>
						</div>
					</div>
				</>
			:
				null
			}

			<div className="m-1 flex w-full">
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
		</div>
	)
}
export default SelectionMenu
import { useState, useEffect, useRef } from 'react'

import Select from 'react-select'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import ComparisonToggle from './ComparisonToggle';

const SelectionMenuTop = (props) => {

	return (
        <>
		<div className="m-1 flex flex-col w-full max-w-5xl">
			<div className="m-1 flex w-full justify-center items-center">

				<div className="flex m-2">
					<ToggleButtonGroup
					  color="primary"
				      value={props.retro}
				      exclusive
				      onChange={props.handleRetroChange}
				      aria-label="retro"
				      size="small"
				    >
				      <ToggleButton value={true} sx={{ textTransform: 'none', px: 1.5 }}><b>Retro</b></ToggleButton>
				      <ToggleButton value={false} sx={{ textTransform: 'none', px: 1.5 }}><b>Realtime</b></ToggleButton>
				    </ToggleButtonGroup>
				</div>
				{props.comparisonMode !== undefined &&
					<ComparisonToggle comparisonMode={props.comparisonMode} onChange={props.handleComparisonModeChange} />
				}
				<div>

				    {props.retro ?
				    	<div className="flex grow justify-center m-2">
							<LocalizationProvider dateAdapter={AdapterMoment}>
								<DatePicker
									value={props.retroDate}
									label="Model cycle date"
									onChange={props.handleRetroDateChange}
									disableFuture
									slotProps={{
										textField: {
											size: 'small'
										}
									}}
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
						      <ToggleButton value="nepac"><b>NE Pacific</b></ToggleButton>
						      <ToggleButton value="west"><b>West</b></ToggleButton>
						    </ToggleButtonGroup>
						</div>
					</div>
				</>
			:
				null
			}
        </div>
        </>
	)
}
export default SelectionMenuTop
import { useState, useEffect, useRef } from 'react'

import Moment from 'react-moment';
import moment from 'moment';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from 'react-select'
// import Select, { SelectChangeEvent } from '@mui/material/Select';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { modelConf, ensemblesPQPFConf } from '../conf.js';

const prodConf = {
	...modelConf,
	...ensemblesPQPFConf
}


const ImageDisplay = (props) => {

	const [imgElements, setImgelements] = useState([])
	const [imgsAreLoading, setImgsAreLoading] = useState(false)
	const [numLoaded, setNumLoaded] = useState(0)
	const loadStatus = useRef(0)


	useEffect(() => {
		if(props.menuSelections["selectedRun"] !== "" && props.menuSelections["selectedProduct"] !== ""){
			setImgsAreLoading(true)

		    const loadImage = image => {
		      return new Promise((resolve, reject) => {
		        image.onload = () => {
					setTimeout(() => {
						loadStatus.current = loadStatus.current + 1
						setNumLoaded(loadStatus.current)
						return(resolve(image.src))
					}, 10)
		        	
		        }
		        image.onerror = (err) => {
		        	loadStatus.current = loadStatus.current + 1
		        	setNumLoaded(loadStatus.current)
		        	return(reject(err))
		        }
		      })
		    }

		    let tmpDate = moment(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
			let urlBase = prodConf[props.menuSelections["selectedProduct"]]["url_base"]
		    let promises = []
		    let tmpImgElements = []
			for(let i=0; i<prodConf[props.menuSelections["selectedProduct"]]["num_fcst_hrs"]; i++) {

				let fcstHrStr = ""
				if(i < 10) {
					fcstHrStr = "0"+i.toString()
				} else {
					fcstHrStr = i.toString()
				}

				let url = urlBase
				url += props.menuSelections["selectedParameter"] + "_" + tmpDate.format("YYYYMMDDHH") + "f" + fcstHrStr + ".png"

				// let imgObj = {url:url, index:i}
				const imageElement = new Image()
		        imageElement.src = url
				tmpImgElements.push(imageElement)

				let promise = loadImage(imageElement)
				promises.push(promise)
			}
			setImgelements(tmpImgElements)

		    Promise.allSettled(promises)
		      .then(() => {
		      	setImgsAreLoading(false)
		      	setNumLoaded(0)
		      	loadStatus.current = 0
		      })
		}
	}, [props.menuSelections])


	return(
		<div className="h-screen">
			{imgsAreLoading ?
				<div className='mt-10'>
					<CircularProgressWithLabel size={'4rem'} value={(numLoaded / prodConf[props.menuSelections["selectedProduct"]]["num_fcst_hrs"])*100} />
				</div>
			:
				null
			}

			{imgElements.map((imgEl, i) => {
				let isVisible = (i === props.fcstHr) && !imgsAreLoading
				return (
					<Zoom key={i+"img"} >
						<img className={`${isVisible ? 'block' : 'hidden' } max-h-[700px] object-scale-down m-auto`} src={imgEl.src}/> 
						{/*object-scale-down min-h-[700px] h-[calc(100vh-365px)]*/}
					</Zoom>
				)
			})}

		</div>
	)
}


const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default ImageDisplay
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

import { modelConf, ensemblesPQPFConf, obsEroAriFfgConf } from '../conf.js';

const prodConf = {
	...modelConf,
	...ensemblesPQPFConf,
	...obsEroAriFfgConf
}


const ImageDisplay = (props) => {

	const [imgElements, setImgelements] = useState([])
	const [imgsAreLoading, setImgsAreLoading] = useState(false)
	const [numLoaded, setNumLoaded] = useState(0)
	const loadStatus = useRef(0)
	const loadingId = useRef(null)

	const prevFcstHr = useRef(0)

	let currParamConf = prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]]
	let currProdConf = prodConf[props.menuSelections["selectedProduct"]]
	
	  useEffect(() => {
	    prevFcstHr.current = props.fcstHr;
	  }, [props.fcstHr]);

	useEffect(() => {
		if(currParamConf !== null && props.menuSelections["selectedRun"] !== "" && props.menuSelections["selectedProduct"] !== ""){
			setImgsAreLoading(true)
			setNumLoaded(0)
			loadingId.current = props.menuSelections["selectedProduct"]+props.menuSelections["selectedRun"]+props.menuSelections["selectedParameter"]
			loadStatus.current = 0

			// Try to force previous images to stop loading 
			imgElements.forEach((obj)=>{
				obj.img.src = ''
				obj.img.onload = null
				obj.img.onerror = null
			})

	    const loadImage = (image, currLoadingId) => {
	      return new Promise((resolve, reject) => {
	        image.onload = () => {
	        	if(currLoadingId === loadingId.current){
	        		loadStatus.current = loadStatus.current + 1
							setNumLoaded(loadStatus.current)
							return(resolve(image.src))
	        	}
	        }
	        image.onerror = (err) => {
	        	if(currLoadingId === loadingId.current){
		        	loadStatus.current = loadStatus.current + 1
		        	setNumLoaded(loadStatus.current)
		        	return(reject(err))
		        }
	        }
	      })
	    }

	    
			let urlBase = prodConf[props.menuSelections["selectedProduct"]]["url_base"]
	    let promises = []
	    let tmpImgElements = []

			for(let i=currParamConf.min_fcst_hr; i<=currProdConf.num_fcst_hrs; i+=currParamConf.fcst_hr_step) {
				let tmpDate = moment(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
				let url = urlBase

				if(props.menuSelections['selectedProduct'] === "Observations") {
					tmpDate.subtract(i, "hours")
					url += props.menuSelections["selectedParameter"] + "_" + tmpDate.format("YYYYMMDDHH") + ".png"
					console.log(i, url)
				} else {
					let fcstHrStr = ""
					if(i < 10) {
						fcstHrStr = "0"+i.toString()
					} else {
						fcstHrStr = i.toString()
					}
					url += props.menuSelections["selectedParameter"] + "_" + tmpDate.format("YYYYMMDDHH") + "f" + fcstHrStr + ".png"
				}	

				// let imgObj = {url:url, index:i}
				const imageElement = new Image()
		    imageElement.src = url
				tmpImgElements.push({fcstHr:i, img:imageElement})

				let promise = loadImage(imageElement, loadingId.current)
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

	let tmpImgElements = [...imgElements]
	// reverse order of img elements if scrubbing backwards so currently displayed image is removed prior to adding the new one
	if (props.fcstHr < prevFcstHr.current) {
		tmpImgElements.reverse()
	}

	return(
		<div className="h-full">
			{imgsAreLoading ?
				<div className='mt-10'>
					<CircularProgressWithLabel size={'5rem'} value={(numLoaded / (currProdConf.num_fcst_hrs/currParamConf.fcst_hr_step))*100} />
				</div>
			:
				null
			}

			{tmpImgElements.map((imgEl) => {
				let isVisible = (imgEl.fcstHr === props.fcstHr) && !imgsAreLoading
				return (
					<Zoom key={imgEl.fcstHr+"img"} >
						<img className={`${isVisible ? 'block' : 'hidden' } max-h-[700px] object-scale-down m-auto`} src={imgEl.img.src}/> 
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
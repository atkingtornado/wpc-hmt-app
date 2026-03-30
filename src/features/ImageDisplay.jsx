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

// import { modelConf, ensemblesPQPFConf, obsEroAriFfgConf } from '../conf.js';

// const prodConf = {
// 	...modelConf,
// 	...ensemblesPQPFConf,
// 	...obsEroAriFfgConf
// }

function fhrString(value) {
    if(value < 10) {
        return "0"+value.toString()
    } else {
        return value.toString()
    }
}

function fhrStringSub(value) {
    if(value === 0) {
        return "0000"
    } else {
        var quotient = Math.floor(value/4);
        var remainder = value % 4;
        var mm;
        if(remainder === 0) {
            //quotient = quotient + 1
            mm = "00"
        } else if (remainder === 1) {
            mm = "15"
        } else if (remainder === 2) {
            mm = "30"
        } else if (remainder === 3) {
            mm = "45"
        }
        if(quotient < 10) {
            return "0"+quotient.toString()+mm
        } else {
            return quotient.toString()+mm
        }
    }
}


const ImageDisplay = (props) => {

    const [imgElements, setImgelements] = useState([])
    const [imgsAreLoading, setImgsAreLoading] = useState(false)
    const [numLoaded, setNumLoaded] = useState(0)
    const loadStatus = useRef(0)
    const loadingId = useRef(null)

    const prevFcstHr = useRef(0)

    let currParamConf = props.prodConf[props.menuSelections["selectedProduct"]]["parameters"][props.menuSelections["selectedParameterGroup"]][props.menuSelections["selectedParameter"]]
    let currProdConf = props.prodConf[props.menuSelections["selectedProduct"]]
        
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
            
            let runDate = moment.utc(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
            let promises = []
            let tmpImgElements = []

            // is full URL path provided? (currently not configured to load multiple forecast hours, can change that though)
            if (`url_full_path` in props.prodConf[props.menuSelections['selectedProduct']]) {
                let url = props.prodConf[props.menuSelections['selectedProduct']][`url_full_path`]
                url = url.replaceAll(`[RUN]`,runDate.format("YYYYMMDD"))
                url = url.replaceAll(`[RUN:YYYYMMDDHH]`,runDate.format("YYYYMMDDHH"))
                url = url.replaceAll(`[CYCLE]`,runDate.format("HH"))
                url = url.replaceAll(`[CYCLE:INT]`,String(parseInt(runDate.format("HH"))))
                url = url.replaceAll(`[PARAMETER]`,props.menuSelections["selectedParameter"])
                url = url.replaceAll(`[PARAMETER:STR2]`,fhrString(parseInt(props.menuSelections["selectedParameter"])))
                url = url.replaceAll(`[PARAMETER:STR4]`,fhrStringSub(parseInt(props.menuSelections["selectedParameter"])))

                // let imgObj = {url:url, index:i}
                const imageElement = new Image()
                imageElement.src = url
                tmpImgElements.push({fcstHr:1, img:imageElement})

                let promise = loadImage(imageElement, loadingId.current)
                promises.push(promise)
            
            // otherwise, construct URL path dynamically
            } else {
                //let urlBase = props.domain === 'conus' || !props.retro ? props.urlBase : props.urlBase  + props.domain + '/'
                let urlBase = props.urlBase + props.prodConf[props.menuSelections["selectedProduct"]]["url_end"].replace("[RUN]",runDate.format("YYYYMMDD"))
                if (`archive_url` in props.prodConf[props.menuSelections['selectedProduct']]) {
                    let endDate = moment.utc(props.prodConf[props.menuSelections['selectedProduct']]['archive_url'].end_date, 'YYYYMMDD')
                    if (runDate.isBefore(endDate)) {
                        urlBase = props.urlBase + props.prodConf[props.menuSelections["selectedProduct"]]['archive_url']["url_end"].replace("[RUN]",runDate.format("YYYYMMDD"))
                    }
                }

                let domain = ''
                if ((props.domain !== 'conus') & (props.retro)) {
                    domain = props.domain + "_"
                }

                // special mode: static image
                let static_image_check = (`static_image` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].static_image)
                let no_fhr_check = (`no_fhr_in_url` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].no_fhr_in_url)
                if (static_image_check) {
                    let url = urlBase + props.menuSelections["selectedParameter"] + ".png"

                    const imageElement = new Image()
                    imageElement.src = url
                    tmpImgElements.push({fcstHr:1, img:imageElement})

                    let promise = loadImage(imageElement, loadingId.current)
                    promises.push(promise)

                // default mode
                } else {
                    let num_fcst_hrs = props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
                    let fcst_hr_step = props.filterHourThresh(currParamConf.fcst_hr_step, props.display)
                    if((`subhour` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].subhour)) {
                        if(props.menuSelections["selectedParameter"] === "subhmax15precip") {
                            //num_fcst_hrs = num_fcst_hrs*4
                            num_fcst_hrs = Math.floor(num_fcst_hrs/4);
                        }
                    }
                    let min_fcst_hr = props.filterHourThresh(currParamConf.min_fcst_hr, props.display)
                    for(let i=min_fcst_hr; i<=num_fcst_hrs; i+=fcst_hr_step) {
                        let tmpDate = moment.utc(props.menuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
                        let url = urlBase
        
                        if((`archive` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].archive)) {
                            tmpDate.subtract(i, "hours")
                            url += props.menuSelections["selectedParameter"] + "_" + domain + tmpDate.format("YYYYMMDDHH") + ".png"
                        } else if (no_fhr_check) {
                            url += props.menuSelections["selectedParameter"] + "_" + domain + tmpDate.format("YYYYMMDDHH") + ".png"
                        } else {
                            if((`fhr_to_day` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].fhr_to_day)) {
                                url += props.menuSelections["selectedParameter"] + `day${parseInt(i/24)}` + "_" + domain + tmpDate.format("YYYYMMDDHH") + ".png"
                            } else if((`subhour` in props.prodConf[props.menuSelections['selectedProduct']]) && (props.prodConf[props.menuSelections['selectedProduct']].subhour)) {
                                if(props.menuSelections["selectedParameter"] === "subhmax15precip") {
                                    url += props.menuSelections["selectedParameter"] + "_" + domain + tmpDate.format("YYYYMMDDHH") + "f" + fhrString(i) + ".png"  
                                } else {
                                url += props.menuSelections["selectedParameter"] + "_" + domain + tmpDate.format("YYYYMMDDHH") + "f" + fhrStringSub(i) + ".png"
                                }
                            } else {
                                url += props.menuSelections["selectedParameter"] + "_" + domain + tmpDate.format("YYYYMMDDHH") + "f" + fhrString(i) + ".png"
                            }
                        }
                        url = url.replace('[VALID]',tmpDate.format("YYYYMMDD"))
        
                        // let imgObj = {url:url, index:i}
                        const imageElement = new Image()
                        imageElement.src = url
                        tmpImgElements.push({fcstHr:i, img:imageElement})
        
                        let promise = loadImage(imageElement, loadingId.current)
                        promises.push(promise)
                    }
                }
            }

            setImgelements(tmpImgElements)
            Promise.allSettled(promises)
            .then(() => {
                setImgsAreLoading(false)
                setNumLoaded(0)
                loadStatus.current = 0
            })
        }
    }, [props.menuSelections, props.domain, props.retro])

    let tmpImgElements = [...imgElements]
    // reverse order of img elements if scrubbing backwards so currently displayed image is removed prior to adding the new one
    if (props.fcstHr < prevFcstHr.current) {
        tmpImgElements.reverse()
    }

    // filter fcst hours before calcs
    let num_fcst_hrs = props.filterHourThresh(currProdConf.num_fcst_hrs, props.display)
    let fcst_hr_step = props.filterHourThresh(currParamConf.fcst_hr_step, props.display)

    return(
        <div className="h-full">
            {imgsAreLoading ?
                <div className='mt-10'>
                    <CircularProgressWithLabel size={'5rem'} value={(numLoaded / (num_fcst_hrs/fcst_hr_step))*100} />
                </div>
            :
                null
            }

            {tmpImgElements.map((imgEl) => {
                let isVisible = (imgEl.fcstHr === props.fcstHr) && !imgsAreLoading
                return (
                    <Zoom key={imgEl.fcstHr+"img"} >
                        <img className={`${isVisible ? 'block' : 'hidden' } max-h-screen object-scale-down m-auto`} src={imgEl.img.src} /> 
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
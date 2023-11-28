import { useState, useEffect } from 'react'

import { NavBar } from "@atkingtornado/wpc-navbar-reactjs";


import Moment from 'react-moment';
import moment from 'moment';
import Alert from '@mui/material/Alert';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import ImageDisplay from "./features/ImageDisplay"
import SelectionMenu from './features/SelectionMenu'
import HourSlider from './features/HourSlider'

import { modelConf, ensemblesPQPFConf, obsEroAriFfgConf } from './conf.js';

const prodConf = {
    ...modelConf,
    ...ensemblesPQPFConf,
    ...obsEroAriFfgConf
}

function App() {

  const [open, setOpen] = useState(false)

  const initialProduct = Object.keys(prodConf)[0]
  const initalRun = ""
  const initialParameterGroup = Object.keys(prodConf[initialProduct]["parameters"])[0]
  const initialParameter = Object.keys(prodConf[initialProduct]["parameters"][initialParameterGroup])[0]

  const [fcstHr, setFcstHr] = useState(prodConf[initialProduct]["parameters"][initialParameterGroup][initialParameter]["min_fcst_hr"])
  // const [fcstHrArr, setFcstHrArr] = useState([])
  const [currParamConf, setCurrParamConf] = useState(null)
  const [currProductConf, setCurrProductConf] = useState(null)

  // const [maxHr, setMaxHr] = useState(prodConf[initialProduct]["num_fcst_hrs"])
  const [menuSelections, setSelectedMenuSelections] = useState({
    "selectedProduct": initialProduct,
    "selectedRun": initalRun,
    "selectedParameterGroup": initialParameterGroup,
    "selectedParameter": initialParameter
  })
  const [dateOptions, setDateOptions] = useState([])

  useEffect(() => {
    genDateOptions()
  },[])

  useEffect(() => {
    if(menuSelections["selectedRun"] !== '' && menuSelections["selectedProduct"] !== '' && menuSelections["selectedParameterGroup"] !== '' && menuSelections["selectedParameter"] !== ''){
      let tmpCurrConf = prodConf[menuSelections["selectedProduct"]]["parameters"][menuSelections["selectedParameterGroup"]][menuSelections["selectedParameter"]]
      let tmpCurrProdConf = prodConf[menuSelections["selectedProduct"]]
      
      if(fcstHr > tmpCurrProdConf.num_fcst_hrs) {
        setFcstHr(tmpCurrProdConf.num_fcst_hrs)
      } 
      else if (fcstHr < tmpCurrConf["min_fcst_hr"]) {
        setFcstHr(tmpCurrConf["min_fcst_hr"])
      }

    }
  }, [menuSelections])

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

  const handleMenuChange = (e, selectionID) => {
    let tmpMenuSelections = {...menuSelections}

    tmpMenuSelections[selectionID] = e.value

    if (selectionID === "selectedProduct") {
      genDateOptions()

      let allParamGroups = []
      let allParams = []

      Object.keys(prodConf[e.value]["parameters"]).forEach((grp) => {
        Object.keys(prodConf[e.value]["parameters"][grp]).forEach((param) => {
          allParamGroups.push(grp)
          allParams.push(param)
        })
      })

      if(!allParams.includes(menuSelections["selectedParameter"])) {
        tmpMenuSelections["selectedParameter"] = allParams[0]
        tmpMenuSelections["selectedParameterGroup"] = allParamGroups[0]
      } else {
        let index = allParams.indexOf(tmpMenuSelections["selectedParameter"])
        tmpMenuSelections["selectedParameterGroup"] = allParamGroups[index]
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

      let index = allParams.indexOf(e.value)
      tmpMenuSelections["selectedParameterGroup"] = allParamGroups[index]
    }

    setSelectedMenuSelections(tmpMenuSelections)
  }

  const handleSliderChange = (e) => {
    setFcstHr(e.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <div className="z-10 relative">
        <NavBar/>
      </div>
      <Alert sx={{ display: "flex", justifyContent: "center"}} severity="error">****THIS IS A NON-OPERATIONAL WEBSITE****</Alert>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center pt-4">WPC-HMT Realtime Webpage</h1>
        <InfoIcon className="cursor-pointer" color="primary" onClick={()=>{setOpen(true)}} sx={{ fontSize: 28 }}/>
      </div>

      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <DialogTitle className="text-center">
            <b>Welcome to the Weather Prediction Center's Hydrometeorology Testbed (HMT) Webpage</b>
          </DialogTitle>
          <DialogContentText>
            This is an experimental webpage that displays operational and experimental Models and Ensembles. This includes the Rapid Refresh Forecast System (RRFS) deterministic and ensemble data. Our website refers to the RRFS deterministic as RRFSp1, which EMC calls RRFSa. Experimental dataflow is sporadic, so if a model/ensemble is missing check to see if there is an earlier run. If the model/ensemble is still missing, we apologize and hope to have data available next time you visit.
          </DialogContentText>
          <br/>
          <DialogContentText>
            The products shown on this webpage are <b>NOT</b> official NWS products. Information about WPC-HMT can be found <Link href="https://www.wpc.ncep.noaa.gov/hmt/">here</Link>. <b>If you have any questions about the webpage or HMT please contact Sarah Trojniak (sarah.trojniak@noaa.gov) or Jimmy Correia (james.correia@noaa.gov).</b>
          </DialogContentText>
          <br/>
          <DialogContentText>
            If you are interested in other developmental websites we support please see the Experiment Websites - Data Visualization tab in the HMT and NOAA Websites dropdown. This includes an interactive soundings viewer that displays HRRR and RRFSp1 soundings.
          </DialogContentText>
          <br/>
          <br/>
          <DialogContentText className="text-center">
            <b>Find the 2022 FFaIR Final Report <Link href="https://www.wpc.ncep.noaa.gov/hmt/2022_FFaIR_Final_Report.pdf">here</Link> and the 2023 FFaIR Operations Plan <Link href="https://origin.wpc.ncep.noaa.gov/hmt/hmt_webpages/2023_FFaIR_Operations_Plan.pdf">here</Link>.</b>
          </DialogContentText>
          <DialogContentText className="text-center">
            <b>This year's FFaIR seminar slides can be found <Link href="https://www.wpc.ncep.noaa.gov/hmt/hmt_webpages/seminars/2023/">here</Link>.</b>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <div className="w-full flex flex-col justify-center items-center">
        <SelectionMenu dateOptions={dateOptions} menuSelections={menuSelections} onChange={handleMenuChange}/>
        <HourSlider onChange={handleSliderChange} fcstHr={fcstHr} menuSelections={menuSelections}/>
        <ImageDisplay fcstHr={fcstHr} menuSelections={menuSelections} />
      </div>
      
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'

import { NavBar } from "@atkingtornado/wpc-navbar-reactjs";

import Moment from 'react-moment';
import moment from 'moment';
import parse from 'html-react-parser';

import Alert from '@mui/material/Alert';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import Tooltip from '@mui/material/Tooltip';

import { NestedDropdown } from 'mui-nested-menu';

import ImageDisplay from "./features/ImageDisplay"
import SelectionMenu from './features/SelectionMenu'
import HourSlider from './features/HourSlider'

const confUrl = window.location.href.indexOf("localhost") != -1 ? "http://localhost:3001" : window.location.href

function App() {

  const [urlBase, setUrlBase] = useState(null);
  const [prodConf, setProdConf] = useState(null);
  const [modelConf, setModelConf] = useState(null);
  const [ensemblesPQPFConf, setEnsemblesPQPFConf] = useState(null);
  const [obsEroAriFfgConf, setObsEroAriFfgConf] = useState(null);

  const [fcstHr, setFcstHr] = useState();
  const [retro, setRetro] = useState(false);
  const [retroDate, setRetroDate] = useState(moment().utc());
  const [domain, setDomain] = useState('conus');

  const [menuSelections, setSelectedMenuSelections] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);

  useEffect(() => {
    fetch(confUrl + '/conf/product_conf.json')
    .then((response) => response.json())
    .then((jsonData) => {

      let tmpModelConf = jsonData['models']
      let tmpEnsemblesPQPFConf = jsonData['ensembles_PQPF']
      let tmpObsEroAriFfgConf = jsonData['obs_ero_ari_ffg']

      let tmpProdConf = {
        ...tmpModelConf,
        ...tmpEnsemblesPQPFConf,
        ...tmpObsEroAriFfgConf
      }
      setUrlBase(jsonData['url_base'])
      setModelConf(tmpModelConf)
      setEnsemblesPQPFConf(tmpEnsemblesPQPFConf)
      setObsEroAriFfgConf(tmpObsEroAriFfgConf)
      setProdConf(tmpProdConf)
    })
  },[])

  useEffect(() => {
    if(prodConf) {
      const initialProduct = Object.keys(prodConf)[0]
      const initalRun = ""
      const initialParameterGroup = Object.keys(prodConf[initialProduct]["parameters"])[0]
      const initialParameter = Object.keys(prodConf[initialProduct]["parameters"][initialParameterGroup])[0]
      const initialFcstHr = prodConf[initialProduct]["parameters"][initialParameterGroup][initialParameter]["min_fcst_hr"]

      let tmpMenuSelections = {
        "selectedProduct": initialProduct,
        "selectedRun": initalRun,
        "selectedParameterGroup": initialParameterGroup,
        "selectedParameter": initialParameter
      }

      let tmpFcstHr = prodConf[initialProduct]["parameters"][initialParameterGroup][initialParameter]["min_fcst_hr"]

      setFcstHr(tmpFcstHr)

      tmpMenuSelections = genDateOptions(tmpMenuSelections)
      setSelectedMenuSelections(tmpMenuSelections)
    }
  },[prodConf])

  useEffect(() => {
    if(prodConf && menuSelections["selectedRun"] !== '' && menuSelections["selectedProduct"] !== '' && menuSelections["selectedParameterGroup"] !== '' && menuSelections["selectedParameter"] !== ''){
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

  useEffect(() => {
    if(prodConf) {
      let tmpMenuSelections = genDateOptions(menuSelections)
    }
  },[retroDate, retro])

  const handleRetroChange = (e, value) => {
    if(value !== null) {
      setRetro(value)
    }
  }

  const handleRetroDateChange = (value) => {
    let tmpDate = value
    tmpDate.set({hour:12, minute:0, second:0})
    setRetroDate(tmpDate)
  }

  const handleDomainChange = (e, value) => {
    if(value !== null) {
      setDomain(value)
    }
  } 

  const genDateOptions = (currMenuSelections) => {

    let currentDate = null
    if (retro) {
      currentDate = retroDate.clone()
    } else {
      currentDate = moment().utc()
      currentDate.subtract(1, 'hours');
    }
    
    let run_hrs = prodConf[currMenuSelections["selectedProduct"]]["run_hrs"]

    let start_hr = null
    run_hrs.forEach((hr) => {
      if ( parseInt(hr) <= currentDate.hour() ) {
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

    let selectedRun = moment.utc(currMenuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
    let dateArrContainsSelectedRun = false

    dateArr.forEach((currDate) => {
      if(currDate.format('HH z ddd DD MMM YYYY') === selectedRun.format('HH z ddd DD MMM YYYY')) {
        dateArrContainsSelectedRun = true
      }
    }) 

    let tmpMenuSelections = {...currMenuSelections}
    if(currMenuSelections["selectedRun"] === "" || !dateArrContainsSelectedRun || retro){
      tmpMenuSelections["selectedRun"] = dateArr[0].format('HH z ddd DD MMM YYYY')
      setSelectedMenuSelections(tmpMenuSelections)
    }
    return tmpMenuSelections
  }

  const handleMenuChange = (e, selectionID) => {
    let tmpMenuSelections = {...menuSelections}
    tmpMenuSelections[selectionID] = e.value

    // CHANGE PRODUCT
    if (selectionID === "selectedProduct") {
      tmpMenuSelections = genDateOptions(tmpMenuSelections)
      
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
    // CHANGE RUN
    else if (selectionID === "selectedRun") {

    }
    // CHANGE PARMETER GROUP
    else if (selectionID === "selectedParameterGroup") {
      let allParams = []
      Object.keys(prodConf[menuSelections["selectedProduct"]]["parameters"][tmpMenuSelections["selectedParameterGroup"]]).forEach((param) => {
        allParams.push(param)
      })

      if(!allParams.includes(menuSelections["selectedParameter"])) {
        tmpMenuSelections["selectedParameter"] = allParams[0]
      } else {
        let index = allParams.indexOf(tmpMenuSelections["selectedParameter"])
        tmpMenuSelections["selectedParameter"] = allParams[index]
      }
    }
    // CHANGE PARAMETER
    else if (selectionID === "selectedParameter") {

    }
    setSelectedMenuSelections(tmpMenuSelections)
  }

  const handleSliderChange = (e) => {
    setFcstHr(e.target.value)
  }

  return (
    <div className="App">
      <div className="z-10 relative">
        <NavBar/>
      </div>
      <Alert sx={{ display: "flex", justifyContent: "center"}} severity="error">****THIS IS A NON-OPERATIONAL WEBSITE****</Alert>
      <div className="flex justify-center items-center pt-4">
        <h1 className="text-3xl font-bold text-center ">WPC-HMT Realtime Webpage</h1>
        <AdditionalInfoDialog/>
        <ExternalLinkDialog  />
      </div>

      {prodConf && menuSelections ?
        <div className="w-full flex flex-col justify-center items-center">
          <SelectionMenu 
            domain={domain}
            handleDomainChange={handleDomainChange}
            retroDate={retroDate} 
            handleRetroDateChange={handleRetroDateChange} 
            retro={retro} 
            handleRetroChange={handleRetroChange} 
            prodConf={prodConf} 
            obsEroAriFfgConf={obsEroAriFfgConf} 
            ensemblesPQPFConf={ensemblesPQPFConf} 
            modelConf={modelConf} 
            dateOptions={dateOptions} 
            menuSelections={menuSelections} 
            onChange={handleMenuChange}
          />
          <HourSlider 
            prodConf={prodConf} 
            onChange={handleSliderChange} 
            fcstHr={fcstHr} 
            menuSelections={menuSelections}
          />
          <ImageDisplay 
            retro={retro}
            urlBase={urlBase}
            domain={domain}
            prodConf={prodConf}
            fcstHr={fcstHr}
            menuSelections={menuSelections} 
          />
        </div>
      :
        null
      }
    </div>
  );
}

const AdditionalInfoDialog = (props) => {
  const [infoJsonData, setInfoJsonData] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getInfoJson()
  },[])

  const getInfoJson = () => {
    fetch(confUrl + '/conf/info_page_text.json')
    .then((response) => response.json())
    .then((jsonData) => {
      setInfoJsonData(jsonData)
      console.log(jsonData)
    })
  }


  const handleClose = () => {
    setOpen(false)
  }

  return(
    <>
      <Tooltip title="Additional Info">
        <InfoIcon className="cursor-pointer self-start" color="primary" onClick={()=>{setOpen(true)}} sx={{ fontSize: 28 }}/>
      </Tooltip>
      <Dialog className="InfoDialog" onClose={handleClose} open={open}>
        <DialogContent>
          <DialogTitle className="text-center">
            <b>Welcome to the Weather Prediction Center's Hydrometeorology Testbed (HMT) Webpage</b>
          </DialogTitle>

          { infoJsonData ?
            infoJsonData['info_text'].map((htmlStr, i) => {
              return(
                <div key={i}>
                  <DialogContentText>
                    {parse(htmlStr)}
                  </DialogContentText>
                  <br/>
                </div>
              )
            })
          :
            null
          }
        </DialogContent>
      </Dialog>
    </>
  )
}

const ExternalLinkDialog = (props) => {
  const [open, setOpen] = useState(false)
  const [menuItemDataArray, setMenuItemDataArray] = useState([])
  const [linkJsonData, setLinkJsonData] = useState({})


  useEffect(() => {
    getLinkJson()
  },[])

  useEffect(() => {
    genMenuItemData()
  },[linkJsonData])

  const handleClose = () => {
    setOpen(false)
  }

  const getLinkJson = () => {
    fetch(confUrl + '/conf/external_links.json')
    .then((response) => response.json())
    .then((jsonData) => {
      setLinkJsonData(jsonData)
    })
  }

  const genMenuItemData = () =>{
    let tmpMenuItemDataArray = []

    Object.keys(linkJsonData).forEach((label) => {
      let tmpMenuItemData = {}
      tmpMenuItemData['label'] = label
      tmpMenuItemData['items'] = []

      Object.keys(linkJsonData[label]).forEach((categoryLabel) => {
        let tmpInnerMenuItemData = {}
        tmpInnerMenuItemData['label'] = categoryLabel
        tmpInnerMenuItemData['items'] = []

        linkJsonData[label][categoryLabel].forEach((linkData) => {
          tmpInnerMenuItemData['items'].push(
            {
              label: linkData['label'],
              callback: (event, item) => window.open(linkData['link'])
            }
          )
        })

        tmpMenuItemData['items'].push(tmpInnerMenuItemData)
      })

      tmpMenuItemDataArray.push(tmpMenuItemData)
    })  

    setMenuItemDataArray(tmpMenuItemDataArray)
  }

  return(
    <>
      <div className="h-full align-middle">
        <Tooltip title="External Links">
          <IconButton onClick={()=>{setOpen(true)}} aria-label="links">
            <LinkIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <DialogTitle className="text-center">
            <b>External Links:</b>
          </DialogTitle>
            {menuItemDataArray.map((menuItem) => {
              return(
                <div key={menuItem.label} className="w-full p-2">
                  <NestedDropdown
                    menuItemsData={menuItem}
                    MenuProps={{elevation: 3}}
                    ButtonProps={{variant: 'outlined', sx: {width:'100%'}}}
                  />
                </div>
              )
            })}  
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App;

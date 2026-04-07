import { useState, useEffect } from 'react';
//import { useState, useEffect, useRef } from 'react';
//above Sarah added useRef so that we can keep track of previous choices of model
//https://javascript.plainenglish.io/react-useref-explained-with-real-world-examples-00335647ebae
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
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { NestedDropdown } from 'mui-nested-menu';

import ImageDisplay from "./features/ImageDisplay"
import SelectionMenuTop from './features/SelectionMenuTop'
import SelectionMenuBottom from './features/SelectionMenuBottom'
import HourSlider from './features/HourSlider'
import ComparisonView from './features/ComparisonView'
import ReactSelect from 'react-select'

let confUrl2 = window.location.href.indexOf("localhost") != -1 ? "http://localhost:3000" : window.location.href
if (confUrl2.includes('.html')) {
    confUrl2 = confUrl2.split('/')
    confUrl2.pop()
    confUrl2 = confUrl2.join('/')
    console.log(confUrl2)
}
if (confUrl2.includes('?')) {
    confUrl2 = confUrl2.split('?')[0]
}
const confUrl = confUrl2


const inputParams = (function() {

    // Retrieve & sanitize activity
    function getInputDisplay(params) {
        // If you want to change the default mode that the users see on the page without entering URL arguments, set it here!
        const defaultActivity = `winter` // Set it here!
        // Set it above!
        let inputActivity = params.get(`display`) || defaultActivity
        const allowedInputs = [`default`, `summer`, `winter`, `experimental`]
        if (!allowedInputs.includes(inputActivity)) {
            inputActivity = defaultActivity
        }
        return inputActivity
    }

    // Retrieve & sanitize mode
    function getInputMode(params) {
        let inputMode = params.get(`mode`) || `default`
        const allowedModes = [`default`, `fcst`]
        if (!allowedModes.includes(inputMode)) {
          inputMode = `default`
        }
        return inputMode
    }

    // Retrieve & sanitize experiment mode (i.e., is this model/variable only available for experiments)
    function getInputExperiment(params) {
        let inputExperiment = params.get(`experiment`) || `none`
        const allowedInputs = [`none`, `wwe`, `ffair`, `pear`, `all`]
        if (!allowedInputs.includes(inputExperiment)) {
          inputExperiment = `none`
        }
        return inputExperiment
    }

    // Retrieve experiment mode from URL
    const params = new URL(document.location).searchParams

    // Initialize inputActivity and inputMode
    const inputDisplay = getInputDisplay(params)
    const inputMode = getInputMode(params)
    const inputExperiment = getInputExperiment(params)

    // Set return data
    return {
        getDisplay: function() {
            return inputDisplay
        },
        getMode: function() {
            return inputMode
        },
        getExperiment: function() {
          return inputExperiment
        }
    }
})()



function App() {

  const [urlBase, setUrlBase] = useState(null);
  const [prodConf, setProdConf] = useState(null);
  const [modelConf, setModelConf] = useState(null);
  const [subModelConf, setSubModelConf] = useState(null);
  const [aiModelConf, setAiModelConf] = useState(null);
  const [ensemblesPQPFConf, setEnsemblesPQPFConf] = useState(null);
  const [obsConf, setObsConf] = useState(null);
  const [eroConf, setEroConf] = useState(null);
  const [ariFfgConf, setAriFfgConf] = useState(null);

  const [fcstHr, setFcstHr] = useState();
  const [retro, setRetro] = useState(false);
  const [retroDate, setRetroDate] = useState(moment().utc());
  const [domain, setDomain] = useState('conus');

  const [menuSelections, setSelectedMenuSelections] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [panels, setPanels] = useState([]);
  const [sharedCycle, setSharedCycle] = useState(true);
  const [referencePanel, setReferencePanel] = useState(0);

  // Input arguments from URL
  const display = inputParams.getDisplay()  //display is for season
  const experiment = inputParams.getExperiment()  //experiment is if it only plots for certain experiments (ffair vs wee)
  const mode = inputParams.getMode() //flag to hide observations plots


  //sarah
  // function usePrevious(value) {
  //     const ref = useRef();
  //     useEffect(() => {
  //       ref.current = value;
  //     });
  //     return ref.current;
  //   }
  // let previousValue = usePrevious("HRRR");
  // console.log(previousValue);
  // console.log("Component rendered");
  // -----------------------------------------------------------------------------------------

  const filterHourThresh = (variable, display) => {
    /* Checks if a variable like the max/min fcst hour and hour step is the same for all 
    displays, or if it's different by display in which case the value for the current 
    display is returned.*/
  
    if (typeof variable === `object`) {
      if (display in variable) {
        return variable[display]
      } else {
        return variable[`default`]
      }
    }
    return variable
  }

  // --------------------------------- new display filtering ---------------------------------
  // filters parameters & models by display (e.g., "summer", "winter", "default", "experimental")
  
  const displayCheck = (data, display) => {
    if (`display` in data) {
        return (((display === `default`) && !(data[`display`].includes(`experimental`))) | (data[`display`].includes(display))) ? data : null
    }
    return data
  }


  const filterByParameterGroup = (data, display) => {
    const filteredData = Object.entries(data).map(([k, v]) => [k, displayCheck(v, display)]).filter(([, v]) => v !== null)
    return filteredData.length ? Object.fromEntries(filteredData) : null
  }


  const filterByModel = (data, display, experiment, mode) => {

      // Check for flags - when to ignore or keep. 
      //Sarah - Feb 11 2026 changed from list of if statements to if/if else statements to get mode to work
      // For example, ignore if this model is not available for the current experiment, if provided
      // if this model is available for the current experiment, or if there is no "experiment" tag in the product_conf
      // entry for this model, then we continue ahead to the display filtering
      // returning "null" means this model won't appear in the dropdown menu
      
      // ignore if this model is not available for the current experiment
      if ((`experiment` in data) && !(data[`experiment`].includes(experiment))) {
          return null
      }
      // ignore if this model is not plotted when in this current mode 
      else if ((`skip_mode` in data) && (data[`skip_mode`].includes(mode))) {
          return null
      }
      // ignore if this model is not plotted when in this current display
      else if ((`skip_display` in data) && (data[`skip_display`].includes(display))) {
          return null
      }
      else {
      // if entire model is for one season only, just return it as is
      if (`display` in data) {
          return (((display === `default`) && !(data[`display`].includes(`experimental`))) | (data[`display`].includes(display))) ? data : null
      }
    }
      
      

      // otherwise, filter individual parameters by display and return
      data[`parameters`] = Object.fromEntries(Object
          .entries(data[`parameters`])
          .map(([k, v]) => [k, filterByParameterGroup(v, display)])
          .filter(([, v]) => v !== null))
      return data
  }

  const filterData = (data, display, experiment, mode) => {
      return Object.entries(data).map(
          ([k, v]) => [k, filterByModel(v, display, experiment, mode)]).filter(
          ([, v]) => v !== null).reduce(
          (acc, [k, v]) => {
              acc[k] = v;
              return acc;
          }, {}
      )
  }

  // ------------------------------------------------------------------------------------------

  // read in product_conf.json
  useEffect(() => {
    fetch(confUrl + '/conf/product_conf.json')
    .then((response) => response.json())
    .then((jsonData) => {

      // split all model groups in product_conf.json into their own dictionaries, and filter by display
      let tmpModelConf = filterData(jsonData['models'], display, experiment)
      let tmpSubModelConf = filterData(jsonData['subModels'], display, experiment)
      let tmpAiModelConf = filterData(jsonData['ai_models'], display, experiment)
      let tmpEnsemblesPQPFConf = filterData(jsonData['ensembles_PQPF'], display, experiment)
      let tmpObsConf = filterData(jsonData['obs'], display, experiment, mode)
      let tmpEroConf = filterData(jsonData['ero'], display, experiment)
      let tmpAriFfgConf = jsonData['ari_ffg']

      // store these all in a single dictionary
      let tmpProdConf = {
        ...tmpModelConf,
        ...tmpSubModelConf,
        ...tmpAiModelConf,
        ...tmpEnsemblesPQPFConf,
        ...tmpObsConf,
        ...tmpEroConf,
        ...tmpAriFfgConf
      }
      setUrlBase(jsonData['url_base'])
      setModelConf(tmpModelConf)
      setSubModelConf(tmpSubModelConf)
      setAiModelConf(tmpAiModelConf)
      setEnsemblesPQPFConf(tmpEnsemblesPQPFConf)
      setObsConf(tmpObsConf)
      setEroConf(tmpEroConf)
      setAriFfgConf(tmpAriFfgConf)
      setProdConf(tmpProdConf)
    })
  },[])

  // set default (i.e. what user sees when first opening the page) parameters, products, run and forecast hours
  useEffect(() => {
    if(prodConf) {
      const initialProduct = Object.keys(prodConf)[0]
      const initalRun = ""
      const initialParameterGroup = Object.keys(prodConf[initialProduct]["parameters"])[0]
      const initialParameter = Object.keys(prodConf[initialProduct]["parameters"][initialParameterGroup])[0]
      //const previousValue = Object.keys(prodConf)[0]

      let tmpMenuSelections = {
        "selectedProduct": initialProduct,
        "selectedRun": initalRun,
        "selectedParameterGroup": initialParameterGroup,
        "selectedParameter": initialParameter
      }

      let tmpFcstHr = filterHourThresh(prodConf[initialProduct]["parameters"][initialParameterGroup][initialParameter]["min_fcst_hr"], display)
      setFcstHr(tmpFcstHr)

      tmpMenuSelections = genDateOptions(tmpMenuSelections)
      setSelectedMenuSelections(tmpMenuSelections)
    }
  },[prodConf])

  // when changing product, constrain the forecast hour to that product's range of min & max forecast hours
  useEffect(() => {
    if(prodConf && menuSelections["selectedRun"] !== '' && menuSelections["selectedProduct"] !== '' && menuSelections["selectedParameterGroup"] !== '' && menuSelections["selectedParameter"] !== ''){
      let tmpCurrConf = prodConf[menuSelections["selectedProduct"]]["parameters"][menuSelections["selectedParameterGroup"]][menuSelections["selectedParameter"]]
      let tmpCurrProdConf = prodConf[menuSelections["selectedProduct"]]
      console.log("forecast hour is")
      console.log(fcstHr)
      //get forecast hour max & min and filter by display
      let num_fcst_hrs = filterHourThresh(tmpCurrProdConf.num_fcst_hrs, display)
      console.log(num_fcst_hrs)
      //Sarah added
      if(`subhour` in tmpCurrProdConf) {
          if(menuSelections["selectedParameter"] !== 'subhmax15precip' ) {
            num_fcst_hrs = num_fcst_hrs*4
            console.log(num_fcst_hrs)
          }
        }
      console.log(num_fcst_hrs)
      let min_fcst_hr = filterHourThresh(tmpCurrConf["min_fcst_hr"], display)
      //sarah - had to add a subhourly clause because num_fcst_hrs in files is 18 so anything over fhr18 when changing from other models defaults to 17
      //shouldn't have to do this because I redine num_fcst_hrs to num_fcst_hrs*4 above but it doesn't seem to carry through
      if(fcstHr > num_fcst_hrs) {
        // console.log(num_fcst_hr
        setFcstHr(num_fcst_hrs)

      } 
      else if (fcstHr < min_fcst_hr) {
        setFcstHr(min_fcst_hr)
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

  function arange(start, stop, increment=1) {
    let array = []
    for (let i = start; i < stop; i += increment) {
      array.push(i)
    }
    return array
  }

  // Generate date options for a given product, returning { dateArr, selectedRun }
  // without side effects. Used for per-panel cycle generation.
  const genDateOptionsForProduct = (productName, currentSelectedRun) => {
    let currentDate = null
    if (retro) {
      currentDate = retroDate.clone()
    } else {
      currentDate = moment().utc()
      currentDate.subtract(1, 'hours')
    }
    let run_hrs = prodConf[productName]["run_hrs"]
    let start_hr = null
    run_hrs.forEach((hr) => {
      if (parseInt(hr) <= currentDate.hour()) {
        start_hr = hr
      }
    })
    currentDate.set({ hour: start_hr, minute: 0, second: 0 })
    let freq = 1
    if (run_hrs.length >= 2) {
      freq = parseInt(run_hrs[1]) - parseInt(run_hrs[0])
    } else {
      freq = 24
    }
    let endDate = moment(currentDate).subtract(5, 'days')
    let dateArr = [currentDate]
    let index = 0
    if (run_hrs.length >= 1) {
      while (dateArr[index] > endDate) {
        let tmpDate = moment(dateArr[index]).subtract(freq, 'hours')
        dateArr.push(tmpDate)
        index += 1
      }
    }
    // Find closest run
    let selectedRun = currentSelectedRun || ""
    let selectedRunMoment = moment.utc(selectedRun, 'HH z ddd DD MMM YYYY')
    let dateArrContainsSelectedRun = false
    dateArr.forEach((currDate) => {
      if (currDate.format('HH z ddd DD MMM YYYY') === selectedRunMoment.format('HH z ddd DD MMM YYYY')) {
        dateArrContainsSelectedRun = true
      }
    })
    if (selectedRun === "" || !dateArrContainsSelectedRun || retro) {
      if (selectedRun === "") {
        selectedRun = dateArr[0].format('HH z ddd DD MMM YYYY')
      } else {
        let diffArray = []
        dateArr.forEach(iDate => {
          diffArray.push(Math.abs(iDate.diff(moment.utc(selectedRun, 'HH z ddd DD MMM YYYY'), 'hours')))
        })
        let minVal = Math.min(...diffArray)
        let minIdx = diffArray.indexOf(minVal)
        if (minVal > 192) {
          minIdx = 0
        }
        selectedRun = dateArr[minIdx].format('HH z ddd DD MMM YYYY')
      }
    }
    return { dateArr, selectedRun }
  }

  const genDateOptions = (currMenuSelections) => {

    let currentDate = null
    if (retro) {
      currentDate = retroDate.clone()
    } else {
      currentDate = moment().utc()
      currentDate.subtract(1, 'hours');
    }
    
    // retrieve the cycles for this product per day (e.g., ["00","06","12","18"])
    let run_hrs = prodConf[currMenuSelections["selectedProduct"]]["run_hrs"]

    // set the most recent cycle to the one from "run_hrs" that is closest to the current time
    let start_hr = null
    run_hrs.forEach((hr) => {
      if ( parseInt(hr) <= currentDate.hour() ) {
        start_hr = hr
      }
    })
    currentDate.set({hour:start_hr, minute:0, second:0})

    // how often should cycles be populated in the dropdown menu? (e.g., ["00","06","12","18"] means freq=6)
    let freq = 1
    if(run_hrs.length >= 2) {
      freq = parseInt(run_hrs[1]) - parseInt(run_hrs[0]) 
    }else{
      freq = 24
    }

    // current cycle dropdown menu is set to extend out to 5 days from the selected date (retro) or current date (realtime)
    let endDate = moment(currentDate).subtract(5, 'days'); 
    let dateArr = [currentDate]
    let index = 0

    // populate array of cycles
    console.log(dateArr[index])
    console.log(endDate)
    if (run_hrs.length >= 1) {
        while (dateArr[index] > endDate){
        let tmpDate = moment(dateArr[index]).subtract(freq, 'hours');
        dateArr.push(tmpDate)
        index+=1
        }
    }
    setDateOptions(dateArr)

    // check if the cycle currently selected by the user is included in the cycle array we just created (e.g., when changing models,
    // not all models will have the same cycles) 
    let selectedRun = moment.utc(currMenuSelections["selectedRun"], 'HH z ddd DD MMM YYYY')
    let dateArrContainsSelectedRun = false
    dateArr.forEach((currDate) => {
      if(currDate.format('HH z ddd DD MMM YYYY') === selectedRun.format('HH z ddd DD MMM YYYY')) {
        dateArrContainsSelectedRun = true
      }
    }) 

    // IF dateArrContainsSelectedRun IS FALSE, we need to find the closest cycle to it and change it to that cycle
    let tmpMenuSelections = {...currMenuSelections}
    if(currMenuSelections["selectedRun"] === "" || !dateArrContainsSelectedRun || retro){
        if (currMenuSelections["selectedRun"] === "") {
            tmpMenuSelections["selectedRun"] = dateArr[0].format('HH z ddd DD MMM YYYY')
        } else {
            let diffArray = []
            dateArr.forEach(iDate => {
                diffArray.push(Math.abs(iDate.diff(moment.utc(currMenuSelections['selectedRun'], 'HH z ddd DD MMM YYYY'), 'hours')))
            })
            let minVal = Math.min(...diffArray)
            let minIdx = diffArray.indexOf(minVal)
            if (minVal > 192) {
                minIdx = 0
            }
            tmpMenuSelections["selectedRun"] = dateArr[minIdx].format('HH z ddd DD MMM YYYY')
        }
        setSelectedMenuSelections(tmpMenuSelections)
    }
    return tmpMenuSelections
  }
  // //sarah
  // function usePrevious(value) {
  //     const ref = useRef();
  //     useEffect(() => {
  //       ref.current = value;
  //     });
  //     return ref.current;
  //   }
  // const previousValue = usePrevious(menuSelections)
  // this is called when a dropdown menu is changed
  const handleMenuChange = (e, selectionID) => {
    //sarah menuSelections["selectedProduct"]
    //previousValue = usePrevious(menuSelections["selectedProduct"])
    //console.log(previousValue)
    //previousValue = usePrevious(menuSelections['selectedProduct']);
    //console.log(previousValue);
    //console.log("In handleMenuChange");
    let tmpMenuSelections = {...menuSelections}
    let oldValue = `${tmpMenuSelections[selectionID]}`
    tmpMenuSelections[selectionID] = e.value
    console.log(tmpMenuSelections['selectedRun'])
    console.log(tmpMenuSelections['selectedProduct'])

    // CHANGE MODEL (Austin defined this as "Product" in his code base)
    if (selectionID === "selectedProduct") {

      // Update data, while first retaining the old cycle and forecast hour
      let oldCycle = moment.utc(tmpMenuSelections['selectedRun'], 'HH z ddd DD MMM YYYY')
      tmpMenuSelections = genDateOptions(tmpMenuSelections)
      let newCycle = moment.utc(tmpMenuSelections['selectedRun'], 'HH z ddd DD MMM YYYY')

      //Change Forecast Hour depending on model change (Sarah Added) 
      // if(`subhour` in prodConf[e.value]) {
      //   if(`subhour` in prodConf[oldValue] || (prodConf[e.value]["parameters"][tmpMenuSelections["selectedParameterGroup"]][tmpMenuSelections["selectedParameter"]]) !== 'subhmax15precip') {
      //       fcstHr = fcstHr
      //   } else {
      //       fcstHr = Math.floor(fcstHr * 4)
      //   }
      // } else {
      //   if(`subhour` in prodConf[oldValue] || (prodConf[e.value]["parameters"][tmpMenuSelections["selectedParameterGroup"]][tmpMenuSelections["selectedParameter"]]) !== 'subhmax15precip') {
      //     fcstHr =  Math.floor(fcstHr / 4)
      //   } else {
      //     fcstHr = fcstHr
      //   }  
      // }
      
      // Load new parameters and parameter groups
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

      // Modify forecast hour based on cycle change
      // ADD SOMETHING TO CHECK IF THIS CYCLE IS AVAILABLE IN THE NEW MODEL. IF IT IS, CHANGE THE DROPDOWN MENU TO USE THE SAME CYCLE. IF NOT, THEN CHANGE FHR AND CYCLE
      let hourDiff = oldCycle.diff(newCycle, 'hours')
      let newHr = fcstHr + hourDiff      
      // is the selected hour in the list of hours for this product?
      const minHour = filterHourThresh(prodConf[e.value]["parameters"][tmpMenuSelections["selectedParameterGroup"]][tmpMenuSelections["selectedParameter"]]['min_fcst_hr'], display)
      const incrementHour = filterHourThresh(prodConf[e.value]["parameters"][tmpMenuSelections["selectedParameterGroup"]][tmpMenuSelections["selectedParameter"]]['fcst_hr_step'], display)
      const maxHour = filterHourThresh(prodConf[e.value].num_fcst_hrs, display)
      const hourArray = arange(minHour, maxHour, incrementHour)
      if ((hourArray.indexOf(newHr) == -1) && (hourArray.length > 3)) {
          const hourArrayDiff = hourArray.map(val => Math.abs(val - newHr))
          let newIdx = hourArrayDiff.indexOf(Math.min(...hourArrayDiff))
          newHr = hourArray[newIdx]
      }
      if ( (newHr >= minHour) && (newHr <= maxHour) ) {
          setFcstHr(newHr)
      }
    }
    // CHANGE CYCLE
    else if (selectionID === "selectedRun") {
        // changing run strictly within the current model
        let oldCycle = moment.utc(oldValue, 'HH z ddd DD MMM YYYY')
        let newCycle = moment.utc(e.value, 'HH z ddd DD MMM YYYY')
        let hourDiff = oldCycle.diff(newCycle, 'hours')
        let newHr = fcstHr + hourDiff
        // is the selected hour in the list of hours for this product?
        const minHour = filterHourThresh(prodConf[menuSelections["selectedProduct"]]["parameters"][menuSelections["selectedParameterGroup"]][menuSelections["selectedParameter"]]['min_fcst_hr'], display)
        const incrementHour = filterHourThresh(prodConf[menuSelections["selectedProduct"]]["parameters"][menuSelections["selectedParameterGroup"]][menuSelections["selectedParameter"]]['fcst_hr_step'], display)
        const maxHour = filterHourThresh(prodConf[menuSelections["selectedProduct"]].num_fcst_hrs, display)
        const hourArray = arange(minHour, maxHour, incrementHour)
        if ((hourArray.indexOf(newHr) == -1) && (hourArray.length > 3)) {
            const hourArrayDiff = hourArray.map(val => Math.abs(val - newHr))
            let newIdx = hourArrayDiff.indexOf(Math.min(...hourArrayDiff))
            newHr = hourArray[newIdx]
            setFcstHr(newHr)
        }
        if ( (newHr >= minHour) && (newHr <= maxHour) ) {
            setFcstHr(newHr)
        }
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

  const handleComparisonModeChange = (e, value) => {
    if (value === null) return
    setComparisonMode(value)
    if (!value && panels && panels[0]) {
      // Switching back to single: sync menuSelections from panel 0
      const p0 = panels[0]
      const tmpMenuSelections = {
        ...menuSelections,
        selectedProduct: p0.selectedProduct,
        selectedParameterGroup: p0.selectedParameterGroup,
        selectedParameter: p0.selectedParameter,
        selectedRun: p0.selectedRun
      }
      // genDateOptions regenerates dateOptions and returns the final menuSelections
      // (it handles selectedRun validation and calls setDateOptions internally)
      const finalSelections = genDateOptions(tmpMenuSelections)
      setSelectedMenuSelections(finalSelections)
    }
    if (value && menuSelections) {
      const panelCount = value === "4-panel" ? 4 : 2
      let newPanels = []

      // Always sync panel 0 with current single-panel selections
      const { dateArr: p0DateArr, selectedRun: p0Run } = genDateOptionsForProduct(menuSelections.selectedProduct, menuSelections.selectedRun)
      const panel0 = {
        selectedProduct: menuSelections.selectedProduct,
        selectedParameterGroup: menuSelections.selectedParameterGroup,
        selectedParameter: menuSelections.selectedParameter,
        selectedRun: p0Run,
        dateOptions: p0DateArr
      }
      newPanels.push(panel0)

      for (let i = 1; i < panelCount; i++) {
        if (panels && panels[i]) {
          // Preserve existing panel selections
          newPanels.push(panels[i])
        } else {
          // Create new panel with defaults
          const allProducts = Object.keys(prodConf)
          const currentIdx = allProducts.indexOf(menuSelections.selectedProduct)
          const prod = allProducts[(currentIdx + i) % allProducts.length]
          const pg = Object.keys(prodConf[prod]["parameters"])[0]
          const p = Object.keys(prodConf[prod]["parameters"][pg])[0]
          const { dateArr, selectedRun } = genDateOptionsForProduct(prod, menuSelections.selectedRun)
          newPanels.push({
            selectedProduct: prod,
            selectedParameterGroup: pg,
            selectedParameter: p,
            selectedRun: selectedRun,
            dateOptions: dateArr
          })
        }
      }
      setPanels(newPanels)
      // If reference panel index exceeds new panel count, reset to 0
      if (referencePanel >= panelCount) {
        setReferencePanel(0)
      }
    }
  }

  // Get cycle options from the reference panel
  const getReferenceCycleOptions = () => {
    if (!panels || panels.length === 0) return []
    let refPanel = panels[referencePanel] || panels[0]
    return refPanel.dateOptions || []
  }

  const handleSharedCycleChange = (e, value) => {
    if (value === null) return
    setSharedCycle(value)
    if (value) {
      // Switching to shared: use closest cycle from reference panel
      let refOptions = getReferenceCycleOptions()
      let currentRun = menuSelections.selectedRun
      let bestRun = currentRun
      if (refOptions.length > 0) {
        let currentMoment = moment.utc(currentRun, 'HH z ddd DD MMM YYYY')
        let diffArray = refOptions.map(d => Math.abs(d.diff(currentMoment, 'hours')))
        let minIdx = diffArray.indexOf(Math.min(...diffArray))
        bestRun = refOptions[minIdx].format('HH z ddd DD MMM YYYY')
      }
      let newPanels = panels.map(panel => ({
        ...panel,
        selectedRun: bestRun
      }))
      setPanels(newPanels)
      setSelectedMenuSelections({...menuSelections, selectedRun: bestRun})
    }
  }

  const handleReferencePanelChange = (idx) => {
    setReferencePanel(idx)
    if (sharedCycle && panels[idx]) {
      // Compute what this panel's effective run actually is (nearest-not-after the current shared cycle)
      const currentSharedMoment = moment.utc(menuSelections.selectedRun, 'HH z ddd DD MMM YYYY')
      const panelDateOptions = panels[idx].dateOptions || []
      let bestRun = menuSelections.selectedRun
      let bestDiff = Infinity
      panelDateOptions.forEach((d) => {
        const diff = currentSharedMoment.diff(d, 'minutes')
        if (diff >= 0 && diff < bestDiff) {
          bestDiff = diff
          bestRun = d.format('HH z ddd DD MMM YYYY')
        }
      })
      setSelectedMenuSelections({...menuSelections, selectedRun: bestRun})
    }
  }

  const handlePanelChange = (panelIndex, selectionID, value) => {
    let newPanels = [...panels]
    let panel = { ...newPanels[panelIndex] }

    if (selectionID === "selectedProduct") {
      panel.selectedProduct = value
      // Resolve parameter group and parameter for new model
      let allParamGroups = []
      let allParams = []
      Object.keys(prodConf[value]["parameters"]).forEach((grp) => {
        Object.keys(prodConf[value]["parameters"][grp]).forEach((param) => {
          allParamGroups.push(grp)
          allParams.push(param)
        })
      })
      if (!allParams.includes(panel.selectedParameter)) {
        panel.selectedParameter = allParams[0]
        panel.selectedParameterGroup = allParamGroups[0]
      } else {
        let index = allParams.indexOf(panel.selectedParameter)
        panel.selectedParameterGroup = allParamGroups[index]
      }
      // Regenerate date options for this panel's new model
      const { dateArr, selectedRun } = genDateOptionsForProduct(value, panel.selectedRun || menuSelections.selectedRun)
      panel.dateOptions = dateArr
      if (!sharedCycle) {
        panel.selectedRun = selectedRun
      }
    } else if (selectionID === "selectedParameterGroup") {
      panel.selectedParameterGroup = value
      let allParams = Object.keys(prodConf[panel.selectedProduct]["parameters"][value])
      if (!allParams.includes(panel.selectedParameter)) {
        panel.selectedParameter = allParams[0]
      }
    } else if (selectionID === "selectedParameter") {
      panel.selectedParameter = value
    } else if (selectionID === "selectedRun") {
      panel.selectedRun = value
    }

    newPanels[panelIndex] = panel
    setPanels(newPanels)
  }

  const handleSliderChange = (e) => {
    setFcstHr(e.target.value)
  }

  return (
    <div className="App">
      <div className="z-10 relative">
      </div>
      <Alert sx={{ display: "flex", justifyContent: "center"}} severity="error">****THIS IS A NON-OPERATIONAL WEBSITE****</Alert>
      <div className={`flex justify-center items-center pt-4 ${!comparisonMode ? 'pl-[280px]' : ''}`}>
        <h1 className="text-3xl font-bold text-center ">WPC-HMT Model Webpage</h1>
        <AdditionalInfoDialog/>
        <ExternalLinkDialog  />
      </div>

      {prodConf && menuSelections ?
        comparisonMode ?
          <div className="w-full xl:w-[95%] mx-auto">
            <div className="w-full flex flex-col justify-center items-center">
                <SelectionMenuTop
                    domain={domain}
                    handleDomainChange={handleDomainChange}
                    retroDate={retroDate}
                    handleRetroDateChange={handleRetroDateChange}
                    retro={retro}
                    handleRetroChange={handleRetroChange}
                    onChange={handleMenuChange}
                    comparisonMode={comparisonMode}
                    handleComparisonModeChange={handleComparisonModeChange}
                />
                <div className="flex items-center gap-3 py-2 pb-4">
                    <ToggleButtonGroup
                        value={sharedCycle}
                        exclusive
                        onChange={handleSharedCycleChange}
                        size="small"
                        color="primary"
                    >
                        <ToggleButton value={true} sx={{ textTransform: 'none', px: 1.5 }}>Shared Cycle</ToggleButton>
                        <ToggleButton value={false} sx={{ textTransform: 'none', px: 1.5 }}>Independent Cycles</ToggleButton>
                    </ToggleButtonGroup>
                    {sharedCycle &&
                        <div style={{ minWidth: '220px' }}>
                            <ReactSelect
                                aria-label="shared cycle select"
                                options={getReferenceCycleOptions().map((date) => ({ value: date.format('HH z ddd DD MMM YYYY'), label: date.format('HH z ddd DD MMM YYYY') }))}
                                value={{ value: menuSelections.selectedRun, label: menuSelections.selectedRun }}
                                onChange={(e) => handleMenuChange(e, "selectedRun")}
                                isSearchable
                            />
                        </div>
                    }
                </div>
                <HourSlider
                    prodConf={prodConf}
                    onChange={handleSliderChange}
                    fcstHr={fcstHr}
                    menuSelections={menuSelections}
                    display={display}
                    filterHourThresh={filterHourThresh}
                    comparisonPanels={panels}
                    referencePanel={referencePanel}
                />
            </div>
            <ComparisonView
                comparisonMode={comparisonMode}
                panels={panels}
                prodConf={prodConf}
                modelConf={modelConf}
                subModelConf={subModelConf}
                aiModelConf={aiModelConf}
                ensemblesPQPFConf={ensemblesPQPFConf}
                obsConf={obsConf}
                eroConf={eroConf}
                ariFfgConf={ariFfgConf}
                menuSelections={menuSelections}
                fcstHr={fcstHr}
                urlBase={urlBase}
                domain={domain}
                retro={retro}
                display={display}
                filterHourThresh={filterHourThresh}
                onPanelChange={handlePanelChange}
                sharedCycle={sharedCycle}
                referencePanel={referencePanel}
                onReferencePanelChange={handleReferencePanelChange}
            />
          </div>
        :
        <div className="flex w-full xl:w-[95%] mx-auto">
            <div className="w-[280px] sticky top-10" style={{alignSelf: "flex-start"}}>
                <div className="w-full flex flex-col justify-center items-center">
                    <SelectionMenuBottom
                        prodConf={prodConf}
                        obsConf={obsConf}
                        eroConf={eroConf}
                        ariFfgConf={ariFfgConf}
                        ensemblesPQPFConf={ensemblesPQPFConf}
                        modelConf={modelConf}
                        subModelConf={subModelConf}
                        aiModelConf={aiModelConf}
                        dateOptions={dateOptions}
                        menuSelections={menuSelections}
                        onChange={handleMenuChange}
                    />
                </div>
            </div>
            <div className="flex-1" style={{height: '1000px'}}>
                <div className="w-full flex flex-col justify-center items-center">
                    <SelectionMenuTop
                        domain={domain}
                        handleDomainChange={handleDomainChange}
                        retroDate={retroDate}
                        handleRetroDateChange={handleRetroDateChange}
                        retro={retro}
                        handleRetroChange={handleRetroChange}
                        onChange={handleMenuChange}
                        comparisonMode={comparisonMode}
                        handleComparisonModeChange={handleComparisonModeChange}
                    />
                    <HourSlider
                        prodConf={prodConf}
                        onChange={handleSliderChange}
                        fcstHr={fcstHr}
                        menuSelections={menuSelections}
                        display={display}
                        filterHourThresh={filterHourThresh}
                    />
                    <ImageDisplay
                        retro={retro}
                        urlBase={urlBase}
                        domain={domain}
                        prodConf={prodConf}
                        fcstHr={fcstHr}
                        menuSelections={menuSelections}
                        display={display}
                        filterHourThresh={filterHourThresh}
                    />
                </div>
            </div>
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
            <b>Welcome to the Weather Prediction Center's Hydrometeorology Testbed (HMT) PEAR Webpage</b>
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

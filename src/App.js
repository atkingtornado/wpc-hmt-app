import { useState, useEffect } from 'react'

import { NavBar } from "@atkingtornado/wpc-navbar-reactjs";

import Alert from '@mui/material/Alert';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import ImageDisplay from "./features/ImageDisplay"

function App() {

  const [open, setOpen] = useState(false)

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

      {/*<p className="text-xl text-center">Welcome to the Weather Prediction Center's Hydrometeorology Testbed (HMT) Webpage</p>*/}
{/*      <div className="text-center">
        <InfoIcon className="cursor-pointer" color="primary" onClick={()=>{setOpen(true)}} sx={{ fontSize: 28 }}/>
      </div>*/}

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

      <ImageDisplay/>
      
    </div>
  );
}

export default App;

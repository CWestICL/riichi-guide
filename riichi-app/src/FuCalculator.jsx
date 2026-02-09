import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuTiles from './YakuTiles.jsx'
import YAKUS from './Yakus.jsx'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import NativeSelect from '@mui/material/NativeSelect';
import { NumberField } from '@base-ui-components/react/number-field';

import NumberSpinner from './NumberSpinner.jsx';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function commaNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function FuCalculator({
  mini,
  dealer,
  setDealer,
  han,
  setHan,
  chiitoitsu,
  setChiitoitsu,
  pinfu,
  setPinfu,
  closedHand,
  setClosedHand,
  win,
  setWin,
  valuePair,
  setValuePair,
  closedWait,
  setClosedWait,
  tripletNum,
  setTripletNum,
  triplets,
  setTriplets,
}) {
  const handleHanNumChange = (event) => {
    setHan(event);
  };

  const handleChiitoitsuChange = (event) => {
    setChiitoitsu(event.target.checked);
  };

  const handlePinfuChange = (event) => {
    setPinfu(event.target.checked);
  };

  const handleClosedChange = (event) => {
    setClosedHand(event.target.checked);
  };

  const handleValuePairChange = (event) => {
    setValuePair(event.target.checked);
  };

  const handleClosedWaitChange = (event) => {
    setClosedWait(event.target.checked);
  };

  const handleTripNumChange = (event) => {
    setTripletNum(event);
  };

  const handleTripletChange = (event) => {
    const idx = event.target.id.split("-")[0];
    const key = event.target.id.split("-")[1];
    console.log("Index: " + idx + " Key: " + key);
    
    let cloneArray = [...triplets]
    let trip = {...cloneArray[idx]}
    trip[key] = event.target.value;
    cloneArray[idx] = trip;
    console.log(cloneArray);
    
    setTriplets(cloneArray);
  };

  function calcFu() {
    if (chiitoitsu) {
      return 25;
    }
    if (win && pinfu) {
      return 20;
    }
    let fu = 20;
    if (win) {
      fu += 2;
    }
    if (!win && closedHand) {
      fu += 10;
    }
    if (valuePair) {
      fu += 2;
    }
    if (closedWait) {
      fu += 2;
    }
    let closedCount = 0;
    let kanCount = 0;
    for (let i = 0; i < tripletNum; i++) {
      if (!triplets[i]["value"] && !triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Simple open triplet");
        fu += 2;
      }
      if (!triplets[i]["value"] && !triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Simple concealed triplet");
        closedCount ++;
        fu += 4;
      }
      if (!triplets[i]["value"] && triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Simple open kan");
        kanCount ++;
        fu += 8;
      }
      if (!triplets[i]["value"] && triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Simple concealed kan");
        closedCount ++;
        kanCount ++;
        fu += 16;
      }
      if (triplets[i]["value"] && !triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Terminal/Honor open triplet");
        fu += 4;
      }
      if (triplets[i]["value"] && !triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Terminal/Honor concealed triplet");
        closedCount ++;
        fu += 8;
      }
      if (triplets[i]["value"] && triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Terminal/Honor open kan");
        kanCount ++;
        fu += 16;
      }
      if (triplets[i]["value"] && triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Terminal/Honor concealed kan");
        closedCount ++;
        kanCount ++;
        fu += 32;
      }
    }
    console.log("Closed: " + closedCount);
    console.log("Kan: " + kanCount);
    if (closedCount > 3) {
      return "closed";
    }
    if (kanCount > 3) {
      return "kan";
    }

    console.log("Raw: " + fu);
    return Math.ceil(fu / 10) * 10;
  }

  console.log(calcFu());

  const tripletsTable = []
  for (let i = 0; i < tripletNum; i++) {
    tripletsTable.push(
      <tr>
        <td>
          <NativeSelect value={triplets[i]["size"]} onChange={handleTripletChange} id={i + "-size"} sx={{ padding: "0 16px" }}>
            <option value={0}>Triplet</option>
            <option value={1}>Kan</option>
          </NativeSelect>
        </td>
        <td>
          <NativeSelect value={triplets[i]["open"]} onChange={handleTripletChange} id={i + "-open"} sx={{ padding: "0 16px" }}>
            <option value={0}>Open</option>
            <option value={1}>Concealed</option>
          </NativeSelect>
        </td>
        <td>
          <label>Value:</label>
          <NativeSelect value={triplets[i]["value"]} onChange={handleTripletChange} id={i + "-value"} sx={{ padding: "0 16px" }}>
            <option value={0}>2-8</option>
            <option value={1}>1, 9 or Honor</option>
          </NativeSelect>
        </td>
      </tr>
    )
  }

  const pinfuInput = (<>
    <tr>
      <td>
        Pinfu (Minimum Fu) Yaku:
      </td>
      <td>
        <Checkbox checked={pinfu} onChange={handlePinfuChange} />
      </td>
    </tr>
  </>);

  const closedInput = (<>
    <tr>
      <td>
        Closed hand:
      </td>
      <td>
        <Checkbox checked={closedHand} onChange={handleClosedChange} />
      </td>
    </tr>
  </>);

  return (
    <>
      <h3>Calculate Fu</h3>
      <h3>Han: {han} Seven Pairs: {String(chiitoitsu)} Pinfu: {String(pinfu)} Closed: {String(closedHand)} ValuePair: {String(valuePair)} Wait: {String(closedWait)} Triplets: {tripletNum}</h3>
      <h3>Triplet1 - Size: {triplets[0]["size"]} Open: {triplets[0]["open"]} Value: {triplets[0]["value"]}</h3>
      <h3>Triplet2 - Size: {triplets[1]["size"]} Open: {triplets[1]["open"]} Value: {triplets[1]["value"]}</h3>
      <h3>Triplet3 - Size: {triplets[2]["size"]} Open: {triplets[2]["open"]} Value: {triplets[2]["value"]}</h3>
      <h3>Triplet4 - Size: {triplets[3]["size"]} Open: {triplets[3]["open"]} Value: {triplets[3]["value"]}</h3>
      <table className='td-fu'>
        <tbody>
          <tr>
            <td>Han from Yaku and Dora:</td>
            <td>
              <NumberSpinner min={1} max={4} value={han} onValueChange={handleHanNumChange} />
            </td>
          </tr>
          <tr>
            <td>
              Chiitoitsu (Seven Pairs) Yaku:
            </td>
            <td>
              <Checkbox checked={chiitoitsu} onChange={handleChiitoitsuChange} />
            </td>
          </tr>
          {chiitoitsu ? null : <>
            {win ? pinfuInput : closedInput}
            {(win && pinfu) ? null : <>
              <tr>
                <td>
                  Pair is
                  <ul>
                    <li>Dragon</li>
                    <li>Seat Wind</li>
                    <li>Round Wind</li>
                  </ul>
                </td>
                <td>
                  <Checkbox checked={valuePair} onChange={handleValuePairChange} />
                </td>
              </tr>
              <tr>
                <td>Waiting on <b>1</b> tile</td>
                <td>
                  <Checkbox checked={closedWait} onChange={handleClosedWaitChange} />
                </td>
              </tr>
              <tr>
                <td>Number of triplets/kans:</td>
                <td>
                  <NumberSpinner min={0} max={4} value={tripletNum} onValueChange={handleTripNumChange} />
                </td>
              </tr>
            </>}
          </>}
        </tbody>
      </table>
      <table className='td-trip'>
        <tbody>
          {tripletsTable}
        </tbody>
      </table>
      <div>{han} Han - {calcFu()} Fu:</div>
    </>
  )
}

export default FuCalculator

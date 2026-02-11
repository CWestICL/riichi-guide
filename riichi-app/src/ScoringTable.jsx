import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuTiles from './YakuTiles.jsx'
import FuCalculator from './FuCalculator.jsx'
import YAKUS from './Yakus.jsx'
import { SIMPLEPOINTS, FULLROWHEADS, FULLPOINTS } from './Scores.jsx'

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

function commaNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ScoringTable({
  mini,
  setScoringTab,
  simpleScoring,
  setSimpleScoring,
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
  const handleSimpleSwitchChange = (event) => {
    setSimpleScoring(event.target.checked);
    if (event.target.checked) {
      setTripletNum(0);
    }
  };

  const handleDealerSwitchChange = (event) => {
    setDealer(event.target.checked);
  };

  const handleWinDropChange = (event) => {
    setWin(Number(event.target.value));
  };

  const handleClick = (event) => {
    console.log("setScoringTab");
    console.log(setScoringTab);
    setScoringTab(0);
  };

  const simpleTable = (
    <table>
      <tbody className='td-score'>
          <tr><td className="cols3">1 Han</td><td className="cols3">-</td><td><b>{commaNum(!win ? SIMPLEPOINTS[0] * 3 : SIMPLEPOINTS[0])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>2 Han</td><td>-</td><td><b>{commaNum(!win ? SIMPLEPOINTS[1] * 3 : SIMPLEPOINTS[1])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>3 Han</td><td>-</td><td><b>{commaNum(!win ? SIMPLEPOINTS[2] * 3 : SIMPLEPOINTS[2])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>4-5 Han</td><td>Mangan</td><td><b>{commaNum(!win ? SIMPLEPOINTS[3] * 3 : SIMPLEPOINTS[3])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>6-7 Han</td><td>Haneman</td><td><b>{commaNum(!win ? SIMPLEPOINTS[4] * 3 : SIMPLEPOINTS[4])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>8-10 Han</td><td>Baiman</td><td><b>{commaNum(!win ? SIMPLEPOINTS[5] * 3 : SIMPLEPOINTS[5])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>11-12 Han</td><td>Sanbaiman</td><td><b>{commaNum(!win ? SIMPLEPOINTS[6] * 3 : SIMPLEPOINTS[6])}</b> Points {!win ? null : "each"}</td></tr>
          <tr><td>13+ Han</td><td>Counted Yakuman</td><td><b>{commaNum(!win ? SIMPLEPOINTS[7] * 3 : SIMPLEPOINTS[7])}</b> Points {!win ? null : "each"}</td></tr>
      </tbody>
    </table>
  )

  function genFullTable(){
    const fullRows = []
    for (let i = 0; i < FULLROWHEADS.length; i++) {
      const key = FULLROWHEADS[i][0];

      let name = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === "yakuman") {
        name = "Counted Yakuman";
      }

      //console.log(key)
      //console.log(FULLPOINTS[key])
      //console.log(dealer ? "dealer" : "non")
      //console.log(FULLPOINTS[key]["dealer"])

      let points = (
        <td><b>{commaNum(FULLPOINTS[key][dealer ? "dealer" : "non"][win === 0 ? "ron" : "tsumo"])}</b> Points {!win ? null : "each"}</td>
      )
      if (!dealer && win === 1) {
        points = (
          <td><div>Non-dealers pay:</div><div><b>{commaNum(FULLPOINTS[key]["non"]["tsumo"][0])}</b> Points</div><div>Dealer pays:</div><div><b>{commaNum(FULLPOINTS[key]["non"]["tsumo"][1])}</b> Points</div></td>
        )
      }
      fullRows.push(
        <tr><td>{FULLROWHEADS[i][1]}</td><td>{name}</td>{points}</tr>
      )
    }

    return (
      <table>
        <tbody className='td-score'>
            <tr><td className="cols3">1-4 Han</td><td className="cols3">Fu Hand</td><td><a onClick={handleClick}>Calculate</a></td></tr>
            {fullRows}
        </tbody>
      </table>
    )
  }

  const fullSettings = (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormGroup sx={{ padding: "0 16px" }}>
        <FormControlLabel control={
          <Checkbox
            checked={dealer}
            onChange={handleDealerSwitchChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
        } label="Dealer win" />
      </FormGroup>
      </Box>
    </>
  )

  return (
    <>
      <h2>Scoring Table</h2>
      <Box style={{display: "flex"}}>
        <FormGroup sx={{ padding: "0 16px" }}>
          <FormControlLabel control={
            <Switch
              checked={simpleScoring}
              onChange={handleSimpleSwitchChange}
              slotProps={{ input: { 'aria-label': 'controlled' } }}
            />
          } label="Simplified" />
        </FormGroup>
      </Box>
      <Box sx={{ padding: "16px" }}>
        <span>Win type: </span>
        <NativeSelect value={win} onChange={handleWinDropChange} sx={{ padding: "0 16px" }}>
          <option value={0}>Ron</option>
          <option value={1}>Tsumo</option>
        </NativeSelect>
      </Box>
      {simpleScoring ? null : fullSettings}
      {simpleScoring ? simpleTable : genFullTable()}
    </>
  )
}

export default ScoringTable

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuTiles from './YakuTiles.jsx'
import FuCalculator from './FuCalculator.jsx'
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

function commaNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ScoringTable({
  mini,
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
  trip1Size,
  setTrip1Size,
  trip2Size,
  setTrip2Size,
  trip3Size,
  setTrip3Size,
  trip4Size,
  setTrip4Size,
  trip1Open,
  setTrip1Open,
  trip2Open,
  setTrip2Open,
  trip3Open,
  setTrip3Open,
  trip4Open,
  setTrip4Open,
  trip1Value,
  setTrip1Value,
  trip2Value,
  setTrip2Value,
  trip3Value,
  setTrip3Value,
  trip4Value,
  setTrip4Value,
}) {
  const handleSimpleSwitchChange = (event) => {
    setSimpleScoring(event.target.checked);
  };

  const handleDealerSwitchChange = (event) => {
    setDealer(event.target.checked);
  };

  const handleWinDropChange = (event) => {
    setWin(Number(event.target.value));
  };

  const simplePoints = [
    400,
    500,
    1000,
    2000,
    3000,
    4000,
    6000,
    8000,
  ]

  const fullRowHeads = [
    ["mangan", "4-5"],
    ["haneman", "6-7"],
    ["baiman", "8-10"],
    ["sanbaiman", "11-12"],
    ["yakuman", "13+"],
  ]

  const fullPoints = {
    mangan: {
      non: {
        ron: 8000,
        tsumo: [2000, 4000],
      },
      dealer: {
        ron: 12000,
        tsumo: 4000,
      },
    },
    haneman: {
      non: {
        ron: 12000,
        tsumo: [3000, 6000],
      },
      dealer: {
        ron: 18000,
        tsumo: 6000,
      },
    },
    baiman: {
      non: {
        ron: 16000,
        tsumo: [4000, 8000],
      },
      dealer: {
        ron: 24000,
        tsumo: 8000,
      },
    },
    sanbaiman: {
      non: {
        ron: 24000,
        tsumo: [6000, 12000],
      },
      dealer: {
        ron: 36000,
        tsumo: 12000,
      },
    },
    yakuman: {
      non: {
        ron: 32000,
        tsumo: [8000, 16000],
      },
      dealer: {
        ron: 48000,
        tsumo: 16000,
      },
    },
  }

  const simpleTable = (
    <table>
      <tbody className='td-score'>
          <tr><td>1 Han</td><td>-</td><td>{commaNum(win === 0 ? simplePoints[0] * 3 : simplePoints[0])} Points</td></tr>
          <tr><td>2 Han</td><td>-</td><td>{commaNum(win === 0 ? simplePoints[1] * 3 : simplePoints[1])} Points</td></tr>
          <tr><td>3 Han</td><td>-</td><td>{commaNum(win === 0 ? simplePoints[2] * 3 : simplePoints[2])} Points</td></tr>
          <tr><td>4-5 Han</td><td>Mangan</td><td>{commaNum(win === 0 ? simplePoints[3] * 3 : simplePoints[3])} Points</td></tr>
          <tr><td>6-7 Han</td><td>Haneman</td><td>{commaNum(win === 0 ? simplePoints[4] * 3 : simplePoints[4])} Points</td></tr>
          <tr><td>8-10 Han</td><td>Baiman</td><td>{commaNum(win === 0 ? simplePoints[5] * 3 : simplePoints[5])} Points</td></tr>
          <tr><td>11-12 Han</td><td>Sanbaiman</td><td>{commaNum(win === 0 ? simplePoints[6] * 3 : simplePoints[6])} Points</td></tr>
          <tr><td>13+ Han</td><td>Counted Yakuman</td><td>{commaNum(win === 0 ? simplePoints[7] * 3 : simplePoints[7])} Points</td></tr>
      </tbody>
    </table>
  )

  function genFullTable(){
    const fullRows = []
    for (let i = 0; i < fullRowHeads.length; i++) {
      const key = fullRowHeads[i][0];

      let name = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === "yakuman") {
        name = "Counted Yakuman";
      }

      //console.log(key)
      //console.log(fullPoints[key])
      //console.log(dealer ? "dealer" : "non")
      //console.log(fullPoints[key]["dealer"])

      let points = (
        <td>{commaNum(fullPoints[key][dealer ? "dealer" : "non"][win === 0 ? "ron" : "tsumo"])} Points</td>
      )
      if (!dealer && win === 1) {
        points = (
          <td><div>Non-dealer: {fullPoints[key]["non"]["tsumo"][0]} Points</div><div>Dealer: {fullPoints[key]["non"]["tsumo"][1]} Points</div></td>
        )
      }
      fullRows.push(
        <tr><td>{fullRowHeads[i][1]}</td><td>{name}</td>{points}</tr>
      )
    }

    return (
      <table>
        <tbody className='td-score'>
            <tr><td>1-4 Han</td><td>Fu Hand</td><td><i>(Calculate below)</i></td></tr>
            {fullRows}
        </tbody>
      </table>
    )
  }

  const fullSettings = (
    <>
      <FormGroup sx={{ padding: "0 16px" }}>
        <FormControlLabel control={
          <Checkbox
            checked={dealer}
            onChange={handleDealerSwitchChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
        } label="Dealer win" />
      </FormGroup>
    </>
  )

  return (
    <>
      <h2>Scoring Table</h2>
      <FormGroup sx={{ padding: "0 16px" }}>
        <FormControlLabel control={
          <Switch
            checked={simpleScoring}
            onChange={handleSimpleSwitchChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
        } label="Simplified" />
      </FormGroup>
      <Box sx={{ padding: "0 16px" }}>
        <span>Win type: </span>
        <NativeSelect value={win} onChange={handleWinDropChange} sx={{ padding: "0 16px" }}>
          <option value={0}>Ron</option>
          <option value={1}>Tsumo</option>
        </NativeSelect>
      </Box>
      {simpleScoring ? null : fullSettings}
      {simpleScoring ? simpleTable : genFullTable()}
      {simpleScoring ? null : <FuCalculator
        mini={mini}
        dealer={dealer}
        setDealer={setDealer}
        han={han}
        setHan={setHan}
        chiitoitsu={chiitoitsu}
        setChiitoitsu={setChiitoitsu}
        pinfu={pinfu}
        setPinfu={setPinfu}
        closedHand={closedHand}
        setClosedHand={setClosedHand}
        win={win}
        setWin={setWin}
        valuePair={valuePair}
        setValuePair={setValuePair}
        closedWait={closedWait}
        setClosedWait={setClosedWait}
        tripletNum={tripletNum}
        setTripletNum={setTripletNum}
        triplets={triplets}
        setTriplets={setTriplets}
      />}
    </>
  )
}

export default ScoringTable

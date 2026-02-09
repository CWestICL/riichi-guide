import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoringTable from './ScoringTable.jsx'
import TenbouReference from './TenbouReference.jsx'
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

function Scoring({
  mini,
  simpleScoring,
  setSimpleScoring,
  scoringTab,
  setScoringTab,
  tenbouColor,
  setTenbouColor,
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

  const handleTabChange = (event, newValue) => {
    setScoringTab(newValue);
  };

  const numHeaders = []
  for (let i = 1; i < 10; i++) {
    numHeaders.push(<th>{i}</th>)
  }

  const tileRows = [];
  const suits = ["man", "pin", "sou"];
  for (let i = 0; i < suits.length; i++) {
    const row = [];
    let eng;
    switch (suits[i]) {
      case "man":
        eng = "Characters";
        break;
      case "pin":
        eng = "Circles";
        break;
      case "sou":
        eng = "Bamboo";
        break;
    }
    row.push(<th className={"th-" + suits[i]}><div className='ref-suit'>{eng}</div><div className='ref-suit abr'>{"(" + suits[i].charAt(0).toUpperCase() + suits[i].slice(1)+ ")"}</div></th>)
    for (let x = 1; x < 10; x++) {
      row.push(<td className={"td-" + suits[i]}><img src={"/tile_" + suits[i] + "_" + x + ".png"} className='ref-tiles' /></td>)
    }
    tileRows.push(<tr>{row}</tr>);
  }

  const honTiles = []
  for (let i = 1; i < 8; i++) {
    honTiles.push(<td><img src={"/tile_hon_" + i + ".png"} className='ref-tiles' /></td>)
  }

  return (
    <>
      <h1>Scoring</h1>
      <Tabs value={scoringTab} onChange={handleTabChange} sx={{ marginBottom: "20px" }} centered>
        <Tab label="Scoring Table" />
        <Tab label="Tenbou" />
      </Tabs>
      {scoringTab === 0 && <ScoringTable
        mini={mini}
        simpleScoring={simpleScoring}
        setSimpleScoring={setSimpleScoring}
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
      {scoringTab === 1 && <TenbouReference tenbouColor={tenbouColor} setTenbouColor={setTenbouColor}/>}
    </>
  )
}

export default Scoring

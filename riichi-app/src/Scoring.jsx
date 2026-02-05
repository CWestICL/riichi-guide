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
  win,
  setWin,
  valuePair,
  setValuePair,
  closedWait,
  setClosedWait,
  openSimpleTrip,
  setOpenSimpleTrip,
  closedSimpleTrip,
  setClosedSimpleTrip,
  openSimpleKan,
  setOpenSimpleKan,
  closedSimpleKan,
  setClosedSimpleKan,
  openValueTrip,
  setOpenValueTrip,
  closedValueTrip,
  setClosedValueTrip,
  openValueKan,
  setOpenValueKan,
  closedValueKan,
  setClosedValueKan,
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
        win={win}
        setWin={setWin}
        valuePair={valuePair}
        setValuePair={setValuePair}
        closedWait={closedWait}
        setClosedWait={setClosedWait}
        openSimpleTrip={openSimpleTrip}
        setOpenSimpleTrip={setOpenSimpleTrip}
        closedSimpleTrip={closedSimpleTrip}
        setClosedSimpleTrip={setClosedSimpleTrip}
        openSimpleKan={openSimpleKan}
        setOpenSimpleKan={setOpenSimpleKan}
        closedSimpleKan={closedSimpleKan}
        setClosedSimpleKan={setClosedSimpleKan}
        openValueTrip={openValueTrip}
        setOpenValueTrip={setOpenValueTrip}
        closedValueTrip={closedValueTrip}
        setClosedValueTrip={setClosedValueTrip}
        openValueKan={openValueKan}
        setOpenValueKan={setOpenValueKan}
        closedValueKan={closedValueKan}
        setClosedValueKan={setClosedValueKan}
      />}
      {scoringTab === 1 && <TenbouReference tenbouColor={tenbouColor} setTenbouColor={setTenbouColor}/>}
    </>
  )
}

export default Scoring

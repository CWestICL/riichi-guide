import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TileReference from './TileReference.jsx'
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

function Components({ mini, componentTab, setComponentTab, tenbouColor, setTenbouColor }) {

  const handleTabChange = (event, newValue) => {
    setComponentTab(newValue);
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
      <h1>Components</h1>
      <Tabs value={componentTab} onChange={handleTabChange} sx={{ marginBottom: "20px" }} centered>
        <Tab label="Tiles" />
        <Tab label="Tenbou" />
      </Tabs>
      {componentTab === 0 && <TileReference mini={mini} />}
      {componentTab === 1 && <TenbouReference tenbouColor={tenbouColor} setTenbouColor={setTenbouColor}/>}
    </>
  )
}

export default Components

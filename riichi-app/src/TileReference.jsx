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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function TileReference() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log("Tab: " + newValue);
    setTab(newValue);
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
      <Tabs value={tab} onChange={handleTabChange} sx={{ marginBottom: "20px" }} centered>
        <Tab label="Tiles" />
      </Tabs>
      <h2>Number Tiles</h2>
      <table>
        <tr className='th-num'>
          <th rowSpan={2}>Suit</th>
          <th>Terminal</th>
          <th colSpan={7}>Simples</th>
          <th>Terminal</th>
        </tr>
        <tr className='th-num'>
          {numHeaders}
        </tr>
        {tileRows}
      </table>
      <h2>Honor Tiles</h2>
      <table>
        <tr className='th-hon'>
          <th colSpan={4}>Wind Tiles</th>
          <th colSpan={4}>Dragon Tiles</th>
        </tr>
        <tr className='th-hon'>
          <th>East</th>
          <th>South</th>
          <th>West</th>
          <th>North</th>
          <th>White Dragon</th>
          <th>Green Dragon</th>
          <th>Red Dragon</th>
        </tr>
        <tr className='td-hon'>
          {honTiles}
        </tr>
      </table>
    </>
  )
}

export default TileReference

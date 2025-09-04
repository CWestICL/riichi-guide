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

function commaNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function TenbouReference({ tenbouColor, setTenbouColor }) {
  const handleSwitchChange = (event) => {
    setTenbouColor(event.target.checked);
  };

  const tenbouRows = [];
  const pointValues = [
    100,
    500,
    1000,
    5000,
    10000,
  ]
  const deal = [
    "x5",
    "x1",
    "x4",
    "x2",
    "x1",
  ]
  for (let i = 0; i < pointValues.length; i++) {
    if (pointValues[i] === 500 && !tenbouColor) {
      continue;
    }
    let color = "w";
    if (pointValues[i] !== 100 && tenbouColor) {
      color = "c";
    }
    let initDeal = deal[i];
    if (pointValues[i] === 100 && !tenbouColor) {
      initDeal = "x10";
    }
    tenbouRows.push(
      <tr>
        <td>{commaNum(pointValues[i])}</td>
        <td><img src={"/tenbou_" + pointValues[i] + "_" + color + ".png"} className='ref-tenbou' /></td>
        <td>{initDeal}</td>
      </tr>
    )
  }

  return (
    <>
      <h2>Tenbou Point Sticks</h2>
      <div className='yaku-list'>
      <FormGroup sx={{ padding: "0 16px" }}>
        <FormControlLabel control={
          <Switch
            checked={tenbouColor}
            onChange={handleSwitchChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
        } label="Colored Tenbou" />
      </FormGroup>
      <table className='tenbou-table'>
        <thead>
          <tr>
            <th>Points</th>
            <th></th>
            <th>Initial Deal</th>
          </tr>
        </thead>
        <tbody>{tenbouRows}</tbody>
      </table>
      </div>
    </>
  )
}

export default TenbouReference

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

function TileReference({ mini }) {
  const numHeaders = []
  for (let i = 1; i < 10; i++) {
    if (i === 1 || i === 9) {
      numHeaders.push(<th className='th-terminal'>{i}</th>);
    }
    else {
      numHeaders.push(<th>{i}</th>);
    }
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

  const bigHonTable = (
    <table>
      <thead>
        <tr className='th-hon'>
          <th colSpan={4}>Wind Tiles</th>
          <th colSpan={4}>Dragon Tiles</th>
        </tr>
        <tr className='th-hon'>
          <th>East 東</th>
          <th>South 南</th>
          <th>West 西</th>
          <th>North 北</th>
          <th>White Dragon</th>
          <th>Green Dragon</th>
          <th>Red Dragon</th>
        </tr>
      </thead>
      <tbody>
        <tr className='td-hon'>
          {honTiles}
        </tr>
      </tbody>
    </table>
  )

  const smallHonTable = (
    <>
      <div className='table-container'>
        <table>
          <thead>
            <tr className='th-hon'>
              <th colSpan={4}>Wind Tiles</th>
            </tr>
            <tr className='th-hon'>
              <th>East 東</th>
              <th>South 南</th>
              <th>West 西</th>
              <th>North 北</th>
            </tr>
          </thead>
          <tbody>
            <tr className='td-hon'>
              {honTiles.slice(0,4)}
            </tr>
          </tbody>
        </table>
      </div>
      <div className='table-container'>
      <table>
        <thead>
          <tr className='th-hon'>
            <th colSpan={4}>Dragon Tiles</th>
          </tr>
          <tr className='th-hon'>
            <th>White Dragon</th>
            <th>Green Dragon</th>
            <th>Red Dragon</th>
          </tr>
        </thead>
        <tbody>
          <tr className='td-hon'>
            {honTiles.slice(4)}
          </tr>
        </tbody>
      </table>
      </div>
    </>
  )

  return (
    <>
      <h2>Number Tiles</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr className='th-num'>
              <th rowSpan={2}>Suit</th>
              <th className='th-terminal'>Terminal</th>
              <th colSpan={7}>Simples</th>
              <th className='th-terminal'>Terminal</th>
            </tr>
            <tr className='th-num'>
              {numHeaders}
            </tr>
          </thead>
          <tbody>{tileRows}</tbody>
        </table>
      </div>
      <h2>Honor Tiles</h2>
      {mini ? smallHonTable : bigHonTable}
    </>
  )
}

export default TileReference

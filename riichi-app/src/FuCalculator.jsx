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
  const handleSimpleSwitchChange = (event) => {
    setSimpleScoring(event.target.checked);
  };

  const handleDealerSwitchChange = (event) => {
    setDealer(event.target.checked);
  };

  const handleWinDropChange = (event) => {
    setWin(Number(event.target.value));
  };

  return (
    <>
      <h3>Calculate Fu</h3>
      <NumberField.Root defaultValue={han} min={1} max={4} className="num-field">
        <NumberField.Group className="num-group">
          <NumberField.Decrement className="num-decrement">
            <RemoveIcon />
          </NumberField.Decrement>
          <NumberField.Input className="num-input" />
          <NumberField.Increment className="num-increment">
            <AddIcon />
          </NumberField.Increment>
        </NumberField.Group>
      </NumberField.Root>
    </>
  )
}

export default FuCalculator

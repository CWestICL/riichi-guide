import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuItem from './YakuItem.jsx'
import Item from './Item.jsx'
import YAKUS from './Yakus.jsx'
import YAKUCOLORS from './Colors.jsx'

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
import NativeSelect from '@mui/material/NativeSelect';

function YakuList({ mini, english, setEnglish, yakuTab, setYakuTab}) {
  const [expanded, setExpanded] = useState(null);

  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    console.log(typeof newValue)
    setYakuTab(newValue);
  };

  const handleSwitchChange = (event) => {
    setEnglish(event.target.checked);
  };

  const handleDropChange = (event) => {
    setYakuTab(Number(event.target.value));
  };

  const tabMenu = (
    <Tabs value={yakuTab} onChange={handleTabChange} sx={{ marginBottom: "20px" }} centered>
      <Tab label="Beginner" />
      <Tab label="Intermediate" />
      <Tab label="All" />
      <Tab label="Standard" />
      <Tab label="Yakuman" />
      <Tab label="Rare" />
    </Tabs>
  )

  const dropMenu = (
    <NativeSelect value={yakuTab} onChange={handleDropChange} sx={{ marginBottom: "20px" }}>
      <option value={0}>Beginner</option>
      <option value={1}>Intermediate</option>
      <option value={2}>All</option>
      <option value={3}>Standard</option>
      <option value={4}>Yakuman</option>
      <option value={5}>Rare</option>
    </NativeSelect>
  )

  return (
    <>
      <h1>Yaku List</h1>
      {mini ? dropMenu : tabMenu}
      <div className='yaku-list'>
        <Grid container spacing={2} alignItems="center" sx={{ margin: "12px 0", padding: "0 16px" }}>
          <Grid size={mini ? 6 : 8}>
            <FormGroup sx={{ padding: "0 16px" }}>
              <FormControlLabel control={
                <Switch
                  checked={english}
                  onChange={handleSwitchChange}
                  slotProps={{ input: { 'aria-label': 'controlled' } }}
                />
              } label="English Names" />
            </FormGroup>
          </Grid>
          <Grid size={mini ? 3 : 2}>
            <Item sx={{ fontWeight: "bold", backgroundColor: YAKUCOLORS["closedhan"] }}>Closed</Item>
          </Grid>
          <Grid size={mini ? 3 : 2}>
            <Item sx={{ fontWeight: "bold", backgroundColor: YAKUCOLORS["openhan"] }}>Open</Item>
          </Grid>
        </Grid>
        {YAKUS.map((yaku) => (
          <YakuItem mini={mini} yaku={yaku} english={english} yakuTab={yakuTab} expanded={expanded} setExpanded={setExpanded} />
        ))}
      </div>
    </>
  )
}

export default YakuList

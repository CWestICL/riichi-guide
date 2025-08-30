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

const yakuColors = {
  gameplay: "#d9d2e9",
  closed: "#cfe2f3",
  penalty: "#c9daf8",
  open: "#b0cfeb",
  closedyakuman: "#f4cccc",
  openyakuman: "#ea9999",
  lucky: "#fff2cc",
  luckyyakuman: "#ffe599",
  special: "#d9ead3",
  closedhan: "#ffffff",
  openhan: "#efefef",
  anyhan: "#f3f3f3",
}

function YakuList() {
  const [english, setEnglish] = useState(true)
  const [expanded, setExpanded] = useState(null);
  const [tab, setTab] = useState(2);

  const handleExpandChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleTabChange = (event, newValue) => {
    console.log("Tab: " + newValue);
    setTab(newValue);
  };

  const handleSwitchChange = (event) => {
    setEnglish(event.target.checked);
  };

  function createAccordion(yaku,idx,english,tab) {
    switch (tab) {
      case 0:
        if (yaku["difficulty"] !== "basic") {
          return (<></>)
        }
        break;

      case 1:
        if (yaku["difficulty"] !== "basic" && yaku["difficulty"] !== "intermediate") {
          return (<></>)
        }
        break;
      
      case 3:
        if (yaku["type"].includes("lucky") || yaku["type"].includes("yakuman") || yaku["type"].includes("special")) {
          return (<></>)
        }
        break;
      
      case 4:
        if (!yaku["type"].includes("yakuman")) {
          return (<></>)
        }
        break;
      
      case 5:
        if (!yaku["type"].includes("lucky") && !yaku["type"].includes("special")) {
          return (<></>)
        }
        break;
    }
    let bgColor = yakuColors[yaku["type"]];
    let yakuMain = yaku["ename"];
    let yakuSub = yaku["jname"];
    if (!english) {
      yakuMain = yaku["jname"];
      yakuSub = yaku["ename"];
    }
    let closedHan;
    let openHan;
    if (!isNaN(yaku["closedh"])) {
      closedHan = yaku["closedh"] + " Han";
      openHan = yaku["openh"] + " Han";
    }
    else {
      closedHan = yaku["closedh"]
      openHan = yaku["openh"]
    }
    if (yaku["openh"] === 0) {
      openHan = "-"
    }
    let hanGrid = (
      <>
      <Grid size={2}>
        <Item sx={{ fontWeight: "bold", backgroundColor: yakuColors["closedhan"] }}>{closedHan}</Item>
      </Grid>
      <Grid size={2}>
        <Item sx={{ fontWeight: "bold", backgroundColor: yakuColors["openhan"] }}>{openHan}</Item>
      </Grid>
      </>
    )
    if (yaku["closedh"] === yaku["openh"]) {
      hanGrid = (
        <Grid size={4}>
          <Item sx={{ fontWeight: "bold", backgroundColor: yakuColors["anyhan"] }}>{closedHan}</Item>
        </Grid>
      )
    }
    let yakuExample = (<></>);
    if (yaku["examplehand"]) {
      yakuExample = (
        <YakuTiles example={yaku["examplehand"]} />
      )
    }

    let yakuNote = (<></>);
    if (yaku["note"]) {
      yakuNote = (
        <div className='yaku-note'>
          {yaku["note"]}
        </div>
      )
    }

    return (
      <Accordion sx={{ backgroundColor: bgColor }} id={"panel-" + idx} expanded={expanded === 'panel-' + idx} onChange={handleExpandChange('panel-' + idx)}>
        <AccordionSummary sx={{ margin: "0px" }} id="panel-header" aria-controls="panel-content">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid size={8}>
                <div>
                  <p className="yaku-sub">{yakuSub}</p>
                  <h3 className="yaku-main">{yakuMain}</h3>
                </div>
              </Grid>
              {hanGrid}
            </Grid>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: "left" }}>
          {yaku["description"]}
          {yakuExample}
          {yakuNote}
        </AccordionDetails>
      </Accordion>
    )
  }

  const yakuItems = [];
  for (let i = 0; i < YAKUS.length; i++) {
    yakuItems.push(createAccordion(YAKUS[i],i,english,tab));
  }

  return (
    <>
      <FormGroup>
        <FormControlLabel control={
          <Switch
            checked={english}
            onChange={handleSwitchChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
        } label="English Names" />
      </FormGroup>
      <h1>Yaku List</h1>
      <Tabs value={tab} onChange={handleTabChange} sx={{ marginBottom: "20px" }} centered>
        <Tab label="Beginner" />
        <Tab label="Intermediate" />
        <Tab label="All" />
        <Tab label="Standard" />
        <Tab label="Yakuman" />
        <Tab label="Rare" />
      </Tabs>
      <div className='yaku-list'>
        {yakuItems}
      </div>
    </>
  )
}

export default YakuList

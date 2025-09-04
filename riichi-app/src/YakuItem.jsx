import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuTiles from './YakuTiles.jsx'
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

function YakuItem({ mini, yaku, english, yakuTab, expanded, setExpanded}) {
  const handleExpandChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  switch (yakuTab) {
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
  let bgColor = YAKUCOLORS[yaku["type"]];
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
    <Grid size={mini ? 3 : 2}>
      <Item sx={{ fontWeight: "bold", backgroundColor: YAKUCOLORS["closedhan"] }}>{closedHan}</Item>
    </Grid>
    <Grid size={mini ? 3 : 2}>
      <Item sx={{ fontWeight: "bold", backgroundColor: YAKUCOLORS["openhan"] }}>{openHan}</Item>
    </Grid>
    </>
  )
  if (yaku["closedh"] === yaku["openh"]) {
    hanGrid = (
      <Grid size={mini ? 6 : 4}>
        <Item sx={{ fontWeight: "bold", backgroundColor: YAKUCOLORS["anyhan"] }}>{closedHan}</Item>
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

  const idx = yaku["jname"].split(" ").join("-");

  return (
    <Accordion sx={{ backgroundColor: bgColor }} id={"panel-" + idx} expanded={expanded === 'panel-' + idx} onChange={handleExpandChange('panel-' + idx)}>
      <AccordionSummary sx={{ margin: "0px" }} id="panel-header" aria-controls="panel-content">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={mini ? 6 : 8}>
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

export default YakuItem

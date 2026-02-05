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

import Item from './Item.jsx';

function Calls() {

  return (
    <>
      <div className='yaku-list'>
        <h1>Calls</h1>
        <Box sx={{ textAlign: "left", padding: "0 16px" }}><h3></h3></Box>
        <Accordion sx={{ backgroundColor: YAKUCOLORS["closed"] }}>
          <AccordionSummary sx={{ margin: "0px", display: "flex", flexDirection: "column" }} id="panel-header" aria-controls="panel-content">
            <h2 className="yaku-main">"Chi"</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <p>You can call <b>"Chi"</b> when the <b>player to your left</b> discards a tile that could complete a <b>Sequence Meld</b> with two tiles from your hand.</p>
            <p>Place the completed <b>Sequence Meld</b> face-up on the table. Your hand is now <b>Open</b>. Play continues to the player on your right.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: YAKUCOLORS["closed"] }}>
          <AccordionSummary sx={{ margin: "0px", display: "flex", flexDirection: "column" }} id="panel-header" aria-controls="panel-content">
            <h2 className="yaku-main">"Pon"</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <p>You can call <b>"Pon"</b> when <b>any player</b> discards a tile that could complete a <b>Triplet Meld</b> with two identical tiles from your hand.</p>
            <p>Place the completed <b>Triplet Meld</b> face-up on the table. Your hand is now <b>Open</b>. Play continues to the player on your right.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: YAKUCOLORS["closed"] }}>
          <AccordionSummary sx={{ margin: "0px", display: "flex", flexDirection: "column" }} id="panel-header" aria-controls="panel-content">
            <h2 className="yaku-main">"Kan"</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <p>You can call <b>"Kan"</b> to claim a <b>Quadruplet Meld</b>. There are three ways to do this:</p>
            <ul>
              <li><p><b>You have four of the same tile in your hand on your turn</b> - Place the <b>Quadruplet Meld</b> on the table with the two inside tiles face-up. If your hand is <b>Closed</b>, it remains that way. Reveal the new <b>Dora Indicator</b>, then draw and discard a tile.</p></li>
              <li><p><b>You have a concealed Triplet Meld in your hand and an opponent discards the fourth of that tile</b> - Place the <b>Quadruplet Meld</b> on the table face-up. Your hand is now <b>Open</b> if it was not already. Draw and discard a tile, then reveal the new <b>Dora Indicator</b>.</p></li>
              <li><p><b>You have an Open Triplet Meld on the table and you draw the fourth of that tile</b> - Add the new tile to your <b>Open Triplet Meld</b>. Draw and discard a tile, then reveal the new <b>Dora Indicator</b>.</p></li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ textAlign: "left", padding: "0 16px" }}><h3></h3></Box>
        <Accordion sx={{ backgroundColor: YAKUCOLORS["gameplay"] }}>
          <AccordionSummary sx={{ margin: "0px", display: "flex", flexDirection: "column" }} id="panel-header" aria-controls="panel-content">
            <h2 className="yaku-main">"Riichi"</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <p>You can call <b>"Riichi"</b> after drawing a tile. You must be in <b>Tenpai</b> and your hand must be <b>Closed</b>.</p>
            <p>Discard your unneeded tile horizontally and place a <b>1,000</b> point bet on the table. You can no longer alter your hand and must discard every tile you draw unless it's a tile you need to complete your hand. You can also complete your hand if an opponent discards a tile you need to complete your hand.</p>
            <p>Calling <b>"Riichi</b> earns your hand the <b>Riichi Yaku</b>. Your hand is automatically valid to win, even if it doesn't contain any other <b>Yaku</b>.</p>
          </AccordionDetails>
        </Accordion>
        <Box sx={{ textAlign: "left", padding: "0 16px" }}><h3></h3></Box>
        <Accordion sx={{ backgroundColor: YAKUCOLORS["lucky"] }}>
          <AccordionSummary sx={{ margin: "0px", display: "flex", flexDirection: "column" }} id="panel-header" aria-controls="panel-content">
            <h2 className="yaku-main">"Tsumo"</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <p>You can call <b>"Tsumo"</b> when you're in <b>Tenpai</b> and draw a tile that completes your hand.</p>
            <p>You win the round and your opponents pay you the point value of your hand split between them.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: YAKUCOLORS["lucky"] }}>
          <AccordionSummary sx={{ margin: "0px", display: "flex", flexDirection: "column" }} id="panel-header" aria-controls="panel-content">
            <h2 className="yaku-main">"Ron"</h2>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <p>You can call <b>"Ron"</b> when you're in <b>Tenpai</b> and an opponent discards a tile that completes your hand.</p>
            <p>You win the round and the opponent who discarded the tile pays you the entire point value of your hand.</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default Calls

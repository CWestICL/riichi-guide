import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuTiles from './YakuTiles.jsx'
import YAKUS from './Yakus.jsx'
import { FULLPOINTS, FUPOINTS, SIMPLEPOINTS, FULLROWHEADS } from './Scores.jsx'

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

import NumberSpinner from './NumberSpinner.jsx';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function commaNum(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function FuCalculator({
  mini,
  simpleScoring,
  setSimpleScoring,
  dealer,
  setDealer,
  han,
  setHan,
  honba,
  setHonba,
  chiitoitsu,
  setChiitoitsu,
  pinfu,
  setPinfu,
  closedHand,
  setClosedHand,
  win,
  setWin,
  valuePair,
  setValuePair,
  closedWait,
  setClosedWait,
  tripletNum,
  setTripletNum,
  triplets,
  setTriplets,
}) {
  const handleSimpleSwitchChange = (event) => {
    setSimpleScoring(event.target.checked);
  };

  const handleDealerSwitchChange = (event) => {
    setDealer(event.target.checked);
  };

  const handleWinDropChange = (event) => {
    setWin(Number(event.target.value));
    if (event.target.value) {
      setPinfu(false);
    }
  };
  
  const handleHanNumChange = (event) => {
    setHan(event);
  };

  const handleHonbaNumChange = (event) => {
    setHonba(event);
  };

  const handleChiitoitsuChange = (event) => {
    setChiitoitsu(event.target.checked);
    if (event.target.checked) {
      setPinfu(false);
    }
  };

  const handlePinfuChange = (event) => {
    setPinfu(event.target.checked);
    if (event.target.checked) {
      setChiitoitsu(false);
    }
  };

  const handleClosedChange = (event) => {
    setClosedHand(event.target.checked);
  };

  const handleValuePairChange = (event) => {
    setValuePair(event.target.checked);
  };

  const handleClosedWaitChange = (event) => {
    setClosedWait(event.target.checked);
  };

  const handleTripNumChange = (event) => {
    setTripletNum(event);
  };

  const handleTripletChange = (event) => {
    const idx = event.target.id.split("-")[0];
    const key = event.target.id.split("-")[1];
    console.log("Index: " + idx + " Key: " + key);
    
    let cloneArray = [...triplets]
    let trip = {...cloneArray[idx]}
    trip[key] = Number(event.target.value);
    cloneArray[idx] = trip;
    console.log(cloneArray);
    
    setTriplets(cloneArray);
  };

  const fullSettings = (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormGroup sx={{ padding: "0 16px" }}>
        <FormControlLabel control={
          <Checkbox
            checked={dealer}
            onChange={handleDealerSwitchChange}
            slotProps={{ input: { 'aria-label': 'controlled' } }}
          />
        } label="Dealer win" />
      </FormGroup>
      </Box>
    </>
  )

  if (han === 13) {
    const elem = document.getElementById("han-num");
    console.log("elem");
    console.log(elem.value);
    document.getElementById("han-num").innerText = "13+";
  }

  function calcFu() {
    if (chiitoitsu) {
      return 25;
    }
    if (win && pinfu) {
      return 20;
    }
    let fu = 20;
    if (win) {
      fu += 2;
    }
    if (!win && closedHand) {
      fu += 10;
    }
    if (valuePair) {
      fu += 2;
    }
    if (closedWait) {
      fu += 2;
    }
    let closedCount = 0;
    let kanCount = 0;
    for (let i = 0; i < tripletNum; i++) {
      console.log("i: " + i);
      console.log(triplets);
      if (!triplets[i]["value"] && !triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Simple open triplet");
        fu += 2;
      }
      if (!triplets[i]["value"] && !triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Simple concealed triplet");
        closedCount ++;
        fu += 4;
      }
      if (!triplets[i]["value"] && triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Simple open kan");
        kanCount ++;
        fu += 8;
      }
      if (!triplets[i]["value"] && triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Simple concealed kan");
        closedCount ++;
        kanCount ++;
        fu += 16;
      }
      if (triplets[i]["value"] && !triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Terminal/Honor open triplet");
        fu += 4;
      }
      if (triplets[i]["value"] && !triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Terminal/Honor concealed triplet");
        closedCount ++;
        fu += 8;
      }
      if (triplets[i]["value"] && triplets[i]["size"] && !triplets[i]["open"]) {
        console.log("Terminal/Honor open kan");
        kanCount ++;
        fu += 16;
      }
      if (triplets[i]["value"] && triplets[i]["size"] && triplets[i]["open"]) {
        console.log("Terminal/Honor concealed kan");
        closedCount ++;
        kanCount ++;
        fu += 32;
      }
    }
    console.log("Closed: " + closedCount);
    console.log("Kan: " + kanCount);
    if (closedCount > 3) {
      return "closed";
    }
    if (kanCount > 3) {
      return "kan";
    }

    console.log("Raw: " + fu);
    return Math.ceil(fu / 10) * 10;
  }

  const tripletsTable = []
  for (let i = 0; i < 4; i++) {
    let disabled = true;
    if (i < tripletNum) {
      disabled = false;
    }
    tripletsTable.push(
      <tr className={disabled ? 'trip-disabled' : 'trip-enabled'}>
        <td className="cols3">
          <NativeSelect value={triplets[i]["size"]} onChange={handleTripletChange} id={i + "-size"} sx={{ padding: "0 16px" }} disabled={disabled}>
            <option value={0}>Triplet</option>
            <option value={1}>Kan</option>
          </NativeSelect>
        </td>
        <td className="cols3">
          <NativeSelect value={triplets[i]["open"]} onChange={handleTripletChange} id={i + "-open"} sx={{ padding: "0 16px" }} disabled={disabled}>
            <option value={0}>Open</option>
            <option value={1}>Concealed</option>
          </NativeSelect>
        </td>
        <td>
          <NativeSelect value={triplets[i]["value"]} onChange={handleTripletChange} id={i + "-value"} sx={{ padding: "0 16px" }} disabled={disabled}>
            <option value={0}>2-8</option>
            <option value={1}>1, 9 or Honor</option>
          </NativeSelect>
        </td>
      </tr>
    )
  }

  const pinfuInput = (<>
    <tr>
      <td className="cols2">Pinfu (<i>Minimum Fu</i>) Yaku</td>
      <td className="cols2">
        <Checkbox checked={pinfu} onChange={handlePinfuChange} />
      </td>
    </tr>
  </>);

  const closedInput = (<>
    <tr>
      <td className="cols2">Closed hand</td>
      <td className="cols2">
        <Checkbox checked={closedHand} onChange={handleClosedChange} />
      </td>
    </tr>
  </>);

  function genScore() {
    if (simpleScoring) {
      if (han < 2) {
        return (<tr>
          <td className="cols2"><h1 className="points"><b>1</b> Han</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[0] * 3 : SIMPLEPOINTS[0])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else if (han < 3) {
        return (<tr>
          <td className="cols2"><h1 className="points"><b>2</b> Han</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[1] * 3 : SIMPLEPOINTS[1])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else if (han < 4) {
        return (<tr>
          <td className="cols2"><h1 className="points"><b>3</b> Han</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[2] * 3 : SIMPLEPOINTS[2])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else if (han < 6) {
        return (<tr>
          <td className="cols2"><h1>Mangan</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[3] * 3 : SIMPLEPOINTS[3])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else if (han < 8) {
        return (<tr>
          <td className="cols2"><h1>Haneman</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[4] * 3 : SIMPLEPOINTS[4])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else if (han < 11) {
        return (<tr>
          <td className="cols2"><h1>Baiman</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[5] * 3 : SIMPLEPOINTS[5])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else if (han < 13) {
        return (<tr>
          <td className="cols2"><h1>Sanbaiman</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[6] * 3 : SIMPLEPOINTS[6])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
      else {
        return (<tr>
          <td className="cols2"><h1>Counted Yakuman</h1></td>
          <td className="cols2"><h1 className="points"><b>{commaNum(!win ? SIMPLEPOINTS[7] * 3 : SIMPLEPOINTS[7])}</b> Points {!win ? null : "each"}</h1></td>
        </tr>)
      }
    }
    let points;
    const honbaAdd = win ? honba * 100 : honba * 300;
    if (han < 5) {
      const fu = calcFu();
      if (han < 2 && fu === 20 && !pinfu) {
        return (<tr><td>
          <h1>Calculate fu below</h1>
        </td></tr>)
      }
      if (fu === "closed") {
        return (<tr><td>
          <h1 className="invalid">Invalid - Too many concealed triplets for Fu Hand</h1>
        </td></tr>)
      }
      if (fu === "kan") {
        return (<tr><td>
          <h1 className="invalid">Invalid - Too many kans for Fu Hand</h1>
        </td></tr>)
      }
      if (
        (han === 1 && fu < 30) ||
        (han > 1 && fu === 20 && !win) ||
        (han === 2 && fu === 25 && win)
      ) {
        return (<tr><td>
          <h1 className="invalid">Invalid han/fu combination</h1>
        </td></tr>)
      }

      points = (<h1 className="points"><b>{commaNum(FUPOINTS[han][fu][dealer ? "dealer" : "non"][win ? "tsumo" : "ron"] + honbaAdd)}</b> Points {!win ? null : "each"}</h1>)
      if (!dealer && win) {
        points = (<>
          <div>Non-dealers pay:</div>
          <h2 className="points"><b>{commaNum(FUPOINTS[han][fu]["non"]["tsumo"][0] + honbaAdd)}</b> Points</h2>
          <div>Dealer pays:</div>
          <h2 className="points"><b>{commaNum(FUPOINTS[han][fu]["non"]["tsumo"][1] + honbaAdd)}</b> Points</h2>
        </>)
      }
      return (<tr>
        <td className="cols2">
          {(han < 5 && FUPOINTS[han][fu]["dealer"]["ron"] === 12000) ? <h1>Mangan</h1> : null}
          <h1 className="points"><b>{han}</b> Han <b>{fu}</b> Fu</h1>
        </td>
        <td className="cols2">{points}</td>
      </tr>)
    }
    else {
      let idx;
      let name;
      if (han < 6) {
        idx = 0;
        name = "Mangan";
      }
      else if (han < 8) {
        idx = 1;
        name = "Haneman";
      }
      else if (han < 11) {
        idx = 2;
        name = "Baiman";
      }
      else if (han < 13) {
        idx = 3;
        name = "Sanbaiman";
      }
      else {
        idx = 4;
        name = "Counted Yakuman";
      }
      points = (<h1 className="points"><b>{commaNum(FULLPOINTS[FULLROWHEADS[idx][0]][dealer ? "dealer" : "non"][win === 0 ? "ron" : "tsumo"] + honbaAdd)}</b> Points {!win ? null : "each"}</h1>)
      if (!dealer && win) {
        points = (<>
          <div>Non-dealers pay:</div>
          <h2 className="points"><b>{commaNum(FULLPOINTS[FULLROWHEADS[idx][0]]["non"]["tsumo"][0] + honbaAdd)}</b> Points</h2>
          <div>Dealer pays:</div>
          <h2 className="points"><b>{commaNum(FULLPOINTS[FULLROWHEADS[idx][0]]["non"]["tsumo"][1] + honbaAdd)}</b> Points</h2>
        </>)
      }
      return (<tr>
        <td className="cols2">
          <h1>{name}</h1>
        </td>
        <td className="cols2">{points}</td>
      </tr>)
    }
  }

  return (
    <>
      <h2>Score Calculator</h2>
      <Box style={{display: "flex"}}>
        <FormGroup sx={{ padding: "0 16px" }}>
          <FormControlLabel control={
            <Switch
              checked={simpleScoring}
              onChange={handleSimpleSwitchChange}
              slotProps={{ input: { 'aria-label': 'controlled' } }}
            />
          } label="Simplified" />
        </FormGroup>
      </Box>
      <Box sx={{ padding: "16px" }}>
        <span>Win type: </span>
        <NativeSelect value={win} onChange={handleWinDropChange} sx={{ padding: "0 16px" }}>
          <option value={0}>Ron</option>
          <option value={1}>Tsumo</option>
        </NativeSelect>
      </Box>
      {simpleScoring ? null : fullSettings}
      <table className='td-hanfu'>
        <tbody>
          {genScore()}
        </tbody>
      </table>
      <div style={{display: "none"}}>
        <h3>Han: {han} Seven Pairs: {String(chiitoitsu)} Pinfu: {String(pinfu)} Closed: {String(closedHand)} ValuePair: {String(valuePair)} Wait: {String(closedWait)} Triplets: {tripletNum}</h3>
        <h3>Triplet1 - Size: {triplets[0]["size"]} Open: {triplets[0]["open"]} Value: {triplets[0]["value"]}</h3>
        <h3>Triplet2 - Size: {triplets[1]["size"]} Open: {triplets[1]["open"]} Value: {triplets[1]["value"]}</h3>
        <h3>Triplet3 - Size: {triplets[2]["size"]} Open: {triplets[2]["open"]} Value: {triplets[2]["value"]}</h3>
        <h3>Triplet4 - Size: {triplets[3]["size"]} Open: {triplets[3]["open"]} Value: {triplets[3]["value"]}</h3>
      </div>
      <table className='td-main'>
        <tbody>
          <tr>
            <td className="cols2">Han from <b>Yaku</b> and <b>Dora</b></td>
            <td className="cols2">
              <NumberSpinner id="han-num" min={1} max={13} value={han} onValueChange={handleHanNumChange} />
            </td>
          </tr>
          {simpleScoring ? null : <tr>
            <td className="cols2">Honba</td>
            <td className="cols2">
              <NumberSpinner id="honba-num" min={0} max={20} value={honba} onValueChange={handleHonbaNumChange} />
            </td>
          </tr>}
        </tbody>
      </table>
      {(simpleScoring || han > 4) ? null : <>
        <h2>Calculate Fu</h2>
        <table className='td-fu'>
          <tbody>
            {win && pinfu ? null : <>
              <tr>
                <td className="cols2">Chiitoitsu (<i>Seven Pairs</i>) Yaku</td>
                <td className="cols2">
                  <Checkbox checked={chiitoitsu} onChange={handleChiitoitsuChange} />
                </td>
              </tr>
            </>}
            {chiitoitsu ? null : <>
              {win ? pinfuInput : closedInput}
              {(win && pinfu) ? null : <>
                <tr>
                  <td className="cols2">
                    Pair is
                    <div className="ul-container"><ul>
                      <li>Dragon</li>
                      <li>Seat Wind</li>
                      <li>Round Wind</li>
                    </ul></div>
                  </td>
                  <td className="cols2">
                    <Checkbox checked={valuePair} onChange={handleValuePairChange} />
                  </td>
                </tr>
                <tr>
                  <td className="cols2">
                    Waiting for
                    <div className="ul-container"><ul>
                      <li>Middle tile of sequence</li>
                      <li>Tile to complete edge sequence<br/>(<b>1-2-3</b> or <b>7-8-9</b>)</li>
                      <li>Tile to complete single pair</li>
                    </ul></div>
                  </td>
                  <td className="cols2">
                    <Checkbox checked={closedWait} onChange={handleClosedWaitChange} />
                  </td>
                </tr>
                <tr>
                  <td>Number of triplets/kans</td>
                  <td>
                    <NumberSpinner min={0} max={4} value={tripletNum} onValueChange={handleTripNumChange} />
                  </td>
                </tr>
              </>}
            </>}
          </tbody>
        </table>
        {chiitoitsu || (win && pinfu) ? null : <table className='td-trip'>
          <tbody>
            {tripletsTable}
          </tbody>
        </table>}
      </>}
    </>
  )
}

export default FuCalculator

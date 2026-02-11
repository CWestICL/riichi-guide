import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YakuList from './YakuList.jsx'

function getTile(tile) {
  let suit;
  switch (tile[1]) {
    case "m":
      suit = "man";
      break;
    case "p":
      suit = "pin";
      break;
    case "s":
      suit = "sou";
      break;
    case "z":
      suit = "hon";
      break;
  }
  return `${suit}_${tile[0]}`
}

function YakuTiles({ example }) {
  const tilesObj = {
    man: null,
    pin: null,
    sou: null,
    hon: null
  }
  let tileString = example["hand"];
  let split;

  if (tileString.includes("m")) {
    split = tileString.split("m");
    tilesObj["man"] = split[0];
    tileString = split[1];
  }
  if (tileString.includes("p")) {
    split = tileString.split("p");
    tilesObj["pin"] = split[0];
    tileString = split[1];
  }
  if (tileString.includes("s")) {
    split = tileString.split("s");
    tilesObj["sou"] = split[0];
    tileString = split[1];
  }
  if (tileString.includes("z")) {
    split = tileString.split("z");
    tilesObj["hon"] = split[0];
  }

  const tileDemo = [];
  const tiles = [];

  for (let key in tilesObj) {
    if (tilesObj[key]) {
      for (let i = 0; i < tilesObj[key].length; i++) {
        tiles.push(<img src={"/tile_" + `${key}_${tilesObj[key][i]}` + ".png"} className='yaku-tiles' />)
      }
    }
  }

  if (example["kan"]) {
    const kanHTML = [];
    for (let i = 0; i < example["kan"].length; i++) {
      const kanGroup = [];
      kanGroup.push(<img src={"/tile_" + getTile(example["kan"][i]) + "_rotated.png"} className='yaku-tiles kan rotated' />)
      for (let x = 0; x < 3; x++) {
        kanGroup.push(<img src={"/tile_" + getTile(example["kan"][i]) + ".png"} className='yaku-tiles kan' />)
      }
      kanHTML.push(<div className='kan-group'>{kanGroup}</div>)
    }
    tiles.push(kanHTML);
  }

  tileDemo.push(<div>{tiles}</div>)

  const winningHTML = [];

  winningHTML.push(<><span className='winning-tile-separator'>Wait:</span><img src={"/tile_" + getTile(example["winning"][0]) + ".png"} className='yaku-tiles winning' /></>)
  if (example["winning"].length > 1) {
    for (let i = 0; i < example["winning"].length-1; i++) {
      winningHTML.push(<span className='winning-tile-separator'>or</span>);
      winningHTML.push(<img src={"/tile_" + getTile(example["winning"][i+1]) + ".png"} className='yaku-tiles winning' />);
    }
    if (example["tsumo"]) {
      winningHTML.push(<span className='winning-tile-separator'>(Tsumo only)</span>);
    }
  }
  tileDemo.push(<div className='win-group'>{winningHTML}</div>)

  const tileItems = tiles.map(fileName =>
    <img src={"/tile_" + fileName + ".png"} className='yaku-tiles' />
  );

  return (
    <>
      <div className='yaku-tiles-container'>
        {tileDemo}
      </div>
    </>
  )
}

export default YakuTiles

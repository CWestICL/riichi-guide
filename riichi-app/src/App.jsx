import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import YakuList from './YakuList.jsx';
import TileReference from './TileReference.jsx';
import Calls from './Calls.jsx';
import Scoring from './Scoring.jsx';

import FeedbackIcon from '@mui/icons-material/Feedback';
import CasinoIcon from '@mui/icons-material/Casino';
import TocIcon from '@mui/icons-material/Toc';
import CalculateIcon from '@mui/icons-material/Calculate';

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            margin: '0px',
          },
        },
      },
    },
  },
})

function App() {
  const [nav, setNav] = useState(0);
  const [mini, setMini] = useState(false);

  const [tenbouColor, setTenbouColor] = useState(false);
  const [scoringTab, setScoringTab] = useState(0);

  const [english, setEnglish] = useState(true);
  const [yakuTab, setYakuTab] = useState(2);

  const [simpleScoring, setSimpleScoring] = useState(false);
  const [dealer, setDealer] = useState(1);
  const [han, setHan] = useState(1);
  const [chiitoitsu, setChiitoitsu] = useState(false);
  const [pinfu, setPinfu] = useState(false);
  const [closedHand, setClosedHand] = useState(false);
  const [win, setWin] = useState(0);
  const [valuePair, setValuePair] = useState(false);
  const [closedWait, setClosedWait] = useState(false);
  const [tripletNum, setTripletNum] = useState(0);
  const [triplets, setTriplets] = useState([
    {
      size: 0,
      open: 0,
      value: 0,
    },
    {
      size: 0,
      open: 0,
      value: 0,
    },
    {
      size: 0,
      open: 0,
      value: 0,
    },
    {
      size: 0,
      open: 0,
      value: 0,
    },
  ])

  useEffect(() => {
    const updateMenu = () => {
      if (window.innerWidth <= 1300) {
        setMini(true);
      }
      else {
        setMini(false);
      }
    };

    window.addEventListener("resize", updateMenu);
    updateMenu();

    return () => window.removeEventListener("resize", updateMenu) 

  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ pb: 7, overflow: "auto" }}>
          {nav === 0 && <TileReference mini={mini} />}
          {nav === 1 && <YakuList mini={mini} english={english} setEnglish={setEnglish} yakuTab={yakuTab} setYakuTab={setYakuTab} />}
          {nav === 2 && <Calls />}
          {nav === 3 && <Scoring
            mini={mini}
            simpleScoring={simpleScoring}
            setSimpleScoring={setSimpleScoring}
            scoringTab={scoringTab}
            setScoringTab={setScoringTab}
            tenbouColor={tenbouColor}
            setTenbouColor={setTenbouColor}
            dealer={dealer}
            setDealer={setDealer}
            han={han}
            setHan={setHan}
            chiitoitsu={chiitoitsu}
            setChiitoitsu={setChiitoitsu}
            pinfu={pinfu}
            setPinfu={setPinfu}
            closedHand={closedHand}
            setClosedHand={setClosedHand}
            win={win}
            setWin={setWin}
            valuePair={valuePair}
            setValuePair={setValuePair}
            closedWait={closedWait}
            setClosedWait={setClosedWait}
            tripletNum={tripletNum}
            setTripletNum={setTripletNum}
            triplets={triplets}
            setTriplets={setTriplets}
          />}
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, overflow: "hidden", width: "100%" }} elevation={3}>
          <BottomNavigation
            showLabels
            value={nav}
            onChange={(event, newValue) => {
              setNav(newValue);
            }}
          >
            <BottomNavigationAction label="Tiles" icon={<CasinoIcon />} />
            <BottomNavigationAction label="Yaku List" icon={<TocIcon />} />
            <BottomNavigationAction label="Calls" icon={<FeedbackIcon />} />
            <BottomNavigationAction label="Scoring" icon={<CalculateIcon />} />
          </BottomNavigation>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App

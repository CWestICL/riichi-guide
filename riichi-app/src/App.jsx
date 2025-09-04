import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';

import YakuList from './YakuList.jsx'
import Components from './Components.jsx'

import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [nav, setNav] = useState(0);
  const [mini, setMini] = useState(false);

  const [tenbouColor, setTenbouColor] = useState(false);
  const [componentTab, setComponentTab] = useState(0);

  const [english, setEnglish] = useState(false);
  const [yakuTab, setYakuTab] = useState(2);

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
      <div className='inv'><LocationOnIcon fill={"white"}/></div>
      <Box sx={{ pb: 7, overflow: "auto" }}>
        {nav === 0 && <Components mini={mini} componentTab={componentTab} setComponentTab={setComponentTab} tenbouColor={tenbouColor} setTenbouColor={setTenbouColor} />}
        {nav === 1 && <YakuList mini={mini} english={english} setEnglish={setEnglish} yakuTab={yakuTab} setYakuTab={setYakuTab} />}
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, overflow: "hidden", width: "100%" }} elevation={3}>
        <BottomNavigation
          showLabels
          value={nav}
          onChange={(event, newValue) => {
            setNav(newValue);
          }}
        >
          <BottomNavigationAction label="Components" icon={<Icon><img className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" src='/icon1.svg'/></Icon>} />
          <BottomNavigationAction label="Yaku List" icon={<Icon><img className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1umw9bq-MuiSvgIcon-root" src='/icon2.svg'/></Icon>} />
        </BottomNavigation>
      </Paper>
    </>
  )
}

export default App

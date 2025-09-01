import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import YakuList from './YakuList.jsx'
import TileReference from './TileReference.jsx'

function App() {
  const [nav, setNav] = useState(0);
  const [content, setContent] = useState(null);

  useEffect(() => {
    switch (nav) {
      case 0:
        setContent(<TileReference />)
        break;
      case 1:
        setContent(<YakuList />)
        break;
    }
  }, [nav, setContent]);

  return (
    <>
      <Box sx={{ pb: 7 }}>
        {content}
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={nav}
          onChange={(event, newValue) => {
            setNav(newValue);
          }}
        >
          <BottomNavigationAction label="Components" />
          <BottomNavigationAction label="Yaku List" />
        </BottomNavigation>
      </Paper>
    </>
  )
}

export default App

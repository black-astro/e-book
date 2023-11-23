import * as React from 'react';

import { contextApi } from '@components/utils/sideBarContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "@components/Header/css/header.css";
import "@/App.css";

export default function Header() {

  const {toggleSideBar,webChk} = contextApi(); //context api

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  

  return (
    <>
        <div className="header-root">
          {!webChk && 
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="tste" onClick={()=>{toggleSideBar()}}>menu</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          }
        </div>
    </>
  );
  }
import * as React from 'react';

import { useSideBar } from '@components/utils/sideBarContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "@components/Header/css/header.css";

export default function Header() {

  const {toggleSideBar} = useSideBar(); //context api

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    return (
      <>
          <div className="header-root">
            
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton onClick={()=>{toggleSideBar()}}>menu</ToggleButton>
                <ToggleButton value="android">Android</ToggleButton>
                <ToggleButton value="ios">iOS</ToggleButton>
              </ToggleButtonGroup>
          </div>
      </>
    );
  }
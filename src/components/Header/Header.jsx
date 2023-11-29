import { useState } from 'react';

import { contextApi } from '@components/utils/sideBarContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "@components/Header/css/header.css";

const Header = () => {

  const {toggleSideBar,webChk} = contextApi(); //context api

  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
        <div className="header-root">
        {
            webChk &&
            <>
              <div className='header-web-box'>
                <p className='header-title'>
                  Ebstein's <br/><span>Anomaly</span>
                </p>
                <div className='header-link-box'>
                    <a>정상심장과  <br/><span>앱스타인 기형</span></a>
                    <a>진단과 합병증</a>
                    <a>치료</a>
                    <a>용어정리</a>
                </div>
              </div>

              <div className='header-web-bottom-box'>
                <div>
                  <span>정상심장과 앱스타인 기형</span>
                </div>
              </div>
            </>
          }

          {/* e-book 기능*/}
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

export default Header;
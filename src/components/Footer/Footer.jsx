import "@components/Footer/css/footer.css";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { contextApi } from '@components/utils/sideBarContext';
import _ from 'lodash';

function valuetext(value) {
  return `${value}°C`;
}


const theme = createTheme({ //사용자 정의색상 슬라이더색
  palette: {
    primary: {
        main: "#161616"
    },
    secondary: {
        main: "#EEFD53"
    },
    error: {
        main: "#DA1E28"
    }
},
});

const Footer = () => {

const { isDesktop, isMobile,windowWidth} = contextApi();

const wid = _.cloneDeep(windowWidth) * 0.5;

    return (
      <>
          <div className="footer-root">
              <div className="slider-box">
                <div>
                <Box sx={{ width: wid }}>
                  <ThemeProvider theme={theme}>
                    <Slider
                      color="primary"
                      aria-label="Temperature"
                      defaultValue={0} 
                      getAriaValueText={valuetext}
                      valueLabelDisplay="off"
                      step={10}
                      marks
                      min={0}
                      max={100}
                    />
                    </ThemeProvider>
                  </Box>
                </div>
              </div>
          </div>
      </>
    );
  };

  export default Footer;
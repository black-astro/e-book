import "@components/Footer/css/footer.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function Footer() {

    return (
      <>
          <div className="footer-root">
              <div className="slider-box">
                <div>
                <Box sx={{ width: 1000 }}>
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
  }
import React, { useEffect, useRef, useState } from "react";
import Turn from "@components/Body/book/Turn";
import pages from "@components/Body/book/EBookPage";
import "@components/Body/css/Body.css";
import { useMediaQuery } from 'react-responsive';
import { contextApi } from '@components/utils/sideBarContext';

const Body = () => {
  const [page ,setpage] = useState(['a','a','a','a','a']);
  const { isDesktop,isMobile} = contextApi();

  let options = {width: 1300,height: 600,gradients: true,autoCenter: true,display: "double",acceleration: true,elevation: 50,page: 2};


  if(isMobile){
    options = {
      gradients: true,
      autoCenter: true,
      display: "single", //double : 두장씩보기  , single : 한장씩보기 [모바일버전]
      acceleration: true,
      elevation: 50,
      page: 2 //한번에 볼때 웹페이지경우 
    };
  }

  return (
    <>
      <div className="body-root">
          <div>
            <Turn options={options}>
              <div className="cover"><h1>Title</h1></div>
              {page.map((page, index) => (
                <div key={index} className={`page ${index % 2 === 0 ? 'even' : 'odd'}`}>
                  <img src={page} alt={`Page ${index + 1}`} />
                </div>
              ))}
            </Turn>
          </div>
      </div>
    </>
  );
};

export default Body;
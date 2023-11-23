import React, { useEffect, useRef, useState } from "react";
import Turn from "@components/Body/book/Turn";
import pages from "@components/Body/book/EBookPage";
import "@components/Body/css/body.css";
import { contextApi } from '@components/utils/sideBarContext';
import "@/App.css";
import _ from 'lodash';

const Body = () => {

  const { isDesktop,isMobile,windowWidth,webChk} = contextApi();

  const wid = isMobile ? _.cloneDeep(windowWidth) : 1300;

  let options = {
    width: wid,
    height: 600,
    gradients: true,
    autoCenter: true,
    display: isMobile ? "single" : "double",
    acceleration: true,
    elevation: 50,
    page: 2,
  };

  if(isMobile){
    options = {
      gradients: true,
      autoCenter: true,
      display: isMobile ? "single" : "double",
      acceleration: true,
      elevation: 50,
      page: 2,}
  }

  return (
    <div className="body-root">
      {/* WEB body 컴포넌트*/}
      {webChk &&
        <div>
          ㅅㄷㄴㅅ
        </div>
      }
      {/* e-book body 컴포넌트*/}
      {!webChk && 
        <Turn options={options}>
          <div className="cover"><h1>Title</h1></div>
          {pages.map((pageContent, index) => (
            <div key={index} className={`page ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <img src={pageContent} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </Turn>
      }
    </div>
  );
};

export default Body;
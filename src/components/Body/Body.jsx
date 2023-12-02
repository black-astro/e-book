import React, { useEffect, useRef, useState } from "react";
import Turn from "@components/Body/book/Turn";
import pages from "@components/Body/book/EBookPage";

import "@components/Body/css/body.css";
import { contextApi } from '@components/utils/sideBarContext';
import _ from 'lodash';

import Page1 from "@components/Body/bodyComponet/Page1";
import Page2 from "@components/Body/bodyComponet/Page2";
import Page3 from "@components/Body/bodyComponet/Page3";
import Page4 from "@components/Body/bodyComponet/Page4";
import Page5 from "@components/Body/bodyComponet/Page5";
import Page6 from "@components/Body/bodyComponet/Page6";
import Page7_1 from "@components/Body/bodyComponet/Page7_1";
import Page7_2 from "@components/Body/bodyComponet/Page7_2";

const Body = () => {

  const { isDesktop, isMobile, windowWidth, webChk } = contextApi();
  const wid = isMobile ? _.cloneDeep(windowWidth) : 1300;
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

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
        {/* Page 시작 */}
        <div className="body-component">
            <div ref={sectionRefs[0]} className='page'><Page1/></div>
            <div ref={sectionRefs[1]} className='page'><Page2/></div>
            <div ref={sectionRefs[2]} className='page'><Page3/></div>
            <div ref={sectionRefs[3]} className='page'><Page4/></div>
            <div ref={sectionRefs[4]} className='page'><Page5/></div>
            <div ref={sectionRefs[5]} className='page'><Page6/></div>
            <div ref={sectionRefs[6]} className='page'><Page7_1/></div>
            <div ref={sectionRefs[6]} className='page'><Page7_2/></div>
        </div>
      </div>
      }

      {/* e-book body 컴포넌트*/}
      {/* {!webChk && 
        <Turn options={options}>
          <div className="cover"><h1>Title</h1></div>
          {pages.map((pageContent, index) => (
            <div key={index} className={`page ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <img src={pageContent} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </Turn>
      } */}
    </div>
  );
};

export default Body;
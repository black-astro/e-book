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

const Body = () => {

  const { isDesktop, isMobile, windowWidth, webChk } = contextApi();
  const wid = isMobile ? _.cloneDeep(windowWidth) : 1300;
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSection = (section) => {
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = _.throttle(() => {
    if (isScrolling.current) return;

    const scrollPosition = window.scrollY; // 모바일 환경 고려

    for (let i = 0; i < sectionRefs.length; i++) {
      const section = sectionRefs[i].current;
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        if (currentSection !== i) {
          setCurrentSection(i);
          isScrolling.current = true;
          scrollToSection(section);

          setTimeout(() => {
            isScrolling.current = false;
          }, 1500); // 스크롤 애니메이션 지속 시간 증가
        }
        break;
      }
    }
  }, 150); // 스로틀링 시간 증가

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

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
        </div>
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
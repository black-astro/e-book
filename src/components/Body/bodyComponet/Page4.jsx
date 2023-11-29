import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page4.css";

import { contextApi } from '@components/utils/sideBarContext';

const Body_4 = () => {
  
  const {isDesktop} = contextApi(); 

  return (
    <div className="body_4-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_4-title">
            <span>
                <span>4. </span>
                정상심장과 
                <span>앱스타인기형 심장의 순환</span>
            </span>
        </div>
        <div className="body_4-info">
           <div className="body_4-infoBox">

           </div>
        </div> 
    </div>
  );
};

export default Body_4;
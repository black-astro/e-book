import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page5.css";

import { contextApi } from '@components/utils/sideBarContext';

const Page_5 = () => {
  
  const {isDesktop} = contextApi(); 

  return (
    <div className="body_5-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_5-title">
            <span>앱스타인 기형 진단 방법</span>
        </div>
       
        <div className="body_5-info">
            {/* 그림 구역 */}
            <div className="body_5-bottom">
              {/* 이미지 파일 */}
              <div>
                <ImgBox title={'심장초음파'}/>
                <ImgBox title={'컴퓨터 단층 촬영(CT)'}/>
              </div>

              <div>
                <ImgBox title={'심장자기공명영상(cMRI)'}/>
                <ImgBox title={'심전도검사(ECG)'}/>
              </div>
            </div>
        </div>  
    </div>
  );
};

const ImgBox = ({title}) => {
 
  return (
    <div className="page5-img-box">
      <div className="page5-img-card" style={{width:'300px', height:'300px'}}>
      </div>
      <div className="page5-img-text">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Page_5;
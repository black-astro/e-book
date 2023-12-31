import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page3.css";

import { contextApi } from '@components/utils/sideBarContext';

import Dialog from "@components/Body/bodyComponet/Dialog";

const Page_3 = () => {
  
  const {isDesktop} = contextApi(); 

  return (
    <div className="body_3-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_3-title">
            <span>정상심장과 앱스타인형 심장</span>
        </div>
        <div className="body_3-info">
            {/* 정상 심장 */}
            <div className="bon-img-left-box">
              <ImgHeart link='img/normal_heart.svg'/>
              <div className="bon-img-info-text">정상 심장</div>
            </div>

            {/* 앱스타인 기형 심장 */}      
            <div className="bon-img-right-box">
              <ImgHeart link='img/normal_heart.svg'/>
              <div className="bon-img-info-text">앱스타인 기형 심장</div>
            </div>
        </div> 
    </div>
  );
};

const ImgHeart = ({link}) =>{

  const imgZoom = useRef({});

  const modal_On = () => {
    imgZoom.current.handleOpen();
  }

  return (
    <>
      <Dialog link={link} ref={imgZoom}/>
      <img className="hoverImg" src={link} onClick={() => {modal_On()}}/>
    </>
  );
}

export default Page_3;
import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page6.css";



import { contextApi } from '@components/utils/sideBarContext';

const Page_6 = () => {
  
  const {isDesktop} = contextApi(); 

  const imgInfo = [
    {
      title:'A형',
      link:'img/carpentier_a.svg',
      detail:'적절한 기능적 우심실과 함께 삼첨판 전단의 경미한 정단 변위가 있다.'
    },
    {
      title:'B형',
      link:'img/carpentier_b.svg',
      detail:'삼첨판 판막의 정단부 변위가 중간 정도이고 크기는 적당히 감소했지만 우심실 용적은 적절하며 전방 판막이 자유롭게 움직인다.'
    },
    {
      title:'C형',
      link:'img/carpentier_c.svg',
      detail:'삼첨판 판막의 정단부 변위가 심하고 우심실의 기능적 우심실 용적이 작습니다. 우심실 유출로 폐쇄를 유발하는 비정상적인 융모막 부착으로 인해 전방 판막의 움직임이 제한됩니다.'
    },
    {
      title:'D형',
      link:'img/carpentier_d.svg',
      detail:'우심실의 심방이 거의 완전하게 박리된 상태에서 삼첨판 판막이 완전히 박리되지 않았으며 우심실의 심방 내막 부분만 남아 있습니다: "삼첨판낭".'
    },
  ]
  



  return (
    <div className="body_6-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_6-title">
            <span>
                <span>6. </span>
                Carpentier 타입
            </span>
        </div>
        <div className="body_6-info">
            {/* 그림 구역 */}
            <div className="body_6-bottom">
              {/* 이미지 파일 */}
              <div>
                {
                  imgInfo.map((item,index) => {
                    return <ImgBox key={index} paramObj={item}/> 
                  })
                }
              </div>
            </div>
        </div> 
    </div>
  );
};

/**
 * 
 * @param {title,link,detail} obj 데이터
 * @returns 
 */
const ImgBox = ({paramObj}) => {
 
  return (
    <div className="page6-img-box">
      <div className="page6-img-card" style={{width:'300px', height:'300px'}}>
        <img src={paramObj.link} alt="" />
      </div>
      <div className="page6-img-text">
        <div className="title">{paramObj.title}</div>
        <div className="detail">{paramObj.detail}</div>
      </div>
    </div>
  );
}

export default Page_6;
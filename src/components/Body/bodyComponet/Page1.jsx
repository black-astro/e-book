import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page1.css";
import Bon from '@/assets/img/bon2.svg?react';
import { contextApi } from '@components/utils/sideBarContext';

import Dialog from "@components/Body/bodyComponet/Dialog";


const Page_1 = () => {
  
  const {isDesktop} = contextApi(); 

  return (
    <div className="body_1-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_1-title">
            <span>
                <span>1. </span>
                심장에 대한 이해
            </span>
        </div>
        <div className="body_1-info">
            {/*왼쪽 이미지 사진 */}
            <div className="bon-img-box">
              <Dialog link='img/bon3.svg'/>
              <Bon width={"80%"} height={"100%"} fill ="none"/>    
            </div>

            {/*오른쪽 글 */}      
            <div className="bon-img-text">
              엡스타인기형(Ebstein’s anomaly)은 삼첨판막에 생기는 선천성 심장 기형으로,<br/>
              3개의 삼첨판막 중 중격과 후엽이 원래의 판막륜에 부착되지 않고 그 아래,<br/>
              즉 우심실 쪽으로 과도하게 전위되어 부착되는 상태를 말합니다.<br/> 
              앱스타인 기형은 매우 드문 질환으로서, <br/>
              모든 선천성 심기형의 1% 미만을 차지합니다.<br/>
              치료를 받지 않을 경우 장기 생존을 기대하기 어려운 경우가 많으며,<br/>
              흔한 사인들은 심부전, 저산소증, 부정맥 등입니다.
            </div>
        </div> 
    </div>
  );
};

export default Page_1;
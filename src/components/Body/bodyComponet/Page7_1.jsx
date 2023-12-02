import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page7.css";
import Dialog from "@components/Body/bodyComponet/Dialog";

import { contextApi } from '@components/utils/sideBarContext';

const Page_7_1 = () => {
  
  const {isDesktop} = contextApi(); 

  return (
    <div className="body_7_1-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_7_1-title">
            <span>앱스타인 기형 합병증</span>
        </div>
        <div className="body_7_1-info">
            {/*  */}
            
            <div className="body_7_1-top-text">
              {/* 상단 text */}
              앱스타인 기형을 가지고 태어난 환자는 다음과 같은 심장 문제를 겪을 수 있습니다.
            </div>

            <div className="body_7_1-bottom-box">
              <div className="body_7_1-text-box">
                {/* 심방 중격 결손증 */}
                <h3>심방 중격 결손증</h3>
                <p>
                  심방 중격 결손은 우심방과 좌심방 사이의 벽의 결손을 통해 혈류가 
                  새는 기형을 의미합니다. 동맥혈은 폐순환을 지나서 좌심방으로 돌아오는데, 
                  그중 일부가 심방 중격 결손을 통해 우심방으로 유입되고 우심실을 거쳐서 
                  다시 폐순환으로 들어갑니다. 그 결과 우심방과 우심실의 부담이 커지며 
                  폐혈류량이 증가합니다.
                </p>

                {/* 부정맥 */}
                <h3>부정맥</h3>
                <p>
                  순환계의 펌프인 심장은 신체가 매 상황에서 필요로 하는 정도의 박동을 제공해야
                  합니다. 심장 박동은 정상인 경우 안정 상태에서 1분에 60~100회의 박동을 하며
                  활동시에는 운동의 정도에 따라 필요한 만큼 맥박이 빨라지고 안정시에는 
                  다시 맥박이 느려지는데, 부정맥은 이러한 정상 체계가 무너지는 모든 상황을 의미합니다. 
                  맥박이 신체 활동 상태에 맞지 않게 느린 경우(서맥성 부정맥), 
                  필요하지 않은데 맥박이 빨라지는 경우(빈맥성 부정맥), 
                  맥박이 일정한 리듬을 잃어버리고 불규칙하게 바뀌는 경우가 모두 부정맥에 포함됩니다. 
                </p>

                {/* 울프- 파킨슨-화이트 증후군 */}
                <h3>울프- 파킨슨-화이트 증후군</h3>
                <p>
                  울프-파킨슨-화이트 증후군(Wolff-Parkinson-White syndrome)은 심방과 
                  심실 사이 비정상적인 전기신호 전달 통로인 부전도로가 존재하여 빠른 부정맥이 
                  동반되는 선천적 심장질환입니다.
                </p>
              </div>
              {/* 이미지 파일 */}
              <div className="body_7_1-img-box">
                <Dialog link='img/page7heart.svg'/>
                <ImgBox link='img/page7heart.svg'/>
              </div>
            </div>
        </div> 
    </div>
  );
};


const ImgBox = ({link}) => {
 
  return (
    <div className="page7_1-img-box">
      <div className="page7_1-img-card" style={{width:'300px', height:'300px'}}>
        <img src={link} />
      </div>
      <div className="page7_1-img-text">
      </div>
    </div>
  );
}

export default Page_7_1;
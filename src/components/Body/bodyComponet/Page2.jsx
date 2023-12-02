import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page2.css";

const Page_2 = () => {

  return (
    <div className="body_2-box">
      {/* 타이틀 */}
        <div className="body_2-title">
          <span>앱스타인 기형이란?</span> 
        </div>
        <div className="body_2-info">
            {/* 상단 info */}
            <div className="body_2-top">
              엡스타인기형(Ebstein’s anomaly)은 삼첨판막에 생기는 선천성 심장 기형으로, 
              3개의 삼첨판막 중 중격과 후엽이 원래의 판막륜에 부착되지 않고 그 아래, 
              즉 우심실 쪽으로 과도하게 전위되어 부착되는 상태를 말합니다. 
              앱스타인 기형은 매우 드문 질환으로서, 모든 선천성 심기형의 1% 미만을 차지합니다. 
              치료를 받지 않을 경우 장기 생존을 기대하기 어려운 경우가 많으며, 
              흔한 사인들은 심부전, 저산소증, 부정맥 등입니다.
            </div>

            {/* 중단 info */}
            <div className="body_2-mid">
               {/* 중단 - 상단 */} 
              <div>
                {/* left - box */}
                <div className="body_2-mid-title">
                  앱스타인 
                  기형의 원인
                </div>
                {/* right - box */}
                <div className="body_2-mid-textBox">
                  태아의 심장 형성은 임신 첫 3개월에 완료됩니다. 
                  앱스타인 심기형은 이 기간 중에 여러 가지 이유에 의해서 심장이 혈액순환에 적합하지  않은 형태가 되어 발생합니다. 
                  즉, 심장은 임신 1개월에서 2개월까지 약 4주 동안의 짧은 시간에 복잡한 과정을 거쳐 형성되는데, 
                  이 과정중에 만들어져야 하는 것이 덜 만들어지거나, 아예 형성되지 않거나, 심방, 심실, 대혈관들이 서로 잘못 연결되는 해부학적 문제가 생긴 것입니다. 
                  연구자들은 무엇이 태아에게 앱스타인 기형을 유발시키는지 정확히 알지 못하지만, 임신 중에 리튬과 같은 일부 의약품을 사용하면 아이에게 엡스타인 이상이 발생할 위험이 높아질 수 있습니다.
                </div>
              </div>
                {/* 중단 - 하단 */}
              <div>
                {/* left - box */}
                <div className="body_2-mid-title">
                  앱스타인 
                  기형의 증상
                </div>
                {/* right - box */}
                <div className="body_2-mid-textBox">
                  앱스타인 기형을 갖고 태어난 일부 아기는 증상이 거의 없거나 전혀 없습니다. 때로는 증상이 성인이 되어서까지 나타나지 않는 경우도 있습니다.
                </div>
              </div>
            </div>

            {/* 하단 info */}
            <div className="body_2-bottom">
              {/* 이미지 파일 */}
              <div>
                <ImgBox/>
                <ImgBox/>
                <ImgBox/>
              </div>

              <div>
                <ImgBox/>
                <ImgBox/>
              </div>
            </div>
        </div> 
    </div>
  );
};

const ImgBox = () => {
  return (
    <div className="page2-img-box">
      <div className="page2-img-card" style={{width:'300px', height:'300px'}}>

      </div>
      <div className="page2-img-text">
        병명 TEXT
      </div>
    </div>
  );
}

export default Page_2;
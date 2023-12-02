import React, { useEffect, useRef, useState } from "react";
import "@components/Body/bodyComponet/css/page7.css";
import Dialog from "@components/Body/bodyComponet/Dialog";

import { contextApi } from '@components/utils/sideBarContext';

const Page_7_2 = () => {
  
  const {isDesktop} = contextApi(); 

  return (
    <div className="body_7_2-box" style={{paddingTop:'3em',paddingBottom:'3em'}}>
      {/* 타이틀 */}
        <div className="body_7_2-title">
        </div>
        <div className="body_7_2-info">
            {/*  */}
            
            <div className="body_7_2-top-text">
              {/* 상단 text */}
              앱스타인 기형에 대한 치료는 상태의 중증도, 
              징후나 증상의 존재여부, 상태가 점점 악화되는지 여부에 따라 달라집니다. 
              증상이 경미한 경우, 약물치료와 함께 정기적인 진료를 하여 계속 모니터링을 합니다. 
              증상이 심한 경우 환자의 상태에 따른 수술방법을 선택하여 심장 수술이 진행됩니다.
            </div>

            <div className="body_7_2-bottom-box">
              <div className="body_7_2-text-box">
               <InfoDiv1/>{/* 내과적 치료 */}
               <InfoDiv2/>{/* 외과적 치료 */}
              </div>
            </div>
        </div> 
    </div>
  );
};


const ImgBox = ({link}) => {
 
  return (
    <>
      <Dialog link={link}/>
      <div className="page7_2-img-box">
        <div className="page7_2-img-card">
          <img src={link} style={{width:'90%'}}/>
        </div>
        <div className="page7_2-img-text">
        </div>
      </div>
    </>
  );
}

const InfoDiv1 = () => {
  return (
    <>
      <div className="info-div-box">

        {/* 왼쪽 타이틀 */}
        <div className="left-box-title">
          <strong>내과적 치료</strong>
        </div>

        {/* 오른쪽 설명 */}
        <div className="right-box">
          <p>
            선청성 심질환이나 후천성 심질환에 대한 약물 치료는 심장의 기능을 도와주거나
            심장의 부담을 줄여 주어서 심질환으로 인한 여러 증상의 호전을 가져오는 데 목적이 있습니다. 
            각 약물은 본연의 약리 작용과 환자의 증상과 상태에 맞추어 투여되게 됩니다. 
            또한 수술을 받은 이후에도 일정 기간 혹은 지속적으로 약물을 투여함으로써 심장의 제 기능을 하도록 도와주고, 
            심장의 부담을 덜어주는 치료를 더하게 됩니다.
          </p>

          <p>
            <strong>사용하는 약물</strong>
          </p>

          <p>
            <span className="mini-title">① 항부정맥제</span>
            심장의 부정맥은 심장 구조 내의 연속된 전기적 흐름에 이상이 생기게 되어 맥박이 갑자기 아주빨라지거나, 
            느려지게 되는 경우를 말합니다.앱스타인 기형 수술 후에도 지속적으로 부정맥이 존재하거나 수술 후에 부정맥이 새로 생기게 되는 경우가 있습니다. 
            이러한 비정상적인 전기적 흐름을 정상적으로 다시 바꾸어 주기 위해 투여하는 것이 항 부정맥제입니다. 
            항 부정맥제는 심전도에 나타난 전파의 양상을 분석하여 각 부정맥의 종류에 따라 억제를 투여하게 됩니다.
          </p>

          <p>
            <span className="mini-title">② 항응고제</span>
            치료의 목적으로 인공 판막 등의 인조 물질을 심장이나 혈관 내에 삽입했을 경우에는 여기에 혈전이 생성되게 되면서 인공 판막이 기능을 못하게 되거나, 
            심한 경우에는 혈전이 뇌로 가서 허혈성 뇌경색(중풍, 뇌졸중)을 유발할 수도 있습니다. 
            이러한 이유로 우리 몸의 정상적인 응고 시스템을 억제할 수 있는 치료가 필요합니다. 
            대표적인 항응고제로 해파린과 와파린이 있는데, 해파린은 주사제이기에 효과를 빨리 볼 수 있다는 장점이 있지만, 
            외래에서 사용할 수 는 없어서 입원한 경우에만 사용하고 퇴원 무렵이 되면 경구 복용약인 와파린을 처방하여 투여합니다.
          </p>

          <p>
            <span className="mini-title">③ 이뇨제</span>
            이뇨제는 심장에 부담을 줄여주기 위해 투여되는 약물로 주로 신장에서 수분과 나트륨의 재흡수를 억제하여 
            몸을 순환하는 혈액의 양을 감소시켜 줌으로써 폐로 흐르는 혈액의 과부하를 막아주고 심실에 부담을 줄여주게 됩니다. 
          </p>

        </div>
      </div>
    </>
  );
}


const InfoDiv2 = () => {
  return (
    <>
      <div className="info-div-box">

        {/* 왼쪽 타이틀 */}
        <div className="left-box-title">
          <strong>외과적 치료</strong>
        </div>

        {/* 오른쪽 설명 */}
        <div className="right-box">
          <p>
            선청성 심질환이나 후천성 심질환에 대한 약물 치료는 심장의 기능을 도와주거나 
            심장의 부담을 줄여 주어서 심질환으로 인한 여러 증상의 호전을 가져오는 데 목적이 있습니다. 
            각 약물은 본연의 약리 작용과 환자의 증상과 상태에 맞추어 투여되게 됩니다. 
            또한 수술을 받은 이후에도 일정 기간 혹은 지속적으로 약물을 투여함으로써 심장의 제 기능을 하도록 도와주고, 
            심장의 부담을 덜어주는 치료를 더하게 됩니다.
          </p>

          <div className="page7_2-imgBox dis-f">
            <ImgBox link='img/page7_2_top_l.svg'/>
            <ImgBox link='img/page7_2_top_r.svg'/>
          </div>
          <p>
            <strong>원뿔재건술(cone repair)</strong>
            원뿔재건술은 삼첨판막의 해부학적 결손을 제거하고 사용 가능한 모든 조직으로 원뿔형 구조를 만듭니다. 
            만들어진 원뿔형 조직은 우심실 접합부에 덮어 정상적인 삼첨판막의 기능을 할 수 있도록 합니다.
          </p>


          <div className="page7_2-imgBox dis-f">
            <ImgBox link='img/page7_2_md_l.svg'/>
            <ImgBox link='img/page7_2_md_r.svg'/>
          </div>
          <p>
            <strong>우심실 주름 성형술(placation)</strong>
            환자의 나이가 어느 정도 들어서 청색증이나 우심실 기능 부전이 있는 경우에는 이 방법을 권장합니다. 
            이 수술은 심방화된 우심실을 접어서 작게 만들어 주고(plication of aRV), 
            삼첨판륜을 작게 좁혀 준 후에 삼첨판의 전방엽을 우심실 벽에서 떼어내서 잘 움직일 수 있도록 해주는 수술입니다.
          </p>


          <div className="page7_2-imgBox dis-f">
            <ImgBox link='img/page7_2_bt_l.svg'/>
            <ImgBox link='img/page7_2_bt_r.svg'/>
          </div>
          <p>
            <strong>삼천판막 교체술</strong>
            삼첨판을 인공 판막으로 교체하는 수술입니다.
            엡스테인 환자의 약 20~30%는 삼첨판의 기형이 너무 심해서 이를 교정하는 것이 불가능합니다. 
            그러므로 삼첨판을 떼어내고 인공 판막으로 바꾸어 주는 수술을 시행합니다.
          </p>
        </div>
      </div>
    </>
  );
}

const InfoDiv3 = () => {
  return (
    <>
      <div className="info-div-box">

        {/* 왼쪽 타이틀 */}
        <div className="left-box-title">
          <strong>수술 후 관리 방법</strong>
        </div>

        {/* 오른쪽 설명 */}
        <div className="right-box">
          <p><strong>수술 후 운동</strong></p>
          <p>
            선청성 심질환이나 후천성 심질환에 대한 약물 치료는 심장의 기능을 도와주거나 
            심장의 부담을 줄여 주어서 심질환으로 인한 여러 증상의 호전을 가져오는 데 목적이 있습니다. 
            각 약물은 본연의 약리 작용과 환자의 증상과 상태에 맞추어 투여되게 됩니다. 
            또한 수술을 받은 이후에도 일정 기간 혹은 지속적으로 약물을 투여함으로써 심장의 제 기능을 하도록 도와주고, 
            심장의 부담을 덜어주는 치료를 더하게 됩니다.
          </p>

          <p>
            <strong>원뿔재건술(cone repair)</strong>
            원뿔재건술은 삼첨판막의 해부학적 결손을 제거하고 사용 가능한 모든 조직으로 원뿔형 구조를 만듭니다. 
            만들어진 원뿔형 조직은 우심실 접합부에 덮어 정상적인 삼첨판막의 기능을 할 수 있도록 합니다.
          </p>

          <p>
            <strong>우심실 주름 성형술(placation)</strong>
            환자의 나이가 어느 정도 들어서 청색증이나 우심실 기능 부전이 있는 경우에는 이 방법을 권장합니다. 
            이 수술은 심방화된 우심실을 접어서 작게 만들어 주고(plication of aRV), 
            삼첨판륜을 작게 좁혀 준 후에 삼첨판의 전방엽을 우심실 벽에서 떼어내서 잘 움직일 수 있도록 해주는 수술입니다.
          </p>

          <p>
            <strong>삼천판막 교체술</strong>
            삼첨판을 인공 판막으로 교체하는 수술입니다.
            엡스테인 환자의 약 20~30%는 삼첨판의 기형이 너무 심해서 이를 교정하는 것이 불가능합니다. 
            그러므로 삼첨판을 떼어내고 인공 판막으로 바꾸어 주는 수술을 시행합니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page_7_2;
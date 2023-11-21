import React, { useEffect, useRef } from "react";
import Turn from "@components/Body/book/Turn";
import pages from "@components/Body/book/EBookPage";
import "@components/Body/css/Body.css";

const Body = () => {

    //옵션
  const options = {
    width: 1300,
    height: 600,
    autoCenter: true,
    display: "double", //double : 두장씩보기  , single : 한장씩보기 [모바일버전]
    acceleration: true,
    elevation: 50,
    gradients: true,
    page: 2 //한번에 볼때 웹페이지경우 
  };

  return (
    <>
      <div className="turn-box">
        <Turn options={options}>
          <div className="cover"><h1>Title</h1></div>
          {pages.map((page, index) => (
            <div key={index} className={`page ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <img src={page} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </Turn>
      </div>
    </>
  );
};

export default Body;
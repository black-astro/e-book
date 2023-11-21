import React, { useEffect, useRef } from "react";
import "@components/Body/css/turn.css";


const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
  ];


  const CustomPageComponent = ({ content }) => {
    return (
      <div className="custom-page">
        {/* 여기에 페이지 내용을 렌더링 */}
        {content}
      </div>
    );
  };

  export default pages;
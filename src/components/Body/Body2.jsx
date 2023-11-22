import React, { useEffect, useRef, useState } from "react";
import "@components/Body/css/body.css";
import "@components/Body/css/turn.css";

const Body2 = () => {
  const numberOfPages = 1000;
  const [currentPage, setCurrentPage] = useState(2);
  const bookRef = useRef(null);

  const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
  ];

  useEffect(() => {
    const $ = window.$;
    const book = $(bookRef.current);

    book.turn({
      display: 'double',
      acceleration: true,
      pages:pages.length,
      elevation: 50,
      gradients: !$.isTouch,
      width: 1400,
      height: 600,
      autoCenter: true,
      page: 2,
      // 이하 turning 및 turned 콜백 함수
    });

    // 페이지 컨트롤 및 키보드 이벤트 관리
    // ...

    return () => {
      book.turn('destroy');
      // 이벤트 핸들러 해제
    };
  }, [currentPage]); // 의존성 배열에 currentPage 추가

  
  return (
    <div className="book-box">
      <div ref={bookRef} id="book">
        <div className="cover"><h1>Title</h1></div>
      </div>
    </div>
  );
};

export default Body2;
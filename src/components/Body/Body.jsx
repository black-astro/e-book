import React, { useEffect, useRef } from "react";
// import "./css/body.css";
import "./css/turn.css";

const Turn = ({ options = {}, children }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const $ = window.$; // jQuery에 접근
    const book = $(elRef.current).turn({ ...options });

    // 키보드 이벤트 핸들러
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) book.turn("previous");
      if (event.keyCode === 39) book.turn("next");
    };

    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      book.turn("destroy").remove();
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [options]);

  return <div ref={elRef} id="book">{children}</div>;
};

//옵션
const options = {
  width: 1300,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: true,
  page: 2
};

const pages = [
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
];


const Body = () => {
  return (
    <>
      <div>
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
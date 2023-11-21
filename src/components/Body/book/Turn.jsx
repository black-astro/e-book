import React, { useEffect, useRef } from "react";
import "@components/Body/css/turn.css";

const Turn = ({ options = {}, children }) => {
    const elRef = useRef(null);
  
    useEffect(() => {
        const $ = window.$; // jQuery에 접근
        const book = $(elRef.current).turn({ ...options });
      
        // 키보드 이벤트 핸들러
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowLeft') book.turn("previous");
          if (event.key === 'ArrowRight') book.turn("next");
        };
      
        // turning 이벤트 핸들러
        // const handleTurning = (event, page, view) => {
        //   // 총 페이지 수
        //   const totalPages = book.turn("pages");
      
        //   // 첫 번째 페이지에서 왼쪽으로의 드래그 방지
        //   if (page === 1) {
        //     event.preventDefault();
        //   }
      
        //   // 마지막 페이지에서 오른쪽으로의 드래그 방지
        //   if (page === totalPages - 1) {
        //     event.preventDefault();
        //   }
        // };

        //첫번째페이지 넘길때이벤트
        $("#book").bind("first", function(event) {
            event.preventDefault();
        });
        
        //마지막페이지 넘길때 이벤트
        $("#book").bind("last", function(event) {
            alert("You are at the end of the flipbook");
        });
      
        // book.bind("turning", handleTurning);
        document.addEventListener("keydown", handleKeyDown, false);
      
        return () => {
          book.unbind("turning", handleTurning);
          book.turn("destroy").remove();
          document.removeEventListener("keydown", handleKeyDown, false);
        };
      }, [options]);
  
    return <div ref={elRef} id="book">{children}</div>;
  };
  
  export default Turn;
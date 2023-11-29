import React, { useEffect, useRef } from "react";
import "@components/Body/css/turn.css";

const Turn = ({ options, children }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const $ = window.$; // jQuery에 접근
    const book = $(elRef.current).turn({ ...options });

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') book.turn("previous");
      if (event.key === 'ArrowRight') book.turn("next");
    };

    $("#book").bind("turning", function (event, page) {
      if (page === 1) {
        event.preventDefault();
      }
    });

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      book.turn("destroy");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div ref={elRef} id="book">{children}</div>;
};

export default Turn;
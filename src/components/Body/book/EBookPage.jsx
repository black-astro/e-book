import React, { useEffect, useRef } from "react";
import "@components/Body/css/turn.css";

const CustomPageComponent = ({ content }) => {
  return (
    <div className="custom-page">
      {/* 여기에 페이지 내용을 렌더링 */}
      {content}
    </div>
  );
};

const pages = [
    <CustomPageComponent/>,
    <CustomPageComponent/>,
    <CustomPageComponent/>,
    <CustomPageComponent/>,
    <CustomPageComponent/>,
    <CustomPageComponent/>,
  ];

  export default pages;
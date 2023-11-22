import React, { useEffect, useRef, useState } from "react";
import Turn from "@components/Body/book/Turn";
import pages from "@components/Body/book/EBookPage";
import "@components/Body/css/body.css";
import { contextApi } from '@components/utils/sideBarContext';

const Body = () => {
 // const [page ,setpage] = useState(pages);
  const { isDesktop,isMobile} = contextApi();
  
  let options = {
    width: 1300,
    height: 600,
    gradients: true,
    autoCenter: true,
    display: isMobile ? "single" : "double",
    acceleration: true,
    elevation: 50,
    page: 2,
    pages:pages.length
  };

  return (
    <div className="body-root">
     
        <Turn options={options}>
          <div className="cover"><h1>Title</h1></div>
          {pages.map((pageContent, index) => (
            <div key={index} className={`page ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <img src={pageContent} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </Turn>
     
    </div>
  );
};

export default Body;
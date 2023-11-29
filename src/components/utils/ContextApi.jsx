import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SideBarContext from '@/components/utils/SideBarContext';
import { useMediaQuery } from 'react-responsive';


export const SideBarProvider = ({ children }) => {

  const isMobile = useMediaQuery({ maxWidth: 767 }); //모바일
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); //테블릿
  const isLargeTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1279 }); //라지테블릿
  const isDesktop = useMediaQuery({ minWidth: 1280 }); //pc

  //첫 로딩페이지 web | e-book
  const [webChk, setWebChk] = useState(true);

  useEffect(() => {
    //e-book web 배경색 변경
    const backColor = webChk ? '#fffff' : '#cacaca';
   
    document.body.style.backgroundColor = backColor;

    // 컴포넌트 언마운트 시 원래 배경색으로 복원
    return () => {
      document.body.style.backgroundColor = backColor;
    };
  }, [webChk]); // backgroundColor 상태가 변경될 때마다 실행

  //접속기기 body 넓이구하기
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //사이드바 on off
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  //사이드바 토글스위치
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar, isDesktop, isMobile ,isTablet, isLargeTablet,windowWidth, webChk }}>
      {children}
    </SideBarContext.Provider>
  );
};

SideBarProvider.propTypes = {
  children: PropTypes.node.isRequired
};
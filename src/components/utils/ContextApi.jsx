import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SideBarContext from '@/components/utils/SideBarContext';
import { useMediaQuery } from 'react-responsive';


export const SideBarProvider = ({ children }) => {

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

  //데스크탑 일시 true
  const isDesktop = useMediaQuery({ minDeviceWidth: 1300 });
  //모바일 일시 true
  const isMobile = useMediaQuery({ maxDeviceWidth: 1300 });

  //사이드바 on off
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  //사이드바 토글스위치
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar, isDesktop, isMobile ,windowWidth }}>
      {children}
    </SideBarContext.Provider>
  );
};

SideBarProvider.propTypes = {
  children: PropTypes.node.isRequired
};
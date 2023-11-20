import { useState } from 'react';
import PropTypes from 'prop-types';
import SideBarContext from '@/components/utils/SideBarContext';

export const SideBarProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

SideBarProvider.propTypes = {
  children: PropTypes.node.isRequired
};
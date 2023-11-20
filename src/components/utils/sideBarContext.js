import { createContext, useContext} from 'react';

const SideBarContext = createContext();

export const useSideBar = () => useContext(SideBarContext);

export default SideBarContext;
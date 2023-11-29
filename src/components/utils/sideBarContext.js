import { createContext, useContext} from 'react';

const SideBarContext = createContext();

export const contextApi = () => useContext(SideBarContext);

export default SideBarContext;
import '@/App.css'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Body from '@/components/Body/Body';
import Side from '@/components/Sidebar/Sidebar';
import {SideBarProvider}  from '@/components/utils/ContextApi';
function App() {
  
return (
      <SideBarProvider>
        <Side/>
        <Header/>
        <Body/>
        <Footer/>
      </SideBarProvider>
  )
}

export default App

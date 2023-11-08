import './App.css'
import {Routes,Route} from "react-router-dom";
import All from "./pages/All";
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import Career from './pages/Career';
import CyberSecurity from './pages/CyberSecurity';


function App() {

  return (
    <div className='app'>
       <Routes>
        <Route exact path="/" element={<All/>}/>
        <Route exact path="/full/stack" element={<FullStack/>}/>
        <Route exact path="/data/science" element={<DataScience/>}/>
        <Route exact path="/cyber/security" element={<CyberSecurity/>}/>
        <Route exact path="/career" element={<Career/>}/>
       </Routes>
    </div>
  )
}

export default App

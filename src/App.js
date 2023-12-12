import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import STAPI from './Market/ST/STAPI'
import BCAPI from './Market/BC/BCAPI'
import CEAPI from './Market/CE/CEAPI'
import SHAPI from './Market/SH/SHAPI'
import SJAPI from './Market/SJ/SJAPI'
import Location from './Map/Location'
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import Dashboard from './Components/LoginSignup/Dashboard';
import './css/materialize.css'

function App() {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path='/Login' element={<Login />}></Route>	
      <Route path='/Dashboard' element={<Dashboard />}></Route>	
      <Route path="/" element={<CEAPI/>}/>
      <Route path="/BC" element={<BCAPI/>}/>
      <Route path="/ST" element={<STAPI/>}/>
      <Route path="/SH" element={<SHAPI/>}/>
      <Route path="/SJ" element={<SJAPI/>}/>
      <Route path="/Location" element={<Location/>}/>
    </Routes>
  );
}


export default App;
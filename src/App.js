import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import STAPI from './ST/STAPI'
import BCAPI from './BC/BCAPI'
import CEAPI from './CE/CEAPI'
import SHAPI from './SH/SHAPI'
import SJAPI from './SJ/SJAPI'
import Location from './Map/Location'
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />}></Route>
      <Route path='/Login' element={<Login />}></Route>	
      <Route path="/CE" element={<CEAPI/>}/>
      <Route path="/BC" element={<BCAPI/>}/>
      <Route path="/ST" element={<STAPI/>}/>
      <Route path="/SH" element={<SHAPI/>}/>
      <Route path="/SJ" element={<SJAPI/>}/>
      <Route path="/Location" element={<Location/>}/>
    </Routes>
  );
}


export default App;
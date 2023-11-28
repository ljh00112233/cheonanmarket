import React from "react";
import {Route, Routes} from "react-router-dom";
import STAPI from './ST/STAPI'
import BCAPI from './BC/BCAPI'
import CEAPI from './CE/CEAPI'
import SHAPI from './SH/SHAPI'
import SJAPI from './SJ/SJAPI'
import Location from './Map/Location'

function App() {
  return (
    <Routes>
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
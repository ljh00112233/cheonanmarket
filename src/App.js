import React, { Component } from 'react';
import { useNavigate } from "react-router-dom"
import STAPI from './ST/STAPI'
import BCAPI from './BC/BCAPI'
import CEAPI from './CE/CEAPI'
import SHAPI from './SH/SHAPI'
import SJAPI from './SJ/SJAPI'

class App extends Component {
  render() {
    return (
      <div>
        <CEAPI/>
        <STAPI />
        <BCAPI />
      </div>
    );
  }
}

export default App;
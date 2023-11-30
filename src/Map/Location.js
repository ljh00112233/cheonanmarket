import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import "../css/Mcss.css"
const { kakao } = window;

const Location=()=>{

  const location = useLocation();
	const la = location.state.la;
  const lo = location.state.lo;
  const name = location.state.name;
  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(la, lo),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition  = new kakao.maps.LatLng(la, lo); 
    
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);
  }, [])

  return (
    <div>
      <header>
          <Link to="/">중앙시장</Link>
          <Link to="/BC">병천시장</Link>
          <Link to="/SH">성환이화시장</Link>
          <Link to="/SJ">성정시장</Link>
          <Link to="/ST">역전시장</Link>
          <hr/>
      </header>
      <div className='text'>
        <h1>{name}</h1>
      </div>
      <div className='ComponentBox'>
        <p id="map" style={{width:"500px", height:"400px"}}></p>
      </div>
    </div>
  )
}

export default Location;
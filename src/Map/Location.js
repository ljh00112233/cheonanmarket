import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
const { kakao } = window;

const Location=()=>{

  const location = useLocation();
	const la = location.state.la;
  const lo = location.state.lo;
  const name = location.state.name;
  const img = location.state.img;
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
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li><Link to="/">중앙시장</Link></li>
            <li><Link to="/BC">병천시장</Link></li>
            <li><Link to="/SH">성환이화시장</Link></li>
            <li><Link to="/SJ">성정시장</Link></li>
            <li><Link to="/ST">역전시장</Link></li>
          </ul>
          <ul className="right">
            <Link to="/Signup">게시판</Link>
          </ul>
        </div>
      </nav>
      <div align="center">
        <div className='text'>
          <h1>{name}</h1>
        </div>
        <div className='ComponentBox'>
          <p id="map" style={{width:"500px", height:"400px"}}></p>
        </div>
        <img src={img}/>
      </div>
    </div>
  )
}

export default Location;
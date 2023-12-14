import React, { useEffect } from 'react'
const { kakao } = window;

const Location=(props)=>{
  const prop = props.state;
	const la = prop.la;
  const lo = prop.lo;
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
  }, []);
  
  return (
    <div>
        <div>
          <div id="map" style={{width:"200px", height:"200px"}}></div>
        </div>
    </div>
  );
}

export default Location;
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import DB from "../db/SHdb.json"
import 성환이화시장 from '../Market_img/성환이화시장.jpg';
import SHTable from "./SHTable";

function API() {
  const [state, setState] = useState({data:[]});
  const getMarket=()=>{
    const dbdata = DB.item;
    setState({
      data: dbdata,
    })
  };
  useEffect(() => {
    setTimeout(() => {getMarket()},100);
  },[]);
  const {data} = state;
  return(
    <div>
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li><Link to="/"><i class="material-icons">shopping_basket 중앙시장</i></Link></li>
            <li><Link to="/BC"><i class="material-icons">shopping_basket 병천시장</i></Link></li>
            <li><Link to="/SH"><i class="material-icons">shopping_basket 성환이화시장</i></Link></li>
            <li><Link to="/SJ"><i class="material-icons">shopping_basket 성정시장</i></Link></li>
            <li><Link to="/ST"><i class="material-icons">shopping_basket 역전시장</i></Link></li>
          </ul>
          <ul className="right">
            <Link to="/Signup"><i class="material-icons">event_note 게시판</i></Link>
          </ul>
        </div>
      </nav>
      <div align="center">
        <h1 className="green-text text-lighten-2">성환이화시장</h1>
      </div>
      <div className="row" align="center">
        <div className="col s6">
        <img src={성환이화시장} width='500px' height='300px'/>
        </div>
        <div className="col s5">
          <table class="highlight">
            <thead>
              <tr>
                <th>주소</th>
                <td>충남 천안시 서북구 성환읍 성환중앙로 50</td>
              </tr>
              <tr>
                <th>전화</th>
                <td>041-583-0290</td>
              </tr>
              <tr>
                <th>개설주기(장날) </th>
                <td>상설+매월 끝자리 1, 6일 마다 열리는 5일장</td>
              </tr>
              <tr>
                <th>교통</th>
                <td>1호선 성환역 1번출구 도보 9분</td>
              </tr>
              <tr>
                <th>주차</th>
                <td>가능</td>
              </tr>
              <tr>
                <th>먹거리</th>
                <td>순대국밥, 뻥튀기, 유과, 국수, 떡 등</td>
              </tr>
              <tr>
                <th>편의시설</th>
                <td>화장실, 고객휴게실</td>
              </tr>
              <tr>
                <th>주변관광</th>
                <td>성환4공원</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <SHTable data={data}/>
    </div>
  );  
}

export default API;
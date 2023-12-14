import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import DB from "../db/CEdb.json"
import 천안중앙시장 from '../Market_img/천안중앙시장.jpg';
import CETable from "./CETable";

function API() {
  const [state, setState] = useState({data:[]});
  const {data} = state;

  const getMarket=()=>{
    const data = DB.item;
    setState({
      data: data,
    })
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {getMarket()},100);
  },[]);
  
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
        <h1 className="green-text text-lighten-2">천안중앙시장</h1>
      </div>
      <div className="row" align="center">
        <div className="col s6">
        <img src={천안중앙시장} width='500px' height='300px'/>
        </div>
        <div className="col s5">
          <table class="highlight">
            <thead>
              <tr>
                <th>주소</th>
                <td>충남 천안시 동남구 사직로 7</td>
              </tr>
              <tr>
                <th>전화</th>
                <td>041-555-1136</td>
              </tr>
              <tr>
                <th>개설주기(장날) </th>
                <td>상설</td>
              </tr>
              <tr>
                <th>교통</th>
                <td>1호선 천안역 1번 출구 도보 11분, 남산중앙시장 정류장 도보 2분</td>
              </tr>
              <tr>
                <th>주차</th>
                <td>가능</td>
              </tr>
              <tr>
                <th>먹거리</th>
                <td>잔치국수, 꽈배기, 국밥, 순대, 닭강정, 번데기, 분식류 등</td>
              </tr>
              <tr>
                <th>편의시설</th>
                <td>화장실, 고객안내센터, 카트</td>
              </tr>
              <tr>
                <th>주변관광</th>
                <td>천안역지하쇼핑몰</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <CETable data={data}/>
    </div>
  );  
}

export default API;
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import DB from "../db/BCdb.json"
import 병천시장 from '../Market_img/병천시장.jpg';
import BCTable from './BCTable'

function BCAPI() {
  const [state, setState] = useState({data:[]});
  const getMarket = () => {
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
            <li><Link to="/"><i className="material-icons">shopping_basket 중앙시장</i></Link></li>
            <li><Link to="/BC"><i className="material-icons">shopping_basket 병천시장</i></Link></li>
            <li><Link to="/SH"><i className="material-icons">shopping_basket 성환이화시장</i></Link></li>
            <li><Link to="/SJ"><i className="material-icons">shopping_basket 성정시장</i></Link></li>
            <li><Link to="/ST"><i className="material-icons">shopping_basket 역전시장</i></Link></li>
          </ul>
          <ul className="right">
            <Link to="/Signup"><i className="material-icons">event_note 게시판</i></Link>
          </ul>
        </div>
      </nav>
      <div align="center">
        <h1 className="green-text text-lighten-2">병천시장</h1>
      </div>
      <div className="row" align="center">
        <div className="col s6">
        <img src={병천시장} width='500px' height='300px'/>
        </div>
        <div className="col s5">
          <table className="highlight">
            <thead>
              <tr>
                <th>주소</th>
                <td>충남 천안시 병천면 병천리 163-2번지</td>
              </tr>
              <tr>
                <th>전화</th>
                <td>041-564-1507</td>
              </tr>
              <tr>
                <th>개설주기(장날) </th>
                <td>상설+매월 끝자리 1, 6일 마다 열리는 5일장</td>
              </tr>
              <tr>
                <th>주차</th>
                <td>가능</td>
              </tr>
              <tr>
                <th>먹거리</th>
                <td>장터국밥, 장터국수, 꼬치, 떡, 뻥튀기 등</td>
              </tr>
              <tr>
                <th>편의시설</th>
                <td>화장실, 고객휴게실</td>
              </tr>
              <tr>
                <th>주변관광</th>
                <td>유관순열사유적</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <BCTable data={data}/>
    </div>
  );  
}

export default BCAPI;
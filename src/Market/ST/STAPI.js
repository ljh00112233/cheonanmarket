import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import DB from "../db/STdb.json"
import 역전시장 from '../Market_img/역전시장.jpg';
import STTable from "./STTable";
 
function STAPI() {
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
        <h1 className="green-text text-lighten-2">천안역전시장</h1>
      </div>
      <div className="row" align="center">
        <div className="col s6">
        <img src={역전시장} width='500px' height='300px'/>
        </div>
        <div className="col s5">
          <table className="highlight">
            <thead>
              <tr>
                <th>주소</th>
                <td>충남 천안시 동남구 공설시장1길 9</td>
              </tr>
              <tr>
                <th>전화</th>
                <td>041-522-9954</td>
              </tr>
              <tr>
                <th>개설주기(장날) </th>
                <td>상설</td>
              </tr>
              <tr>
                <th>주차</th>
                <td>가능</td>
              </tr>
              <tr>
                <th>먹거리</th>
                <td>꽈배기, 꼬치, 잔치국수, 순대국밥, 분식류 등</td>
              </tr>
              <tr>
                <th>편의시설</th>
                <td>화장실, 고객휴게실</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <STTable data={data}/>
    </div>
  );  
}

export default STAPI;
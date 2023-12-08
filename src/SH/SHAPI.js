import React, { useState, useEffect } from "react";
import "../css/Tcss.css"
import {Link} from "react-router-dom";
import DB from "../db/SHdb.json"
import 성환이화시장 from '../Market_img/성환이화시장.jpg';

function API() {
  const [state, setState] = useState({data:[]});
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const searching1 = (e) => {
    setSearch1(e.target.value);
  };
  const searching2 = (e) => {
    setSearch2(e.target.value);
  };
  const getMarket=()=>{
    const data = DB.item;
    setState({
      data: data,
    })
    console.log(data);
  }
  useEffect(() => {
    setTimeout(() => {getMarket()},100);
  },[]);
    const {data} = state;
    return(
      <div>
        <header>
          <Link to="/CE">중앙시장</Link>
          <Link to="/BC">병천시장</Link>
          <Link to="/SH">성환이화시장</Link>
          <Link to="/SJ">성정시장</Link>
          <Link to="/ST">역전시장</Link>
          <hr/>
        </header>
        <h1>성환이화시장</h1>
        <img src={성환이화시장} width='150px' height='150px'/>
        <hr/>  
        <span align="center">업종구분별검색 : <input type="text" onChange={searching1}></input></span>
        &nbsp;&nbsp;
        <span align="center">상호명별검색 : <input type="text" onChange={searching2}></input></span>
        <hr/>
        <table>
          <thead>
            <tr>
              <th>연번</th>
              <th>상호명</th>
              <th>운영시간</th>
              <th>업종구분</th>
              <th>도로명주소</th>
              <th>지번주소</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
          {data.filter((item)=>{
            if(search1 === ""){
              return item;
            }else if(item.tpbiz.includes(search1)){
              return item;
            }
          })
          .filter((item)=>{
            if(search2 === ""){
              return item;
            }else if(item.conm.includes(search2)){
              return item;
            }
          })
          .map(item => (
          <tr>
              <td>{item.number}</td>
              <td><Link state={{la:item.latitude, lo:item.longitude, name:item.conm}} to="/Location">{item.conm}</Link></td>
              <td>{item.hour}</td>
              <td>{item.tpbiz}</td>
              <td>{item.roadNmAddr}</td>
              <td>{item.lotnoAddr}</td>
              <td>{item.telno}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );  
}

export default API;
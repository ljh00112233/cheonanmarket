import React, { useState, useEffect } from "react";
import "../css/Tcss.css"
import {Link} from "react-router-dom";
import DB from "../db/CEdb.json"

function API() {
  const [state, setState] = useState({data:[]});
  const [search, setSearch] = useState("");
  const searching = (e) => {
    setSearch(e.target.value);
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
          <Link to="/">중앙시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/BC">병천시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/SH">성환이화시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/SJ">성정시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/ST">역전시장</Link>
          <hr/>
        </header>
        <h1>천안중앙시장</h1>  
        <p align="center">시장검색 : <input type="text" onChange={searching}></input></p>
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
            if(search === ""){
              return item;
            }else if(item.tpbiz.includes(search)){
              return item;
            }
          })
          .map(item => (
          <tr>
              <td>{item.number}</td>
              <td>{item.conm}</td>
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
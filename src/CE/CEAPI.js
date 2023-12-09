import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import DB from "../db/CEdb.json"
import 천안중앙시장 from '../Market_img/천안중앙시장.jpg';

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
          <h1 className="green-text text-lighten-2">천안중앙시장</h1>
          <img src={천안중앙시장} width='500px' height='300px'/>
        </div>
        <div className="row">
          <h4>시장찾기</h4>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="업종구분별검색" id="tpbiz" type="text" class="validate" onChange={searching1}/>
              </div>
              <div className="input-field col s6">
                <input placeholder="상호명별검색" id="conm" type="text" class="validate" onChange={searching2}/>
              </div>
            </div>
          </form>
        </div>
        <>상호명 클릭시 위치보기</>
        <table className="striped">
          <thead className="green lighten-2">
            <tr>
              <th>연번</th>
              <th>상호명</th>
              <th>운영시간</th>
              <th>업종구분</th>
              <th>도로명주소</th>
              <th>지번주소</th>
              <th>전화번호</th>
              <th>사진</th>
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
              <td><Link state={{la:item.latitude, lo:item.longitude, name:item.conm, img:item.img}} to="/Location"><a class="waves-effect waves-light btn">{item.conm}</a></Link></td>
              <td>{item.hour}</td>
              <td>{item.tpbiz}</td>
              <td>{item.roadNmAddr}</td>
              <td>{item.lotnoAddr}</td>
              <td>{item.telno}</td>
              <td><img src={item.img} width='150px' height='150px' /></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );  
}

export default API;
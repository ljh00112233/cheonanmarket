import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import DB from "../db/CEdb.json"
import 천안중앙시장 from '../Market_img/천안중앙시장.jpg';

function API() {
  const [state, setState] = useState({data:[]});
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
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

  const searching1 = (e) => {
    setSearch1(e.target.value);
  };

  const searching2 = (e) => {
    setSearch2(e.target.value);
  };
  
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
      <div className="row">
        <div className="col s10 offset-s1">
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
                  <td><Link state={{la:item.latitude, lo:item.longitude, name:item.conm, img:item.img}} to="/Location"><a class="waves-effect waves-light btn"><i class="material-icons">location_on {item.conm}</i></a></Link></td>
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
      </div>
    </div>
  );  
}

export default API;
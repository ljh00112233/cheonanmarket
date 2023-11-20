import React from "react";
import axios from "axios";
import Search from "./CESearch"
import "../css/Tcss.css"
import {Link} from "react-router-dom";
import DB from "../db/CEdb.json"
 
 
class API extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      page: "0",
    };
  }
  
 
  getMarket(){
    const data = DB.item;
    this.setState({
      data: data,
    })
    console.log(data);
  }
  componentDidMount(){
    this.getMarket();
  }
  render(){
    const {data} = this.state;
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
        <p align="center">시장검색 : <Search /> <button onClick={this.Handler}>검색</button></p>
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
          {data.map(item => (
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
    )
  }
}
export default API;
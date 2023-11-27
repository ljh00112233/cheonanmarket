import React from "react";
import axios from "axios";
import Search from "./SHSearch"
import "../css/Tcss.css"
import {Link} from "react-router-dom";
 
 
class API extends React.Component{
  state = {
    data:[],
  };
 
  getMarket(){
    const url = `https://apis.data.go.kr/4490000/shmarket/shmarketList?serviceKey=Xz56j4w4KJdgmRWwojz11Ut9YdMHO0teXRXmlNWh7EaC35ouuXGGL5Cj2L1ktToNjtGqvLKh5nJXZNMxkixofg%3D%3D&type=json&numOfRows=20`;
    console.log(url);
    axios.get(url).then((Response) =>{
      const data = Response.data.item;
      console.log(data);
      this.setState({
        data:data
      });
    });
  }
  componentDidMount(){
    this.getMarket();
  }
  render(){
    const {data} = this.state;
    return(
      <div>
        {/* <header>
          <Link to="/">중앙시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/BC">병천시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/SH">성환이화시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/SJ">성정시장</Link>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <Link to="/ST">역전시장</Link>
        </header> */}
        <header>
          <a href="/">중앙시장</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/BC">병천시장</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/SH">성환이화시장</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/SJ">성정시장</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="/ST">역전시장</a>
          <hr/>
        </header>
        <h1>천안성환이화시장</h1>
        <p align="center">시장검색 : <Search /> <button>검색</button></p>
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
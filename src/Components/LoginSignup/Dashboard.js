import React from "react";
import {Link} from "react-router-dom";

function Dashboard() {
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
        <h1 className="green-text text-lighten-2">게시판</h1>
      </div>
    </div>
  );  
}

export default Dashboard;
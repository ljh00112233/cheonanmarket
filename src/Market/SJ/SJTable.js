import React, { useState } from "react";
import Map from '../../Map/Location'

const SJTable = (props) => {
    const data = props.data;
    const [search1, setSearch1] = useState("");
    const [search2, setSearch2] = useState("");
    const searching1 = (e) => {
        setSearch1(e.target.value);
    };
    const searching2 = (e) => {
        setSearch2(e.target.value);
    };
    return (
        <div>
            <div className="row">
                <div className="col s10 offset-s1">
                    <div className="row">
                        <h4>시장찾기</h4>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="업종구분별검색" id="tpbiz" type="text" className="validate" onChange={searching1}/>
                                </div>
                                <div className="input-field col s6">
                                    <input placeholder="상호명별검색" id="conm" type="text" className="validate" onChange={searching2}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="striped">
                        <thead className="green lighten-2">
                            <tr>
                                <th>연번</th>
                                <th>상호명</th>
                                <th>운영시간</th>
                                <th>업종구분</th>
                                <th>도로명주소</th>
                                <th>전화번호</th>
                                <th>지도</th>
                                <th>사진</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter(item => {
                                if(search1 === ""){
                                    return item;
                                }else if(item.tpbiz.includes(search1)){
                                    return item;
                                }
                            })
                            .filter(item => {
                                if(search2 === ""){
                                    return item;
                                }else if(item.conm.includes(search2)){
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
                                    <td>{item.telno}</td>
                                    <td><Map state={{la:item.latitude, lo:item.longitude, name:item.conm, img:item.img}}></Map></td>
                                    <td><img src={item.img} width='150px' height='150px' /></td>
                                </tr>
                            ))}
                        </tbody>    
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SJTable;
import React from "react";
import img from "./jenna_mimoticon.png"

const Start = (props) => {

    return (
        <div className="container">
            {/* 휴대폰 화면에 맞게 박스에 넣어주려고 container만듦 */}
            <div className="outter">
                <img className="jenna-img" src={img} />
                <h1>나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?</h1>
                {/* app.js에서 이름 받아옴 */}
                <input className="text-box" type="text" placeholder="내 이름"/>
                <button className="btn">시작하기</button>
            </div>
        </div>
    );

}

export default Start;
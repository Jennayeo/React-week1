import React from "react";
import img from "./jenna_mimoticon.png";
import {useDispatch, useSelector} from "react-redux";
import {addUserName} from "./redux/modules/rank";

const Start = (props) => {
        const dispatch = useDispatch(); // dispatch쓸 준비
        const name = useSelector((state) => state.quiz.name);
        // 퀴즈안에 있는 name가져 올거니까 state.quiz.name
        const input_text = React.useRef(null); // 초기값 null
    return (
        <div className="container">
            {/* 휴대폰 화면에 맞게 박스에 넣어주려고 container만듦 */}
            <div className="outter">
                <img className="jenna-img" src={img} />
                <h1>나는 <span>{name}</span>에 대해 얼마나 알고 있을까?</h1>
                {/* app.js에서 이름 받아옴 */}
                <input ref={input_text} className="text-box" type="text" placeholder="내 이름"/>
                <button className="btn" onClick={() => {
                    dispatch(addUserName(input_text.current.value)); // 시작버튼 누르면 이름 저장 (quiz라는 상태값안에)
                    // dispatch 하고 괄호안에 할 액션(=이름 넣는 액션)
                    props.history.push("/quiz");
                }}>시작하기</button>
            </div>
        </div>
    );

}

export default Start;
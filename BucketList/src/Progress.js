import React from "react";
import styled from "styled-components";

import {useSelector} from "react-redux";

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);

    // 카운트변수 만들어서 완료된 일정 카운트해준다.
    let count = 0;
    // 맵돌려준다.
    bucket_list.map((l, idx) => {
        if(l.completed){
            // 만약 이 객체가 completed true라면
            count++;
            // 숫자 하나하나 늘려줘라
        }
    })

    return (
        <ProgressBar>
            <HighLight width={(count/bucket_list.length)*100 + "%"}/>
            <Dot/>
        </ProgressBar>
    );

}

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center; // 높이 정렬
    border-radius: 10px;
`;

const HighLight = styled.div`
    background: #673ab7;
    width: ${props => props.width};
    height: 20px;
    // 서서히 늘어나게
    transition: width 1s; // 어떤 속성이 변했을때 몇초 동안 그 변화를 일으킬거야
    border-radius: 10px;
`;

const Dot = styled.div`
    background: #fff;
    border: 5px solid #673ab7;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 0px 0px 0px -10px;
`;
export default Progress; 
import React from "react";
import styled from "styled-components";
import img from "./jenna_mimoticon.png";
import TinderCard from "react-tinder-card";

// import SwipeItem from "./SwipeItem";

const Quiz = (props) => {
    // 맵돌리니 이미지도 여러번 찍힘을 해결해줌
    const [num, setNum] = React.useState(0);
    // num 문제 하나하나(state)번호 저장
    // index 0부터 시작함 그래서 useState(0)

// 퀴즈 리스트 받아옴
    // const list = props.list;
    const onSwipe = (direction) => {
        // direction이 어느방향으로 swipe됐는지 알려줌
            setNum(num+1); // 다음문제로 넘어감
        console.log("You swiped: " + direction);
    };
    if (num > 3) {
        return <div>퀴즈 끝!</div>;
    }
    return (
        <QuizContainer>
            <p><span>{num+1}번 문제</span></p>
        {/* index는 0으로 시작하니 +1 */}
            {props.list.map((l, idx) => {
                if(num === idx) {
                    return ( <Question key={idx}>{l.question}</Question>);
                } // num이 배열의 idx와 똑같을때 question넘겨주기 // 리스트 하나들어가있는 question 반환
            })}

            <AnswerZone>
                <Answer>O</Answer>
                <Answer>X</Answer>
            </AnswerZone>

        {/* swipe할 영역 맵 돌려주기 */}
        {/* list 하나를 l이라고함 */}
        {props.list.map((l, idx) => {
            if(idx === num) {
                return(
                    // <SwipeItem key={idx} onSwipe={onSwipe}/>     
                    <DragItem key={idx}>
                        {/* 틴더카드 써보기 */}

                        <TinderCard onSwipe={onSwipe}>
                            <img src={img}/>
                        </TinderCard>
                    </DragItem>      
            );
        }
    })}
        </QuizContainer>
    );
};

const QuizContainer = styled.div`
text-align: center;
    & > p > span { 
        padding: 8px 16px;
        background-color: #fef5d4;
        border-radius: 30px;
    }
`;

const Question = styled.h1`
    font-size: 1.5em;
`;

const AnswerZone= styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    // position: absolute;
    min-height: 70vh;
    // top: 0;
    // left: 0;
    // z-index: 1;
`;

const Answer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10em;
    font-weight: 600;
    color: #dadafc77;
`;

const DragItem = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        background-color: #ffd6aa;
        border-radius: 500px;
    }
    & img{
        max-width: 150px;
    }
`;
export default Quiz;
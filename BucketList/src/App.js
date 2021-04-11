//순서
// 뷰 만들기 -> ref설정해서 텍스트 가져오기(input박스에서 입력한 것은 current.value) -> 

import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    // 밑에서 뷰 만든 후 여기로
    this.text = React.createRef();
    // 이후엔 밑에 return에서 불러줌(ref)
  }

  // 함수 생성
  addBucketList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;

    this.setState({list: [...list, new_item]})
    // 스프레드문법: 배열의 리스트 하나하나하나가 들어감 그리고 new_item이 배열에 새로 추가됨
    // this.state값은 변하지않고 배열이 새로 생성되는것임 -> 불변성 유지
  }

  componentDidMount(){
    console.log(this.text);
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title >내 버킷리스트</Title>
          <Line/>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
        </Container>
        <div>
          <Input>
            <input type="text" ref={this.text}/>
            {/* input에 ref연결 시킨 후 위로 가서 함수 생성 */}
            <button onClick={this.addBucketList}>추가하기</button>
            {/* 함수 생성 후 버튼에 연결 */}
          </Input>
        </div>

      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
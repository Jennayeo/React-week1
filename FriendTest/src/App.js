import React from 'react';
import './App.css';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Start from './Start';
import Quiz from "./Quiz";
import Score from "./Score";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      name: "Jenna",
      page: "quiz",
      list: [
        {question: "제나는 15살이다", answer: "0"},
        {question: "제나는 27살이다", answer: "0"},
        {question: "제나는 32살이다", answer: "0"},
        {question: "제나는 19살이다", answer: "0"}
      ],
      scoreMsg: "이 정도면 베프!"
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
      return (
      <div className="App">
        {/* 어떤 페이지를 보여줄지 조건 */}
        {this.state.page ==="quiz" && <Quiz list = {this.state.list}/>}
        {this.state.page ==="start" && <Start name={this.state.name} />}
        {this.state.page ==="score" && <Score scoreMsg={this.state.scoreMsg} name={this.state.name}/>}
        {/* 컴포넌트를 넣어줍니다. */}
        {/* start컴포넌트에 이름 넘겨주기 */}
        {/* <Start name={this.state.name}/> */}
        {/* <Quiz /> */}
        {/* <Score /> */}
      </div>
    );
  }
}

export default App;
import React from 'react';
import './App.css';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];

import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";

import Start from './Start';
import Quiz from "./Quiz";
import Score from "./Score";
import Message from "./Message";
import Ranking from "./Ranking";

// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출!
import { connect } from "react-redux";

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수
const mapStateToProps = (state) => ({
  ...state,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를  props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => ({
  load: () => {},
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      name: "Jenna",
      page: "message",
      // list: [
      //   {question: "제나는 15살이다", answer: "0"},
      //   {question: "제나는 27살이다", answer: "0"},
      //   {question: "제나는 32살이다", answer: "0"},
      //   {question: "제나는 19살이다", answer: "0"}
      // ],
      // scoreMsg: "이 정도면 베프!"
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
      return (
      <div className="App">
        {/* 어떤 페이지를 보여줄지 조건부 렌더링 */}
        {/* {this.state.page ==="quiz" && <Quiz list = {this.state.list}/>}
        {this.state.page ==="start" && <Start name={this.state.name} />}
        {this.state.page ==="score" && <Score scoreMsg={this.state.scoreMsg} name={this.state.name}/>}
        {this.state.page ==="message" && <Message name={this.state.name}/>} */}
        {/* 컴포넌트를 넣어줍니다. */}
        {/* start컴포넌트에 이름 넘겨주기 */}
        {/* <Start name={this.state.name}/> */}
        {/* <Quiz /> */}
        {/* <Score /> */}
        <Switch>
          <Route path="/" exact component={Start}/>
          <Route path="/quiz" exact component={Quiz}/>
          <Route path="/message" exact component={Message}/>
          <Route path="/score" component={Score} />
          <Route path="/ranking" exact component={Ranking}/>
        </Switch>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
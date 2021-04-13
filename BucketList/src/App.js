//순서
// 뷰 만들기 -> ref설정해서 텍스트 가져오기(input박스에서 입력한 것은 current.value) -> 

import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";

// props로 넘겨주기위해 (withRouter와 페어)
import {withRouter} from "react-router";
import {Route, Switch} from "react-router-dom";
import Detail from "./Detail";

// NotFound컴포넌트
import NotFound from "./NotFound";
import Progress from "./Progress";

import {connect} from "react-redux";
import {loadBucket, createBucket} from "./redux/modules/bucket"

// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list};
} //현재 스테이트값은 스토어에있는 이니셜스테이트 같은 상태값(데이터)

const mapDispatchToProps = (dispatch) => {
  return{
    load: () => {
      // load가져오려면 import먼저 필요
      dispatch(loadBucket());
    },
    create: (bucket) => {
      dispatch(createBucket(bucket));
    }
  };
} // 액션이 생긴 것을 감시하는 디스패치를 넘겨주는 함수

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    // 밑에서 뷰 만든 후 여기로
    this.text = React.createRef();
    // 이후엔 밑에 return에서 불러줌(ref)
  }

  // 함수 생성
  addBucketList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;
    this.props.create(new_item);

    // this.setState({list: [...list, new_item]})
    // 스프레드문법: 배열의 리스트 하나하나하나가 들어감 그리고 new_item이 배열에 새로 추가됨
    // this.state값은 변하지않고 배열이 새로 생성되는것임 -> 불변성 유지
  }

  componentDidMount(){
    console.log(this.props);
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress/>
          <Line />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
              <BucketList 
                bucket_list={this.props.bucket_list}
                history={this.props.history}/>)}
            />
            <Route path="/detail/:index" component={Detail}/>
            {/* <Route component={NotFound}/> */}
            {/* 뒤로가기 기능까지 추가해보기 */}
            <Route render={() => (<NotFound history = {this.props.history}/>)}/>
          </Switch>
        </Container>
        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
        <button onClick={() =>{
          window.scrollTo({top:0, left:0, behavior: "smooth"});
        }}>위로가기</button>
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

// withrouter적용
// connect로 묶어주기
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
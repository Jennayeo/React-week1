import React from "react";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class LifecycleEx extends React.Component {

// 생성자 함수
  constructor(props) {
    super(props);
    
    // state의 기본값 설정
    this.state = {
      cat_name: '나비',
    };

    console.log('in constructor!');
  }

  changeCatName = () => {
    // 다음 강의에서 배울, state 업데이트 하는 방법입니다!
    // 지금은 componentDidUpdate()를 보기 위해 쓰는 거니까, 처음보는 거라고 당황하지 말기!
    // 위에서 선언했던 cat_name을 바둑이로 바꿈
      this.setState({cat_name: '바둑이'});

      console.log('고양이 이름을 바꾼다!');
  }

  // Mount = 컴포넌트가 화면에 나타난다.
  // didMount = 화면에 마운트가 완료 되었다.
  // componentDidMount함수는 첫번째 렌더링 마친 후에만 딱 한 번 실행 됨
  // 두번째, 세번째 렌더링은 componenetDidUpdate에서
  componentDidMount(){
    console.log('in componentDidMount!');
  }

  // 아래 render안의 코드에서 확인
  componentDidUpdate(prevProps, prevState){
      console.log(prevProps, prevState);
      console.log('in componentDidUpdate!');
  }
    // 데이터 비교가 필요할때(현재뿐 아닌 이전 state or props도 보여줌)

// 컴포넌트가 제거될때 실행하는 함수
// 이벤트 제거 필요할때 여기서
  componentWillUnmount(){
      console.log('in componentWillUnmount!');
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  // state나 props를 꺼내 보여줌
  // 렌더 당시에는 데이터 수정 불가
  // 리턴해서 ui요소들 반환
  render() {

    console.log('in render!');

    return (
      <div>
          {/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있습니다. */}
        <h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1>
        <button onClick={this.changeCatName}>고양이 이름 바꾸기</button>
        {/* 버튼 누르면 change.CatName함수 호출 */}
      </div>
    );
  }
}

export default LifecycleEx;
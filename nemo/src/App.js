import React from "react";
import Nemo from "./Nemo";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 3,
    };
    this.div = React.createRef();
  }

  // 어떤 행동을 해줄건지 함수 생성
  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);

    e.target.style.backgroundColor = "#eee";
  }
  // 이벤트 리스너 등록
  componentDidMount(){
    this.div.current.addEventListener("mouseover", this.hoverEvent)
  }
 // 등록이 됐으면 해제도 해줘야함
  componentWillUnmount(){
    this.div.current.removeEventListener("mouseover", this.hoverEvent)
  }

  // EventListener사용할땐 아래 함수 필요없음
  // addNemo = () => {
  //   // 스테이트 고치기(중괄호 안에 수정하고싶은 state값 넣어줌)
  //   this.setState({count: this.state.count + 1});
  //   // 지금있는 state값에서 +1
  // }

  // removeNemo = () => {
  //   if(this.state.count > 0){
  //     this.setState({ count: this.state.count - 1 });
  //   } else {
  //     window.alert('더이상 네모가 없습니다!');
  //   }
  //   this.setState({count: this.state.count - 1});
  // }

  

  render() {
    // 어떤수의 길이만큼 배열을 반환해주는 배열의 내장함수 사용
    // const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    // console.log(nemo_count);
    return (
      // <div className="App">
      //   <Nemo/>
        
      // </div>
      // eventlistener
      <div className="App" ref={this.div}>
        <Nemo/>
      </div>
    );
  }
}
export default App;
import React from "react";
import Nemo from "./Nemo";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  addNemo = () => {
    // 스테이트 고치기(중괄호 안에 수정하고싶은 state값 넣어줌)
    this.setState({count: this.state.count + 1});
    // 지금있는 state값에서 +1
  }

  removeNemo = () => {
    if(this.state.count > 0){
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert('더이상 네모가 없습니다!');
    }
    this.setState({count: this.state.count - 1});
  }

  render() {
    // 어떤수의 길이만큼 배열을 반환해주는 배열의 내장함수 사용
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    console.log(nemo_count);
    return (
      <div className="App">
        <Nemo/>
        
      </div>
    );
  }
}
export default App;
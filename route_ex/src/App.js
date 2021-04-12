import React from "react";
import { render } from "react-dom";

import {withRouter} from "react-router";
import {Route, Link} from "react-router-dom";

import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(){
    console.log(this.props);
  }
  
  render() {
    return(
    <div className="App">
      <div >
        <Link to ="/">Home으로 가기</Link>
        <Link to ="cat/nabi">영희씨에게로 가기</Link>
        <Link to ="/dog"> 댕댕이에게 가기</Link>

        <button onClick={() => {
          this.props.history.push('/cat/nabi');
        }}>cat으로 가기</button>
        <button onClick={() => {
          this.props.history.goBack();
        }}>뒤로가기</button>
      </div>
    </div>
    )

  }
}

export default withRouter(App);
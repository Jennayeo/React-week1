import './App.css';
import styled, {keyframes} from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}
const move = keyframes`
  0% {
    top: 20px;
    opacity: 1;
  }

  30% {
    top: 50px;
    left: 20px
  }

  50% {
    top: 200px;
    opacity: 0;
    left: 50px;
  }

  80% {
    top: 150px;
    left: 20px;
  }

  100% {
    top: 20px;
    opacity: 1;
    background-color: yellow;
  }
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: green;
  border-radius: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${move} 2s 1s infinite;
  // 무한히 반복
`;


export default App;

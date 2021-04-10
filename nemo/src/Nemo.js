import React from 'react';

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    // 대괄호 첫번째는 state로 쓸 변수명
    // 두번째는 count라는 값을 바꿔줄 함수
    // useState 괄호안에는 초기값이 들어감
    console.log('in nemo')
    console.log(count);

    // 추가, 빼기 버튼 함수
    const addNemo = () => {
        setCount(count+1); 
    }
    const removeNemo = () => {
        // 삼항연산자
        setCount(count > 0? count-1:0);
    }

    const nemo_count = Array.from({length: count}, (v, i) => (i));
    return (
        <div className="App">
        {/* count:3으로 state지정 후 뷰 만들기 */}
        {nemo_count.map((num, idx) => {
          return (
            // 리액트 요소 반환
            <div
              key = {idx}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#eee",
                margin: "10px",
              }}
            >
              nemo
            </div>
          );
        })}
        <button onClick={addNemo}>
          하나 추가
        </button>
        <button onClick={removeNemo}>
          하나 빼기
        </button>
      </div>
    );
  }


export default Nemo;
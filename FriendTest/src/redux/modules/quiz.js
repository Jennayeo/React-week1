// 액션 만들기
const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER"; // 대답 초기화

// 이니셜스테이트
const initialState = {
    name: "Jenna",
    score_texts: {
        60: "우리 여전히 친구에요ㅠㅠ?",
        80: "오 우리 꽤 친한데요?",
        100: "우리 완전 베프다!!"
    },
    answers: [],
    quiz: [
        {question: "제나는 15살이다", answer: "X"},
        {question: "제나는 27살이다", answer: "0"},
        {question: "제나는 32살이다", answer: "X"},
        {question: "제나는 19살이다", answer: "X"}
      ],
}

// 액션 크리에이터
export const getQuiz = (quiz_list) => {
    return { type: RESET_ANSWER };
};

export const addAnswer = (answer) => {
    return { type: ADD_ANSWER, answer };
  };
  
  export const resetAnswer = () => {
    return { type: RESET_ANSWER };
  }

// 리듀서
export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        case "quiz/GET_QUIZ": {
            // 퀴즈 리스트
            return {...state, quiz: action.quiz_list};
        }
        
        case "quiz/ADD_ANSWER": {
            return {...state, answers: [...state.answers, action.answer]};
            // o, x, o 배열의 맽끝에 추가 (맞았는지 틀렸는지)
        }

        case "quiz/RESET_ANSWER": {
            return {...state, answers: []};
        } // 리셋이니까 앤서 텅 비워두기

        default:
            return state;
    }
}
// // 유저 이름을 바꾼다
// const ADD_USER_NAME = "rank/ADD_USER_NAME";
// // 유저 메세지를 바꾼다
// const ADD_USER_MESSAGE = "rank/ADD_USER_MESSAGE";
// //랭킹정보를 추가한다
// const ADD_RANK = "rank/ADD_RANK";
// //랭킹정보를 가져온다
// const GET_RANK = "rank/GET_RANK";

// const initialState = {
//     name: "Jenna",
//     score_texts: {
//         60: "우리 여전히 친구에요ㅠㅠ?",
//         80: "오 우리 꽤 친한데요?",
//         100: "우리 완전 베프다!!"
//     },
//     answers: [],
//     list: [
//         {question: "제나는 15살이다", answer: "0"},
//         {question: "제나는 27살이다", answer: "0"},
//         {question: "제나는 32살이다", answer: "0"},
//         {question: "제나는 19살이다", answer: "0"}
//       ],
// }

// // action creators
// export const addUserName = (user_name) => {
//     return { type: ADD_USER_NAME, user_name };
// };

// export const addUserMessage = (user_message) => {
//     return { type: ADD_USER_MESSAGE, user_message };
// };

// export const addRank = (rank_info) => {
//     return { type: ADD_RANK, rank_info };
// };

// export const getRank = (rank_list) => {
//     return { type: GET_RANK, rank_list };
// };

// // 리듀서
// export default function reducer(state = initialState, action = {}) {
//     switch (action.type) {
//         case "rank/ADD_USER_NAME": {
//             return { ...state, user_name: action.user_name };
//         }

//         case "rank/ADD_USER_MESSAGE": {
//             return { ...state, user_message: action.user_message };
//         }

//         case "rank/ADD_RANK": {
//             return { ...state, ranking: [...state.ranking, action.rank_info] };
//         }

//         case "rank/GET_RANK": {
//             return { ...state, ranking: action.rank_list };
//         }

//         default:
//             return state;
//     }
// }


// Actions

// 유저 이름을 바꾼다
const ADD_USER_NAME = "rank/ADD_USER_NAME";
// 유저 메시지를 바꾼다
const ADD_USER_MESSAGE = "rank/ADD_USER_MESSAGE";
// 랭킹정보를 추가한다
const ADD_RANK = "rank/ADD_RANK";
// 랭킹정보를 가져온다
const GET_RANK = "rank/GET_RANK";

const initialState = {
  user_name: "Jenna",
  user_message: "",
  user_score: "",
  score_text: {
    60: "우리 여전히 친구에요ㅠㅠ?",
    80: "오 우리 꽤 친한데요?",
    100: "우리 완전 베프다!!"
  },
  ranking: [
    { score: 40, name: "르탄이", message: "안녕 Jenna!" },
    
  ],
};

// Action Creators
export const addUserName = (user_name) => {
  return { type: ADD_USER_NAME, user_name };
};

export const addUserMessage = (user_message) => {
  return { type: ADD_USER_MESSAGE, user_message };
};

export const addRank = (rank_info) => {
  return { type: ADD_RANK, rank_info };
};

export const getRank = (rank_list) => {
  return { type: GET_RANK, rank_list };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "rank/ADD_USER_NAME": {
      return { ...state, user_name: action.user_name };
    }

    case "rank/ADD_USER_MESSAGE": {
      return { ...state, user_message: action.user_message };
    }

    case "rank/ADD_RANK": {
      return { ...state, ranking: [...state.ranking, action.rank_info] };
    }

    case "rank/GET_RANK": {
      return { ...state, ranking: action.rank_list };
    }

    default:
      return state;
  }
}

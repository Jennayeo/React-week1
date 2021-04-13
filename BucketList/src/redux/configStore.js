import {createStore, combineReducers, applyMiddleware} from "redux";
import bucket from "./modules/bucket";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

// 미들웨어 추가
const middlewares = [thunk];

// 미들웨어 스토어에 적용
const enhancer = applyMiddleware(...middlewares);
// 미들웨어 하나하나 쓰니 스프레드문법

// 단일스토어(한 프로젝트엔 한 스토어, 하나의 리듀서)
// 컴바인리듀서를 사용해 리듀서를 합쳐줌(현재 프로젝트엔 이미 하나뿐이지만 그냥 해봄)
// 여러개있을땐 bucket, a, b, c, ...
const rootReducer = combineReducers({bucket});

// 이제 스토어에 리듀서 넣어줌
const store = createStore(rootReducer, enhancer);
// 스토어에 미들웨어 넣어준다. enhancer만 추가해주면 끝!

export default store;
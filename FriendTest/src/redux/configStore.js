import { createStore, combineReducers} from "redux";
import quiz from "./modules/quiz";
import rank from "./modules/rank";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

// 퀴즈, 랭크 리듀서 두개라서 컴바인해줌
const rootReducer = combineReducers({ quiz, rank });
const store = createStore(rootReducer);

export default store;
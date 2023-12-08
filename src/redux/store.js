import {counterReducer} from "./counter/reducer";
import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {cashReducer} from "./cash/reducer";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  cashReducer,
  counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
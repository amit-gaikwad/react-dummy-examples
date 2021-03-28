import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./CounterReducer";
import { userReducer } from "./userReducers";
const rootReducer = combineReducers({
  counterReducer,
  userReducer,
});
const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

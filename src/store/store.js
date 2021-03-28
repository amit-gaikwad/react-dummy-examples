import { createStore, combineReducers } from "redux";
//import thunk from "redux-thunk";
import { counterReducer } from "./CounterReducer";

const rootReducer = combineReducers({
  counterReducer,
});

export const store = createStore(rootReducer);

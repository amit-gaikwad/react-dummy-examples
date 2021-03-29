import { CounterReducer } from "../Reducers/CounterReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ CounterReducer });

export const myStore = createStore(rootReducer);

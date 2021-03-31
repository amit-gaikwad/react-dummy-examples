import { CounterReducer } from "../Reducers/CounterReducer";
import { EmployeeReducer } from "../Reducers/EmployeeReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ CounterReducer, EmployeeReducer });

export const myStore = createStore(rootReducer);

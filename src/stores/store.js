import { CounterReducer } from "../Reducers/CounterReducer";
import { EmployeeReducer } from "../Reducers/EmployeeReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const rootReducer = combineReducers({ CounterReducer, EmployeeReducer });

export const myStore = createStore(rootReducer, applyMiddleware(logger));

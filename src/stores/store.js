import { CounterReducer } from "../Reducers/CounterReducer";
import { EmployeeReducer } from "../Reducers/EmployeeReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ CounterReducer, EmployeeReducer });

const middlewares = [logger, thunk];

export const myStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

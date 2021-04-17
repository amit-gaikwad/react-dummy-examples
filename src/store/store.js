import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { UserReducer } from "../Reducers/UserReducer";

const rootReducer = combineReducers({ UserReducer });

const middlewares = [logger, thunk];

export const myStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

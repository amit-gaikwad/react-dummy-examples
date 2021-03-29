import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
} from "./ActionTypes";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const setCounter = (value) => {
  return {
    type: SET_COUNTER,
    value: value,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const restCounter = () => {
  return {
    type: RESET_COUNTER,
    value: 0,
  };
};

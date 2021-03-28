import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
} from "./ActionTypes";

export const increamentCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
  };
};

export const setCounter = (value) => {
  return {
    type: SET_COUNTER,
    value: value,
  };
};

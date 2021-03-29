import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  SET_COUNTER,
} from "../Actions/ActionTypes";

const InitialValues = {
  counter: 0,
};

export const CounterReducer = (state = InitialValues, action) => {
  //   if (action.type === INCREMENT_COUNTER) {
  //     state.counter = state.counter + 1;
  //   } else if (action.type === DECREMENT_COUNTER) {
  //     state.counter = state.counter - 1;
  //   } else if (action.type === RESET_COUNTER) {
  //     state.counter = action.value;
  //   } else if (action.type === SET_COUNTER) {
  //     state.counter = action.value;
  //   }
  //   return { ...state };

  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case RESET_COUNTER:
      return { ...state, counter: action.value };
    case SET_COUNTER:
      return { ...state, counter: action.value };
    default:
      return state;
  }
};

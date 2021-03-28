import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_COUNTER,
  RESET_COUNTER,
} from "../Actions/ActionTypes";

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { counter: state.counter - 1 };
    case RESET_COUNTER:
      return { counter: initialState.counter };
    case SET_COUNTER:
      return { counter: action.value };
    default:
      return state;
  }
};

// import {
//   FETCH_RESOURCES_BY_NAMESPACE_SUCCESS,
//   FETCH_RESOURCES_BY_NAMESPACE_ERROR,
//   FETCH_RESOURCES_BY_NAMESPACE_LOADING,
// } from "../Actions/types";

// const initialState = {
//   loading: false,
//   error: null,
//   data: [],
// };

// export const resource = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_RESOURCES_BY_NAMESPACE_SUCCESS:
//       return {
//         ...initialState,
//         data: action.payload,
//       };

//     case FETCH_RESOURCES_BY_NAMESPACE_LOADING:
//       return {
//         ...initialState,
//         loading: true,
//       };

//     case FETCH_RESOURCES_BY_NAMESPACE_ERROR:
//       return {
//         ...initialState,
//         error: action.error,
//       };

//     default:
//       return state;
//   }
// };

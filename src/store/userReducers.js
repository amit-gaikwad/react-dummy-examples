import { SET_ALL_USERS } from "../Actions/ActionTypes";

const initialState = {
  users: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        users: action.value,
      };
    default:
      return state;
  }
};

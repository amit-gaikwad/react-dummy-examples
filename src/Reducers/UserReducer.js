import { SET_ALL_USERS, SET_CURRENT_USER } from "../Actions/ActionTypes";

const initialState = {
  user: {},
  allUsers: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.value };
    case SET_ALL_USERS:
      return { ...state, allUsers: action.value };
    default:
      return state;
  }
};

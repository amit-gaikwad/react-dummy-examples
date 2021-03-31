import { ADD_EMPLOYEE } from "../Actions/ActionTypes";

const InitialState = {
  employees: [],
};

export const EmployeeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      //   const odlEmployees = [...state.employees];
      //   odlEmployees.push(action.value);
      return { ...state, employees: [...state.employees, action.value] };
    default:
      return state;
  }
};

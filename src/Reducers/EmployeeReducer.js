/* eslint-disable no-case-declarations */
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_ALL_EMPLOYEES,
} from "../Actions/ActionTypes";

const InitialState = {
  employees: [],
};

export const EmployeeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.value] };
    case DELETE_EMPLOYEE:
      const newEmployees = state.employees.filter((e) => {
        return e.emp_email !== action.value;
      });
      return { ...state, employees: [...newEmployees] };
    case SET_ALL_EMPLOYEES:
      return { ...state, employees: [...action.value] };
    default:
      return state;
  }
};

// var a={
//  employess: [];
// }

// a=>1000
// employee =>2000

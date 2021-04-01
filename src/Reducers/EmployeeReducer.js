/* eslint-disable no-case-declarations */
import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../Actions/ActionTypes";

const InitialState = {
  employees: [],
};

export const EmployeeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.value] };
    case DELETE_EMPLOYEE:
      // const index = state.employees.findIndex((e) => {
      //   return e.emp_email === action.value;
      // });
      // if (index > -1) {
      //   state.employees.splice(index, 1);
      // }
      // return { ...state, employees: [...state.employees] };

      const newEmployees = state.employees.filter((e) => {
        return e.emp_email !== action.value;
      });
      return { ...state, employees: [...newEmployees] };

    default:
      return state;
  }
};

// var a={
//  employess: [];
// }

// a=>1000
// employee =>2000

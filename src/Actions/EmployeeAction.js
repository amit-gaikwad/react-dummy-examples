import { ADD_EMPLOYEE } from "./ActionTypes";

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    value: employee,
  };
};

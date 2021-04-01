import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "./ActionTypes";

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    value: employee,
  };
};

export const deleteEmployee = (emp_email) => {
  return {
    type: DELETE_EMPLOYEE,
    value: emp_email,
  };
};

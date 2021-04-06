import axios from "axios";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_ALL_EMPLOYEES,
} from "./ActionTypes";

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

export const setAllEmployees = (employees) => {
  return {
    type: SET_ALL_EMPLOYEES,
    value: employees,
  };
};

export const getAllEmployeesData = () => {
  return (dispatch) => {
    axios
      .get("http://demo9303971.mockable.io/employee")
      .then((response) => {
        // console.log("data from server>>", response);
        // this.setState({ employees: response.data });
        // setAllEmployees(response.data);
        dispatch(setAllEmployees(response.data));
      })
      .catch((error) => {
        console.log("error in getting data from server", error);
      });
  };
};

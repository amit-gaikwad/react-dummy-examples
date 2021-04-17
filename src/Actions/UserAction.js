import axios from "axios";
import { SET_ALL_USERS, SET_CURRENT_USER } from "./ActionTypes";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    value: user,
  };
}

export const setAllUser = (users) => {
  return {
    type: SET_ALL_USERS,
    value: users,
  };
};

export function login(data) {
  return () => {
    axios.post("http://localhost:8080/v1/auth/login", data).then(() => {
      alert("successfully created new user");
    });
  };
}

export function createUser(data) {
  return (dispatch) => {
    axios.post("http://localhost:8080/v1/user", data).then((res) => {
      dispatch(setCurrentUser(res.data.user));
    });
  };
}

export function getAllUser() {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/v1/user", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDdhYWI1ODUzZDAwMzM4NTRiNmFhMmQiLCJpYXQiOjE2MTg2NTc4NjIsImV4cCI6MTYxODY1OTY2Mn0.EtVMCM4maOZSY-qecwuNL4yvDJRg6AtJB5CouGLYCH4",
        },
      })
      .then((res) => {
        dispatch(setAllUser(res.data));
      });
  };
}

import axios from "axios";
import { SET_ALL_USERS } from "./ActionTypes";

export const setAllUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    value: users,
  };
};

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/v1/user", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDNkMmQxY2I3ZGJmODYyZWM0NGQyZTMiLCJpYXQiOjE2MTY5MzEwMzIsImV4cCI6MTYxNjkzMjgzMn0.7KsUYdNcUKcErHc5YDjpKDWjXdqUqSEia44H8Vvm09w",
        },
      })
      .then((res) => {
        dispatch(setAllUsers(res.data));
      });
  };
};

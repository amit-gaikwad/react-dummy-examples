import React, { Component } from "react";
import axios from "axios";

export class APICallsComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("http://demo9303971.mockable.io/employee1")
      .then((response) => {
        console.log("data from server>>", response);
      })
      .catch((error) => {
        console.log("error in getting data from server", error);
      });
  }
  render() {
    return <div></div>;
  }
}

import React, { Component } from "react";
import axios from "axios";

export class APICallsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {
    axios
      .get("http://demo9303971.mockable.io/employee")
      .then((response) => {
        console.log("data from server>>", response);
        this.setState({ employees: response.data });
      })
      .catch((error) => {
        console.log("error in getting data from server", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.employees.map((e) => {
          return <div key={e.id}>{e.name}</div>;
        })}
      </div>
    );
  }
}

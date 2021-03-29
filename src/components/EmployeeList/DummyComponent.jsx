import React, { Component } from "react";

export class DummyComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props in Dummy COmponent", this.props);
    return <div>Dummy </div>;
  }
}

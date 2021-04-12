import { Col, Input, Row } from "antd";
import React, { Component } from "react";

export class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "" };
  }
  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          Enter Country :
          <Input
            value={this.state.country}
            onChange={this.handleCountryChange.bind(this)}
          ></Input>
        </Col>
      </Row>
    );
  }
}

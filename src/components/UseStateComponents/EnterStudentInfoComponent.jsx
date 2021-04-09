import { Col, Input, Row } from "antd";
import React, { Component } from "react";

export class EnterStudentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "John", mobile: "" };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleMobileChange(event) {
    this.setState({ mobile: event.target.value });
  }
  render() {
    return (
      <Row>
        <Col span={24}>Student Details </Col>
        <Col span={24}>
          Enter Name :
          <Input
            onChange={this.handleNameChange.bind(this)}
            value={this.state.name}
          ></Input>
        </Col>
        <Col span={24}>
          Enter Mobile :{" "}
          <Input
            onChange={this.handleMobileChange.bind(this)}
            value={this.state.mobile}
          ></Input>
        </Col>

        <Col span={24}>Info</Col>
        <Col span={24}>Name : {this.state.name}</Col>
        <Col span={24}>Mobile : {this.state.mobile}</Col>
      </Row>
    );
  }
}

/**
 * name
 * mobile
 * display on next line
 */

import { Col, Row } from "antd";
import React from "react";
import { RegistrationDetailsComponent } from "./RegistrationDetailsComponent";

export class EnterRegistrationDetailsComponent extends React.Component {
  constructor() {
    super();
    this.state = { reg: 12, name: "John" };
  }
  handleRegChange(event) {
    this.setState({ reg: Number(event.target.value) });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <Row>
        <Col span={24}>Enter Registration Number</Col>
        <Col span={24}>
          <input
            onChange={this.handleRegChange.bind(this)}
            value={this.state.reg}
          />
        </Col>
        <Col span={24}>
          Enter Name:
          <input
            //onKeyUp={this.handleNameChange.bind(this)}
            onChange={this.handleNameChange.bind(this)}
            value={this.state.name}
          />
        </Col>
        <Col span={24}>Reg Number :{this.state.reg}</Col>
        <Col>
          <RegistrationDetailsComponent
            regNumber={this.state.reg}
            myName={this.state.name}
            myArr={[10, 20]}
          ></RegistrationDetailsComponent>
        </Col>
      </Row>
    );
  }
}

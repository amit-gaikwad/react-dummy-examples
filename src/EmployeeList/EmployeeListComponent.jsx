import { Col, Row } from "antd";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { employees } from "../Utils/EmployeeData";
import { DummyComponent } from "./DummyComponent";

export class EmployeeListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employees,
    };
  }

  handleEmployeeClick(e) {
    this.props.history.push("/employee/" + e.id);
    //console.log("you clicked", this, e);
  }
  render() {
    console.log("props in Employee list component", this.props);
    return (
      <Row>
        <Col span={24}>Employee List</Col>
        {this.state.employees.map((emp) => {
          return (
            <Col
              span={24}
              key={emp.id}
              onClick={() => {
                this.handleEmployeeClick(emp);
              }}
            >
              {emp.id}
            </Col>
          );
        })}
        <DummyComponent history={this.props.history}></DummyComponent>
      </Row>
    );
  }
}

EmployeeListComponent.propTypes = {
  history: PropTypes.object.isRequired,
};

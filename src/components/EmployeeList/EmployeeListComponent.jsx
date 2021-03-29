import { Col, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { employees } from "../../Utils/EmployeeData";
import { DummyComponent } from "./DummyComponent";

export function EmployeeListComponent() {
  const history = useHistory();

  function handleEmployeeClick(e) {
    //props.history.push("/employee/" + e.id);
    history.push("/employee/" + e.id);
  }

  return (
    <Row>
      <Col span={24}>Employee List</Col>
      {employees.map((emp) => {
        return (
          <Col
            span={24}
            key={emp.id}
            onClick={() => {
              handleEmployeeClick(emp);
            }}
          >
            {emp.id} {emp.name}
          </Col>
        );
      })}
      <DummyComponent></DummyComponent>
    </Row>
  );
}

EmployeeListComponent.propTypes = {
  history: PropTypes.object.isRequired,
};

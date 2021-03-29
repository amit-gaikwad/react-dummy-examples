import { Col, Row } from "antd";
import React from "react";
import { employees } from "../../Utils/EmployeeData";
import PropTypes from "prop-types";
import { useParams, useLocation } from "react-router-dom";

export function EmployeeDetailsComponent(props) {
  const myParams = useParams();
  const myLocation = useLocation();
  console.log("myParams", myParams, props);
  console.log("myLocation >>", myLocation);
  function renderEmployeeDetails() {
    const emp = employees.find((e) => {
      return e.id == myParams.myEmployeeId;
    });
    return (
      <Col span={24}>
        <Col>Name :{emp.name}</Col>
        <Col>Salary :{emp.salary}</Col>
        <Col>Email :{emp.email}</Col>
      </Col>
    );
  }
  return (
    <Row>
      <Col>Employee Details</Col>
      {renderEmployeeDetails()}
    </Row>
  );
}

EmployeeDetailsComponent.propTypes = {
  match: PropTypes.object.isRequired,
};

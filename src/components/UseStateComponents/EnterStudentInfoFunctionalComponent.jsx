import { Col, Input, Row } from "antd";
import { useState } from "react";

export function EnterStudentInfoFunctionalCOmponent() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("9999999");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  return (
    <Row>
      <Col span={24}>Student Details </Col>
      <Col span={24}>
        Enter Name :<Input onChange={handleNameChange} value={name}></Input>
      </Col>
      <Col span={24}>
        Enter Mobile :{" "}
        <Input onChange={handleMobileChange} value={mobile}></Input>
      </Col>

      <Col span={24}>Info</Col>
      <Col span={24}>Name : {name}</Col>
      <Col span={24}>Mobile : {mobile}</Col>
    </Row>
  );
}

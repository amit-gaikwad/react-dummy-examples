import { Col, Input, Row } from "antd";
import React, { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export function ParentComponent() {
  const [roll, setRoll] = useState(0);
  const [sName, setSName] = useState("");

  const handleRollChange = (event) => {
    setRoll(Number(event.target.value));
  };

  const handleNameChange = (event) => {
    setSName(event.target.value);
  };

  return (
    <Row>
      <Col span={24}>
        Enter Roll: <Input onChange={handleRollChange} value={roll}></Input>
      </Col>
      <Col span={24}>
        Enter Name: <Input onChange={handleNameChange} value={sName}></Input>
      </Col>
      <Col span={24}>
        <ChildComponent roll={roll} name={sName}></ChildComponent>
      </Col>
    </Row>
  );
}

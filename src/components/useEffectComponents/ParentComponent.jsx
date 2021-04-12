import { Button, Col, Input, Row } from "antd";
import React, { useRef, useState } from "react";
//import { ChildComponent } from "./ChildComponent";
import { ClassComponentDemo } from "./ClassComponentDemo";

export function ParentComponent() {
  const [roll, setRoll] = useState(0);
  const [sName, setSName] = useState("");
  const childRef = useRef();
  const RollRef = useRef();

  const handleRollChange = (event) => {
    setRoll(Number(event.target.value));
  };

  const handleNameChange = (event) => {
    setSName(event.target.value);
  };

  const handleCheckClick = () => {
    console.log("childRef >>", childRef);
  };

  return (
    <Row>
      <Col span={24}>
        Enter Roll:{" "}
        <Input onChange={handleRollChange} value={roll} ref={RollRef}></Input>
      </Col>
      <Col span={24}>
        Enter Name: <Input onChange={handleNameChange} value={sName}></Input>
      </Col>
      <Col span={24}>
        {/* <ChildComponent
          ref={childRef}
          roll={roll}
          name={sName}
        ></ChildComponent> */}
        <ClassComponentDemo></ClassComponentDemo>
      </Col>
      <Col span={24}>
        <Button onClick={handleCheckClick}>Check Child Ref Data</Button>
      </Col>
    </Row>
  );
}

import { Col, Row } from "antd";
import { ChildComponentUseContext } from "./ChildComponent";

export const ParentComponentUseContext = () => {
  return (
    <Row>
      <Col span={24}>Parent COmponent</Col>
      <Col span={24}>
        <ChildComponentUseContext name="John"></ChildComponentUseContext>
      </Col>
    </Row>
  );
};

import { Col, Row } from "antd";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export const ChildComponentUseContext = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <Row style={{ background: theme.background, color: theme.foreground }}>
      <Col span={24}>Child Component using use context</Col>
      <Col span={24}>Parent Data :{props.name}</Col>
    </Row>
  );
};

ChildComponentUseContext.propTypes = {
  name: PropTypes.string.isRequired,
};

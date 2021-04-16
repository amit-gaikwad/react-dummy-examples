import { Col, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";
export class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorOccured: false };
  }

  static getDerivedStateFromError(error) {
    console.log("my error >>>", error);
    return { errorOccured: true };
  }

  componentDidCatch(err) {
    // if (err) {
    //   this.setState({ errorOccured: true });
    // }
    console.log("my error 2", err);
  }

  render() {
    console.log("props in error component>>", this.props);
    if (this.state.errorOccured) {
      return (
        <Row>
          <Col span={24}>Something Went wrong</Col>
          <Col span={24}>
            <a href="/home">go to home</a>
          </Col>
        </Row>
      );
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundaryComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

{
  /* <ErrorBoundaryComponent>
  <Component2></Component2>
</ErrorBoundaryComponent>; */
}

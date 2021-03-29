import { Button, Col, Input, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";

export class FlatInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fno: 2 };
  }

  handleFlatNoChange(event) {
    this.setState({ fno: Number(event.target.value) });
  }

  handleSearchClick() {
    this.props.sendDataToParent(this.state.fno);
    console.log("you have searched", this.state.fno);
  }

  render() {
    console.log("props", this.props);
    return (
      <Row>
        <Col span={24}> Child Component</Col>
        <Col span={12}>Enter Flat no</Col>
        <Col span={12}>
          <Input
            value={this.state.fno}
            onChange={this.handleFlatNoChange.bind(this)}
          ></Input>
        </Col>
        <Col span={24}>
          <Button onClick={this.handleSearchClick.bind(this)}> Search</Button>
        </Col>
      </Row>
    );
  }
}

FlatInputComponent.propTypes = {
  sendDataToParent: PropTypes.function,
};

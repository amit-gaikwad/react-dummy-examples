import { Col, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";

export class RegistrationDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.reg = 10;
  }

  renderDetails() {
    // if (this.reg == 12) {
    //   return "Pune";
    // }
    // if (this.reg == 13) {
    //   return "Solapur";
    // }
    // if (this.reg == 14) {
    //   return "Pimpri";
    // }

    switch (this.props.regNumber) {
      case 12:
        return "Pune";
      case 13:
        return "Solapur";
      case 14:
        return "Pimpri";
      case 10:
        return "Sangli";
    }
  }

  render() {
    // this.props.myArr.push(55);
    console.log("this.props.myArr", this.props.myArr);
    console.log("Props of this component>>", this.props, this.props.regNumber);
    return (
      <Row style={{ width: "100%" }}>
        <Col span={24}>Registration Details</Col>
        <Col span={24}> {this.renderDetails()}</Col>
        <Col> Data from Parent :{this.props.myName}</Col>
        {/* {this.reg === 12
          ? "Pune"
          : this.reg === 13
          ? "Solapur"
          : this.reg === 14
          ? "Pimpri"
          : null} */}
      </Row>
    );
  }
}

RegistrationDetailsComponent.propTypes = {
  regNumber: PropTypes.number.isRequired,
  myName: PropTypes.string,
  myArr: PropTypes.array,
};

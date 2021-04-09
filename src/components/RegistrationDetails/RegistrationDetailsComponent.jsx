import { Col, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";

export class RegistrationDetailsComponent extends React.Component {
  constructor(props) {
    console.log("constructor called>>");
    super(props);
    this.reg = 10;
    this.state = { city: "Pune" };
  }

  static getDerivedStateFromProps(props, state) {
    // this method is used when you want to setstate using new props
    //it should return new state as per props
    console.log("getDerivedStateFromProps called>>", props, state);
    let newCity = "";
    if (props.regNumber == 12) {
      newCity = "Pune";
    }
    if (props.regNumber == 13) {
      newCity = "Solapur";
    }
    if (props.regNumber == 14) {
      newCity = "Pimpri";
    }
    if (props.regNumber == 100) {
      newCity = null;
    }
    return {
      city: newCity,
    };
  }

  componentDidMount() {
    //api call
    //subscribe to events
    console.log("componentDidMount called>>");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("current props>>", this.props, this.state);
    console.log("next props>>", nextProps, nextState);

    console.log("shouldComponentUpdate called>>");
    // if (this.props.regNumber === 12 && nextProps.regNumber === 1) {
    //   return false;
    // } else {
    //   return true;
    // }

    if (nextProps.regNumber >= 10) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("getSnapshotBeforeUpdate called>>");
    // console.log("updated props>>", this.props, this.state);
    console.log("prevProps props>>", prevProps, prevState);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called>>");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called>>");
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError called>>", error);
  }

  componentDidCatch(e) {
    console.log("componentDidCatch called>>", e);
  }

  // renderDetails() {
  //   switch (this.props.regNumber) {
  //     case 12:
  //       return "Pune";
  //     case 13:
  //       return "Solapur";
  //     case 14:
  //       return "Pimpri";
  //     case 10:
  //       return "Sangli";
  //   }
  // }

  render() {
    console.log("render called>>");
    // this.props.myArr.push(55);
    console.log("this.props.myArr", this.props.myArr);
    console.log("Props of this component>>", this.props, this.props.regNumber);
    return (
      <Row style={{ width: "100%" }}>
        <Col span={24}>Registration Details</Col>
        <Col> City as per Reg :{this.state.city}</Col>
        <Col>{this.state.city.xyz}</Col>
        {/* <Col span={24}> {this.renderDetails()}</Col> */}

        {/* <Col> Data from Parent :{this.props.myName}</Col> */}
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

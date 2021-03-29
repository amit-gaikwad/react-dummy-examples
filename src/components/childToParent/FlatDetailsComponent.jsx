import { Col, Row } from "antd";
import React from "react";
import { FlatInputComponent } from "./FlatInputComponent";

const data = [
  { flat_no: 1, name: "John" },
  { flat_no: 2, name: "Josh" },
  { flat_no: 3, name: "Mark" },
  { flat_no: 4, name: "Wood" },
];

export class FlatDetailsComponent extends React.Component {
  constructor() {
    super();
    this.state = { flat_no: 2 };
  }

  renderOwnerName() {
    const result =
      data.find((element) => {
        return element.flat_no === this.state.flat_no;
      }) || {};
    console.log("result", result);
    return <Col span={24}> Flat Owner : {result.name}</Col>;
  }

  handleFlatNoFromChild(latestFlatNo) {
    this.setState({ flat_no: latestFlatNo });
  }

  render() {
    return (
      <Row>
        <Col span={24}>Flat Details of {this.state.flat_no}</Col>
        {this.renderOwnerName()}
        <FlatInputComponent
          sendDataToParent={this.handleFlatNoFromChild.bind(this)}
        ></FlatInputComponent>
        {/* <Col></Col> */}
        {/* <Col>Flat Details Component</Col> */}
      </Row>
    );
  }
}

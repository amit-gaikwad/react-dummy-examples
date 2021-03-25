import React from "react";
import { Button, Typography } from "antd";

const { Text } = Typography;
export function HelloWorld() {
  var percentage = 70;
  var name = "Amit";

  function handleOnclick() {
    console.log("click Event");
  }

  function display() {
    console.log("display called..");
  }

  function renderCountry() {
    return <div>Country is india</div>;
  }

  return (
    <div>
      <Text type="danger">Hello World</Text>
      <Button type="ghost" onClick={handleOnclick}>
        Click me for Event
      </Button>
      <div>Name : {name}</div>
      <div>Percentage : {percentage}</div>
      {display()}
      {renderCountry()}
      {4 * 5}
    </div>
  );
}

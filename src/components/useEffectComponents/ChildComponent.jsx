import { Col, Input, Row } from "antd";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../App";

export const ChildComponent = (props) => {
  const theme = useContext(ThemeContext);

  const [city, setCity] = useState();

  useEffect(() => {
    // componentDidMount constructor
    console.log("only first called as like component did mount");
  }, []);

  useEffect(() => {
    // getDerivedStateFromProps
    console.log("call only when roll changed from props");
  }, [props.roll]);

  useEffect(() => {
    console.log("call only when name change from props");
  }, [props.name]);

  useEffect(() => {
    //render
    console.log("call only when city change from state");
  }, [city]);

  useEffect(() => {
    //componentWillUnMount
    return () => {
      console.log("call when before un mounting component");
    };
  }, []);

  //   useEffect(() => {
  //     document.addEventListener("mousedown", this.handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", this.handleClickOutside);
  //     };
  //   }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Row>
      <Col span={24}>Child Component Details</Col>
      <Col span={24}>Roll From Parent : {props.roll}</Col>
      <Col span={24}>Name from Parent :{props.name}</Col>
      <Col span={24}>
        Enter City :<Input onChange={handleCityChange} value={city}></Input>
      </Col>
      <Col span={24}>city in State variable :{city}</Col>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    </Row>
  );
};

ChildComponent.propTypes = {
  roll: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// var student = {
//   roll: 1,
//   name: "AMit",
// };

// const roll = student.roll;
// const {roll} = student;
// ({roll})

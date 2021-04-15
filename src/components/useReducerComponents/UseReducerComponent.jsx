// import { Button, Col, Input, Row } from "antd";
// import { useReducer, useState } from "react";
// import { UseReducerChildComponent } from "./UseReducerChildComponent";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT_COUNT_BY_ONE":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT_COUNT_BY_ONE":
//       return { ...state, count: state.count - 1 };
//     case "INCREMENT_COUNT_BY_FIVE":
//       return { ...state, count: state.count + 5 };
//     case "DECREMENT_COUNT_BY_FIVE":
//       return { ...state, count: state.count + 5 };
//     case "SET_COUNT":
//       return { ...state, count: action.value };
//     default:
//       return { ...state };
//   }
// };

// export const UseReducerCounterComponent = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const [value, setValue] = useState(0);

//   const handleIncrementCountByOne = () => {
//     dispatch({
//       type: "INCREMENT_COUNT_BY_ONE",
//     });
//   };
//   const handleDecrementCountByOne = () => {
//     dispatch({
//       type: "DECREMENT_COUNT_BY_ONE",
//     });
//   };
//   // const handleIncrementCountByFive = () => {
//   //   dispatch({ type: "INCREMENT_COUNT_BY_FIVE" });
//   // };
//   const handleDecrementCountByFive = () => {
//     dispatch({ type: "DECREMENT_COUNT_BY_FIVE" });
//   };
//   const handleSetCount = () => {
//     dispatch({ type: "SET_COUNT", value: value });
//   };

//   const handleCounterChange = (event) => {
//     setValue(Number(event.target.value));
//   };

//   return (
//     <Row>
//       <Col span={24}> Counter Using useReducer</Col>
//       <Col span={24}> Count :{state.count}</Col>
//       <Col span={6}>
//         <Button onClick={handleIncrementCountByOne}>Increment By 1</Button>
//       </Col>
//       <Col span={6}>
//         <Button onClick={handleDecrementCountByOne}>Decrement by 1</Button>
//       </Col>
//       <Col span={6}>
//         <Button onClick={handleDecrementCountByFive}>Decrement by 5</Button>
//       </Col>
//       <Col span={24}>
//         <Input value={value} onChange={handleCounterChange}></Input>
//         <Button onClick={handleSetCount}>set Count </Button>
//       </Col>
//       <UseReducerChildComponent dispatch={dispatch}></UseReducerChildComponent>
//     </Row>
//   );
// };

import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import { UseReducerChildComponent } from "./UseReducerChildComponent";

export const UseReducerCounterComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const handleIncrementCountByOne = () => {
    setCount(count + 1);
  };
  const handleDecrementCountByOne = () => {
    setCount(count - 1);
  };
  // const handleIncrementCountByFive = () => {
  //   setCount(count + 5);
  // };
  const handleDecrementCountByFive = () => {
    setCount(count - 5);
  };
  const handleSetCount = () => {
    setCount(value);
  };

  const handleCounterChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <Row>
      <Col span={24}> Counter Using useReducer</Col>
      <Col span={24}> Count :{count}</Col>
      <Col span={6}>
        <Button onClick={handleIncrementCountByOne}>Increment By 1</Button>
      </Col>
      <Col span={6}>
        <Button onClick={handleDecrementCountByOne}>Decrement by 1</Button>
      </Col>
      <Col span={6}>
        <Button onClick={handleDecrementCountByFive}>Decrement by 5</Button>
      </Col>
      <Col span={24}>
        <Input value={value} onChange={handleCounterChange}></Input>
        <Button onClick={handleSetCount}>set Count </Button>
      </Col>
      <UseReducerChildComponent setCount={setCount}></UseReducerChildComponent>
    </Row>
  );
};

// import { Button, Col, Row } from "antd";
// import PropTypes from "prop-types";

// export const UseReducerChildComponent = (props) => {
//   const handleIncrementCountByFive = () => {
//     props.dispatch({ type: "INCREMENT_COUNT_BY_FIVE" });
//   };
//   return (
//     <Row>
//       <Col span={6}>
//         <Button onClick={handleIncrementCountByFive}>Increment By 5</Button>
//       </Col>
//     </Row>
//   );
// };

// UseReducerChildComponent.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

import { Button, Col, Row } from "antd";
import PropTypes from "prop-types";

export const UseReducerChildComponent = (props) => {
  const handleIncrementCountByFive = () => {
    props.setCount(15);
  };
  return (
    <Row>
      <Col span={6}>
        <Button onClick={handleIncrementCountByFive}>Increment By 5</Button>
      </Col>
    </Row>
  );
};

UseReducerChildComponent.propTypes = {
  setCount: PropTypes.func.isRequired,
};

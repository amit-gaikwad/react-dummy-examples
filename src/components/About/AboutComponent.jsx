import { useReducer, useState } from "react";
//import { setCounter } from "../../Actions/CounterAction";
import PropTypes from "prop-types";
function init(initialCount) {
  return { count: initialCount };
}

//const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function AboutContainer({ initialCount = 5 }) {
  const [xyz, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {xyz.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

AboutContainer.propTypes = {
  initialCount: PropTypes.number,
};

export const AboutComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      Count: {counter}
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

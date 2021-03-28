import PropTypes from "prop-types";
import "./App.css";
//import { HeaderComponent } from "./Header/HeaderComponent";
import { AppRoutes } from "./Routes/AppRoutes";
import { connect } from "react-redux";
import { increamentCounter } from "./Actions/CounterAction";

function AppComponent(props) {
  return (
    <div className="App">
      <AppRoutes></AppRoutes>
      This is Counter in APP.js
      <div>Counter :{props.myCounter}</div>
    </div>
  );
}

AppComponent.propTypes = {
  myCounter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myCounter: state.counterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch(increamentCounter());
    },
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

//export default App;

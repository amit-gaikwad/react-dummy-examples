import "./App.css";
//import { HeaderComponent } from "./Header/HeaderComponent";
import { AppRoutes } from "./components/Routes/AppRoutes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
function App(props) {
  console.log("props in app", props);
  return (
    <div className="App">
      Counter in APp Coomnent : {props.myCounter}
      <AppRoutes></AppRoutes>
    </div>
  );
}

App.propTypes = {
  myCounter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myCounter: state.CounterReducer.counter,
  };
}; // subscribe

const mapDispatchToProps = () => {
  return {};
}; // publish

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

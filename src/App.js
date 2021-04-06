import "./App.css";
//import { HeaderComponent } from "./Header/HeaderComponent";
import { AppRoutes } from "./components/Routes/AppRoutes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { getAllEmployeesData } from "./Actions/EmployeeAction";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.mygetAllEmployee();
  }
  render() {
    return (
      <div className="App">
        Counter in APp Coomnent : {this.props.myCounter}
        <AppRoutes></AppRoutes>
      </div>
    );
  }
}

App.propTypes = {
  myCounter: PropTypes.number.isRequired,
  mygetAllEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myCounter: state.CounterReducer.counter,
  };
}; // subscribe

const mapDispatchToProps = (dispatch) => {
  return {
    mygetAllEmployee: () => {
      dispatch(getAllEmployeesData());
    },
  };
}; // publish

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

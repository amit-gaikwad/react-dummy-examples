import "./App.css";
//import { HeaderComponent } from "./Header/HeaderComponent";
import { AppRoutes } from "./components/Routes/AppRoutes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { getAllEmployeesData } from "./Actions/EmployeeAction";
import { Input } from "antd";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
export const ThemeContext = React.createContext(themes.light);

const App = (props) => {
  useEffect(() => {
    props.mygetAllEmployee();
  }, []);
  const [themeType, setthemeType] = useState("dark");
  const mainTheme = themes[themeType] || {
    foreground: "black",
    background: "red",
  };
  return (
    <div className="App">
      Counter in APp Coomnent : {props.myCounter}
      <Input
        value={themeType}
        onChange={(e) => {
          setthemeType(e.target.value);
        }}
      ></Input>
      <ThemeContext.Provider value={mainTheme}>
        <AppRoutes></AppRoutes>
      </ThemeContext.Provider>
    </div>
  );
};
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   // componentDidMount() {
//   //   this.props.mygetAllEmployee();
//   // }
//   render() {
//     //this.props.mygetAllEmployee();
//     return (
//       <div className="App">
//         Counter in APp Coomnent : {this.props.myCounter}
//         <AppRoutes></AppRoutes>
//       </div>
//     );
//   }
// }

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

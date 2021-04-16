import "./App.css";
//import { HeaderComponent } from "./Header/HeaderComponent";
import { AppRoutes } from "./components/Routes/AppRoutes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { getAllEmployeesData } from "./Actions/EmployeeAction";
import { Button } from "antd";
import { ErrorBoundaryComponent } from "./components/ErrorBoundary/ErrorBoundaryComponent";

const themes = {
  light: {
    foreground: "black",
    background: "white",
  },
  dark: {
    foreground: "white",
    background: "black",
  },
};

export const ThemeContext = React.createContext(themes.light);

const App = (props) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    props.mygetAllEmployee();
  }, []);

  const handleThemeChange = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    }
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    }
  };

  console.log("current Theme >>", currentTheme);

  // var usedTheme;

  // if (currentTheme === "light") {
  //   usedTheme = themes.light;
  // }
  // if (currentTheme === "dark") {
  //   usedTheme = themes.dark;
  // }

  var usedTheme = themes[currentTheme];

  return (
    <div className="App">
      Counter in APp Coomnent : {props.myCounter}
      <div>
        <Button onClick={handleThemeChange}> Toggle Theme</Button>
      </div>
      <ErrorBoundaryComponent>
        <ThemeContext.Provider value={usedTheme}>
          <AppRoutes></AppRoutes>
        </ThemeContext.Provider>
      </ErrorBoundaryComponent>
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.props.mygetAllEmployee();
//   }
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

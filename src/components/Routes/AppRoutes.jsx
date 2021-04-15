import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutContainer } from "../About/AboutComponent";
import { APICallsComponent } from "../APICalls/APICallsComponent";
import { FlatDetailsComponent } from "../childToParent/FlatDetailsComponent";
import { ContactUsContainer } from "../ContactUs/ContactUsComponent";
import { ConterContainer } from "../Counter/CounterComponent";
import { EmployeeDetailsComponent } from "../EmployeeList/EmployeeDetailsComponent";
import { EmployeeListComponent } from "../EmployeeList/EmployeeListComponent";
import { EmployeeOperationContainer } from "../Employees/EmployeesOperationsComponent";
import { NewEmployeeListContainer } from "../Employees/NewEmployeeListComponent";
import { HeaderComponent } from "../Header/HeaderComponent";
import { HomeContainer } from "../Home/HomeComponent";
import { EnterRegistrationDetailsComponent } from "../RegistrationDetails/EnterRegistrationDetailsClassBasedComponent";
import { ClassBasedUseContextComponent } from "../useContextClassBased/ClassBasedUseContextComponent";
import { ParentComponentUseContext } from "../useContextComponents/ParentComponent";
import { ParentComponent } from "../useEffectComponents/ParentComponent";
import { UseReducerCounterComponent } from "../useReducerComponents/UseReducerComponent";
import { CompanyInfoComponent } from "../useRefComponents/CompanyInfoComponent";
//import { EnterStudentInfoComponent } from "../UseStateComponents/EnterStudentInfoComponent";
import { EnterStudentInfoFunctionalCOmponent } from "../UseStateComponents/EnterStudentInfoFunctionalComponent";

export class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route exact path="/home" component={HomeContainer}></Route>
          <Route
            exact
            path="/use-reducer"
            component={UseReducerCounterComponent}
          ></Route>
          <Route exact path="/useRef" component={CompanyInfoComponent}></Route>
          <Route exact path="/about" component={AboutContainer}></Route>
          <Route
            exact
            path="/contact-us"
            component={ContactUsContainer}
          ></Route>
          <Route
            exact
            path="/flat-details"
            component={FlatDetailsComponent}
          ></Route>
          <Route
            exact
            path="/employees"
            component={EmployeeListComponent}
          ></Route>
          <Route
            exact
            path="/employee/:myEmployeeId"
            component={EmployeeDetailsComponent}
          ></Route>
          <Route exact path="/counter" component={ConterContainer}></Route>
          <Route
            exact
            path="/employee-operations"
            component={EmployeeOperationContainer}
          ></Route>
          <Route
            exact
            path="/new-employees"
            component={NewEmployeeListContainer}
          ></Route>
          <Route
            path="/registration"
            component={EnterRegistrationDetailsComponent}
            exact
          ></Route>
          <Route path="/api-calls" component={APICallsComponent} exact></Route>
          <Route
            path="/student"
            component={EnterStudentInfoFunctionalCOmponent}
            exact
          ></Route>
          <Route
            path="/use-effect-example"
            component={ParentComponent}
            exact
          ></Route>
          <Route
            path="/use-context"
            component={ParentComponentUseContext}
            exact
          ></Route>
          <Route
            path="/use-context-class"
            component={ClassBasedUseContextComponent}
            exact
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

//http://localhost:3000/about/dfidfifdj
//http://localhost:3000/about

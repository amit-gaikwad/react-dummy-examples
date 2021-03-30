import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutContainer } from "../About/AboutComponent";
import { FlatDetailsComponent } from "../childToParent/FlatDetailsComponent";
import { ContactUsContainer } from "../ContactUs/ContactUsComponent";
import { ConterContainer } from "../Counter/CounterComponent";
import { EmployeeDetailsComponent } from "../EmployeeList/EmployeeDetailsComponent";
import { EmployeeListComponent } from "../EmployeeList/EmployeeListComponent";
import { HeaderComponent } from "../Header/HeaderComponent";
import { HomeContainer } from "../Home/HomeComponent";

export class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route exact path="/home" component={HomeContainer}></Route>
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
        </Switch>
      </BrowserRouter>
    );
  }
}

//http://localhost:3000/about/dfidfifdj
//http://localhost:3000/about

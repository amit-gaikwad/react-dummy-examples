import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutComponent } from "../About/AboutComponent";
import { FlatDetailsComponent } from "../childToParent/FlatDetailsComponent";
import { ContactUsComponent } from "../ContactUs/ContactUsComponent";
import { EmployeeDetailsComponent } from "../EmployeeList/EmployeeDetailsComponent";
import { EmployeeListComponent } from "../EmployeeList/EmployeeListComponent";
import { HeaderComponent } from "../Header/HeaderComponent";
import { HomeComponent } from "../Home/HomeComponent";

export class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/home" component={HomeComponent}></Route>
          <Route exact path="/about" component={AboutComponent}></Route>
          <Route
            exact
            path="/contact-us"
            component={ContactUsComponent}
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
        </Switch>
      </BrowserRouter>
    );
  }
}

//http://localhost:3000/about/dfidfifdj
//http://localhost:3000/about

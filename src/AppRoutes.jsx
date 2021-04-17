import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateUserContainer } from "./components/CreateUser/CreateUserComponent";
import { DashBoardContainer } from "./components/Dashboard/DashboardComponent";
import { HeaderContainer } from "./components/Header/HeaderComponent";
import { LoginContainer } from "./components/Login/LoginComponent";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderContainer></HeaderContainer>
      <Switch>
        <Route path="/create-user" component={CreateUserContainer}></Route>
        <Route path="/login" component={LoginContainer}></Route>
        <Route path="/dashboard" component={DashBoardContainer}></Route>
      </Switch>
    </BrowserRouter>
  );
};

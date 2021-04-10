import { Menu } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export class HeaderComponent extends Component {
  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact-us">Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="employees">
          <Link to="/employees">Employees</Link>
        </Menu.Item>
        <Menu.Item key="counter">
          <Link to="/counter">Counter Operations</Link>
        </Menu.Item>
        <Menu.Item key="employee-operations">
          <Link to="/employee-operations">Employees Operations</Link>
        </Menu.Item>
        <Menu.Item key="new-employees">
          <Link to="/new-employees">New Employees</Link>
        </Menu.Item>
        <Menu.Item key="api-calls">
          <Link to="/api-calls">API calls</Link>
        </Menu.Item>
        <Menu.Item key="registration">
          <Link to="/registration">Registration</Link>
        </Menu.Item>
        <Menu.Item key="student">
          <Link to="/student">Student Operaion using hooks</Link>
        </Menu.Item>
        <Menu.Item key="use-effect-example">
          <Link to="/use-effect-example">Use Effect Examples</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

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
          <Link to="/counter">Counter</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

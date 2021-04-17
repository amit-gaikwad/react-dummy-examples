import { Menu } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const HeaderComponent = (props) => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="dashboard">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="create-use">
        <Link to="/create-user">Create User</Link>
      </Menu.Item>
      {props.myUser && (
        <Menu.Item style={{ float: "right" }}>{props.myUser.name}</Menu.Item>
      )}
    </Menu>
  );
};

HeaderComponent.propTypes = {
  myUser: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    myUser: state.UserReducer.user,
  };
};
export const HeaderContainer = connect(mapStateToProps, null)(HeaderComponent);

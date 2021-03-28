import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers } from "../Actions/UsersActons";
import { Col, Divider, Row } from "antd";

class UserListComponent extends Component {
  constructor(props) {
    super(props);
    props.getAllUsers();
  }
  render() {
    return (
      <Row>
        <Col span={24}> All Users</Col>
        {this.props.users.map((u) => {
          return (
            <Col span={24} key={u.id}>
              <Col span={24}>Name :{u.name}</Col>
              <Col span={24}>Email :{u.email}</Col>
              <Col span={24}>Mobile :{u.mobile}</Col>
              <Divider></Divider>
            </Col>
          );
        })}
      </Row>
    );
  }
}

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired,
  getAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers());
    },
  };
};

export const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListComponent);

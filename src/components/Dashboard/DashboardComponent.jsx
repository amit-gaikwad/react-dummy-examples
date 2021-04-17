import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUser } from "../../Actions/UserAction";
import { Col, Row } from "antd";

const DashboardComponent = (props) => {
  useEffect(() => {
    props.myGetAllUsers();
  }, []);
  return (
    <Row>
      <Col span={24}>All Users</Col>
      {props.myAllUsers.map((u) => {
        return (
          <Col key={u._id} span={24}>
            {u.name}
          </Col>
        );
      })}
    </Row>
  );
};

DashboardComponent.propTypes = {
  myGetAllUsers: PropTypes.func.isRequired,
  myAllUsers: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    myAllUsers: state.UserReducer.allUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    myGetAllUsers: () => {
      dispatch(getAllUser());
    },
  };
};

export const DashBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

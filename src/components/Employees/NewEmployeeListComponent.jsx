import { Button, Col, Row } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEmployee } from "../../Actions/EmployeeAction";

class NewEmployeeListComponent extends Component {
  handleOnDelete(employee) {
    this.props.myDeleteEmployee(employee.emp_email);
  }
  render() {
    return (
      <Row>
        <Col span={24}>ALl new Employees</Col>
        {this.props.myEmployees.map((e) => {
          // eslint-disable-next-line no-undef
          //a = 10 / 0;
          return (
            <Col span={24} key={e.emp_email}>
              <Row>
                <Col span={8}> {e.emp_email}</Col>
                <Col span={8}>{e.emp_name}</Col>
                <Col span={4}>
                  <Button
                    onClick={() => {
                      this.handleOnDelete(e);
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    );
  }
}
NewEmployeeListComponent.propTypes = {
  myEmployees: PropTypes.array.isRequired,
  myDeleteEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myEmployees: state.EmployeeReducer.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myDeleteEmployee: (email) => {
      dispatch(deleteEmployee(email));
    },
  };
};

export const NewEmployeeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEmployeeListComponent);

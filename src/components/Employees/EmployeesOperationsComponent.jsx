import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEmployee } from "../../Actions/EmployeeAction";

class EmployeeOperationsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    this.props.myAddEmployee(values);
    console.log("employee>>", values);
  }

  render() {
    console.log("props>>", this.props);
    return (
      <Row justify="center">
        <Col span={24}>Add Employee Details</Col>
        <Col span={12}>
          <Form name="employeeForm" onFinish={this.onSubmit.bind(this)}>
            <Form.Item
              label="Name"
              name="emp_name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="emp_email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="salary" name="emp_salary">
              <Input />
            </Form.Item>
            <Form.Item
              label="mobile"
              name="emp_mobile"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

EmployeeOperationsComponent.propTypes = {
  myAddEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    myAddEmployee: (employee) => {
      dispatch(addEmployee(employee));
    },
  };
};

export const EmployeeOperationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeOperationsComponent);

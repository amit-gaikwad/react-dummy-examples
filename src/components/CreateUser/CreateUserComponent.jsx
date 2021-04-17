import { Button, Col, Form, Input, Row } from "antd";
import { connect } from "react-redux";
import { createUser } from "../../Actions/UserAction";
import PropTypes from "prop-types";
const CreateUserComponent = (props) => {
  const onSubmit = (value) => {
    props.myCreateUser(value);
    console.log("value>>", value);
  };
  return (
    <Row justify="center">
      <Col span={24}>Create New User</Col>
      <Col span={12}>
        <Form name="employeeForm" onFinish={onSubmit}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input Password!" }]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: "Please input Mobile!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please input role!" }]}
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
};

CreateUserComponent.propTypes = {
  myCreateUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    myCreateUser: (user) => {
      dispatch(createUser(user));
    },
  };
};
export const CreateUserContainer = connect(
  null,
  mapDispatchToProps
)(CreateUserComponent);

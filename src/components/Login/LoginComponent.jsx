import { Col, Row } from "antd";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { login } from "../../Actions/UserAction";
import PropTypes from "prop-types";
const LoginComponent = (props) => {
  const onFinish = (values) => {
    // axios.post("http://localhost:8080/v1/auth/login", values).then((res) => {
    //   console.log("res>>", res);
    // });
    props.myLogin(values);
    console.log("Success:", values);
  };

  return (
    <Row justify="center">
      <Col span={24}>Sign In</Col>
      <Col span={12}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

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

LoginComponent.propTypes = {
  myLogin: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    myLogin: (user) => {
      dispatch(login(user));
    },
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

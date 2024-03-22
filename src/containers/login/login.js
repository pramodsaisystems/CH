import React, { useEffect } from "react";
import { Button, Card, Form, Input, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login, updateLogin } from "./actions";
import { useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get data from redux store
  const loginDetails = useSelector((state) => state.loginReducer?.loggedIn);

  const onFinish = (values) => {
    // history.navigate("/dashboard");
    dispatch(updateLogin(true));
  };
  useEffect(() => {
    if (loginDetails) {
      navigate("/dashboard");
    }
  }, [loginDetails]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card
      title="Sign in"
      className="login-form"
      style={{
        width: 500,
      }}
    >
      {" "}
      <Form
        name="normal_login"
        className=""
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Row className="login-label">
          <Col>Email</Col>
        </Row>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            // style={{ borderColor: "black" }}
          />
        </Form.Item>
        <Row className="login-label">
          <Col>Password</Col>
        </Row>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter Password",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            // style={{ borderColor: "black" }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="secondary"
            htmlType="submit"
            className="login-btn"
            style={{ color: "white" }}
            size="large"
          >
            Sign in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </Card>
  );
};
export default Login;

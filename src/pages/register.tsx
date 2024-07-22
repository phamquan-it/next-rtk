import React from 'react';
import { useRegisterMutation } from "@/libs/redux/api/auth.api";
import { Button, Form, Input, message } from "antd";

const Register: React.FC = () => {
  const [register, { isLoading, error }] = useRegisterMutation();

  const handleRegister = async (values: { name: string; email: string; password: string }) => {
    try {
      const result = await register(values).unwrap();
      // Optionally store token or handle success response
      console.log('Registration successful:', result);
      message.success('Registration successful!');
    } catch (err) {
      console.error('Registration failed:', err);
      message.error('Registration failed. Please try again.');
    }
  };

  const onFinish = (values: { name: string; email: string; password: string }) => {
    handleRegister(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Failed to submit form.');
  };

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;

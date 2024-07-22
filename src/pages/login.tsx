import React, { useState } from 'react';
import { useLoginMutation } from '@/libs/redux/api/auth.api';
import { Button, Form, Input, message } from 'antd';

const Page: React.FC = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const result:any = await login(values).unwrap();
      // Store the token in localStorage
      localStorage.setItem('authToken', result.accessToken);
      // Optionally redirect or update UI
      console.log("ok");
      
      message.success('Login successful!');
    } catch (err) {
      console.error('Login failed:', err);
      message.error('Login failed. Please try again.');
    }
  };

  const onFinish = (values: { email: string; password: string }) => {
    handleLogin(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Failed to submit form.');
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type="email" />
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
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Page;

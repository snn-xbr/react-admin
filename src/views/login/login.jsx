import React, { Component } from 'react';
import './login.css';
import logo from '../../assets/images/logo.jpg';
import { Form, Input, Button } from 'antd';
import loginAjax from '../../api/loginAjax.js';

const Login = () => {
    const [form] = Form.useForm();
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const handleLogin = () => {
        const name = form.getFieldValue("username");
        const pwd = form.getFieldValue("password")
        // const ajax = new Ajax("GET", "http://localhost:3001", {name: name, password: pwd});
        // ajax.sendRequest();
        loginAjax(name, pwd);
    }

    return (
        <div className="login">
            <div className="login-header">
                <img src={logo} alt="logo" className="logo" />
                <span className="header-title">React : 后台管理系统</span>
            </div>
            <section className="login-content">
                <h2>登录界面</h2>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    form={form}
                    onFinish={handleLogin}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '必輸項不能爲空',
                        },{
                            min: 4,
                            message: '至少輸入4個文字'
                        },{
                            max: 12,
                            message: '最長12個文字'
                        },{
                            message: '只支持字母數字和下劃綫',
                            pattern: /^[0-9a-zA-Z_]+$/
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '必輸項不能爲空',
                        },{
                            min: 4,
                            message: '至少輸入4個文字'
                        },{
                            max: 12,
                            message: '最長12個文字'
                        },{
                            message: '只支持字母數字和下劃綫',
                            pattern: /^[0-9a-zA-Z_]+$/
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button style={{backgroundColor: "teal"}} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                </Form>
            </section>
        </div>
    )
}

export default Login;
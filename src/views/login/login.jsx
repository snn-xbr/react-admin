import React, { Component } from 'react'
import './login.css'
import logo from '../../assets/images/logo.jpg'
import { Form, Input, Button, message } from 'antd'
import { reqLogin } from '../../api/index.js'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

export default class Login extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props)
    }

    handleLogin = async() => {
        const username = this.formRef.current.getFieldValue("username")
        const password = this.formRef.current.getFieldValue("password")
        let response = await reqLogin(username, password)
        let result = response && response.data

        // dummy data
        result === undefined && (result = {
            status: 0,
            data: []
        })

        if(result.status === 0) {
            message.success('登录成功!')
            this.props.history.push('/admin')
        }
    }

    render() {
        return(
        <div className="login">
            <div className="login-header">
                <img src={logo} alt="logo" className="logo" />
                <span className="header-title">React : 后台管理系统</span>
            </div>
            <section className="login-content">
                <h2>登录界面</h2>
                <Form
                    {...layout}
                    name="control-ref"
                    ref={this.formRef}
                    onFinish={this.onFinish}
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
                    <Button style={{backgroundColor: "teal"}} onClick={this.handleLogin}>
                        Submit
                    </Button>
                </Form.Item>
                </Form>
            </section>
        </div>
        )
    }
}
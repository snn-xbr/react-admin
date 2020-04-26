import React, { Component } from 'react'
import './admin.css'
import { Layout, Menu, Breadcrumb, icon } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import logo from '../../assets/images/logo.jpg'
import { menuList } from '../../config/menuList'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default class Admin extends Component {
    constructor(props) {
        super(props)
    }

    getTreeNode = () => {
        return menuList.map( menu => {
            if(menu.children === undefined) {
                return <Menu.Item key={menu.key}>
                    {
                        <span>
                            {menu.title}
                        </span>
                    }
                    </Menu.Item>
            } else {
                return (
                    <SubMenu
                    key={menu.key} 
                    title={
                        <span>
                            {menu.title}
                        </span>
                        }
                    >
                        {
                            menu.children.map(item =>{
                                return <Menu.Item key={item.key}>
                                    {
                                        <span>
                                            {item.title}
                                        </span>
                                    }
                                </Menu.Item>
                            })
                        }
                    </SubMenu>
                )
            }
        })
    }

    render(){
        const menuElement = this.getTreeNode()
        return(
            <div className="admin">
                <Layout>
                    <Header className="header">
                        <span className="header-title">React : 后台管理系统</span>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <img src={logo} />
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                            {
                                menuElement
                            }
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                                >
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
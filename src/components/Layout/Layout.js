import React from 'react'
import { Input, Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import './Layout.css'
import BreadCrumbs from '../BreadCrumbs';
import { routes } from '../../routes/routes';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        const { collapsed } = this.state;

        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            {
                                routes.map((item, i) => {
                                    return (
                                        <Menu.Item key={i + item} icon={item.icon}>
                                            <Link to={item.url}>{item.name}</Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                Files
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Input placeholder="Search . . ." prefix={<SearchOutlined />} />
                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            <BreadCrumbs />
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Routes>
                                    {
                                        routes.map((route, i) => (
                                            <Route path={route.url} key={route + i} element={route.component} />
                                        ))
                                    }
                                </Routes>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
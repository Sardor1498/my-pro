import React from 'react'
<<<<<<< HEAD
import { Input, Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    SearchOutlined,
} from '@ant-design/icons';
=======
import { Layout, Menu } from 'antd';
>>>>>>> c671cd601496a19f8ac4cde4ea23d5ead8b0b267
import './Layout.css'
import BreadCrumbs from '../BreadCrumbs';
import { routes } from '../../routes/routes';
import { Link, Route, Routes } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export class AntLayout extends React.Component {
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
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            {
                                routes.map((item, i) => {
                                    return (
                                        <SubMenu key={i + item.name} icon={item.icon} title={item.name}>
                                            <Menu.Item key={i} icon={item.icon}>
                                                <Link to={item.url}>{item.name}</Link>
                                            </Menu.Item>
                                        </SubMenu>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
<<<<<<< HEAD
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Input placeholder="Search . . ." prefix={<SearchOutlined />} />
=======
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            Salom
>>>>>>> c671cd601496a19f8ac4cde4ea23d5ead8b0b267
                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            <BreadCrumbs />
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Routes>
                                    {
                                        routes.map((route, i) => (
                                            <Route path={route.url} key={i} element={route.component} />
                                        ))
                                    }
                                </Routes>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
        );
    }
}
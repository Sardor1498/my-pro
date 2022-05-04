import React from 'react'
import { Layout, Menu } from 'antd';
import './Layout.css'
import BreadCrumbs from '../BreadCrumbs';
import { routes } from '../../routes/routes';
import { Link, Route, Routes } from 'react-router-dom';
import Test from '../../pages/Test';
import ContentMain from './Content';


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
        const state = this.props
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
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        Salom
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <BreadCrumbs />
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {/* <Routes>
                                {
                                    routes.map((route, i) => (
                                        <Route
                                            {...route}
                                            path={route.url}
                                            // render={(props) => <Test {...props} authed={true} />}
                                            key={i}
                                            element={route.component}
                                        />
                                    ))
                                }
                            </Routes> */}
                            <ContentMain state={state} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
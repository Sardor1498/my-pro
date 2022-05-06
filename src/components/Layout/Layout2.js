import React from 'react'
import { Layout, Menu,  Image } from 'antd';
import './Layout.css'
import { routes } from '../../routes/routes';
import { Link } from 'react-router-dom';
import ContentMain from './Content';



const { Content, Sider } = Layout;



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
                <Sider style={{backgroundColor:'#092b00',color:'#fff'}} className='text-white' width={300} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo flex h-5  px-7 pt-5 pb-10 " ><Image className='rounded-full' width={40} height={40} src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <div className=''>
                            <div>abdurahmoniy</div>
                            <div>Base</div>
                        </div>
                    </div>
                    <Menu  style={{backgroundColor:'transparent', }}   defaultSelectedKeys={['1']} >
                        {
                            routes.map((item, i) => {
                                return (
                                    // <SubMenu key={i + item.name} icon={item.icon} title={item.name}>
                                        <Menu.Item key={i}  >
                                            <Link to={item.url}>{item.name}</Link>
                                        </Menu.Item>
                                    // </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout">

                    <Content style={{ margin: '0 16px' }}>
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
                </Layout>
            </Layout>
        );
    }
}
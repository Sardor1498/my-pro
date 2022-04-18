import {
    HomeOutlined,
    ProfileOutlined,
<<<<<<< HEAD
    ContactOutlined,
    TimeOutlined,
    UserOutlined,
} from 'antd';
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import Login from '../pages/Login'
=======
    ContactsOutlined,
    UserOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import Login from '../pages/Login'


export const routes = [
    {
        name: 'Home',
        url: 'home',
        icon: <HomeOutlined />,
        component: ''
    },
    {
        name: 'Profile',
        url: 'profile',
        icon: <ProfileOutlined />,
        component: <Profile />
    },
    {
        name: 'Contact',
        url: 'contact',
        icon: <ContactsOutlined />,
        component: <Contact />
    },
    {
        name: 'Register',
        url: 'register',
        icon: <DesktopOutlined />,
        component: <Register />
    },
    {
        name: 'Login',
        url: 'login',
        icon: <UserOutlined />,
        component: <Login />
    },
]
>>>>>>> 3175780a0f73fd9820caa5728845a873cd64c884

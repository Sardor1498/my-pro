import {
    HomeOutlined,
    ProfileOutlined,
    ContactsOutlined,
    UserOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'
import {Register} from '../pages/Register'
import Login from '../pages/Login'
import Test from '../pages/Test';


export const routes = [
    {
        name: 'Home',
        url: '',
        icon: <HomeOutlined />,
        component: <Home/>
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
        component: <Login />,
    },
    {
        name: 'Test',
<<<<<<< HEAD
        url: 'test',
        icon: <UserOutlined />,
        component: <Test />
    },
]
=======
        url: '/test',
        icon: <UserOutlined />,
        component: <Test />,
    },
    {
        name: 'Azizbek',
        url: '/azizbek',
        icon: <UserOutlined />,
        component: <Azizbek />,
    },
]
>>>>>>> 5cac42d83bb7a1450d4df9fd6ee6fa509b17408f

import Profile from '../pages/Profile'
import Message from '../pages/Message'
import Services from '../pages/Services'
import AddWork from '../pages/AddWork'
import ClientBase from '../pages/ClientBase'
import Notifications from '../pages/Notifications'
import Rates from '../pages/Rates'
import Record from '../pages/Record'
import Records from '../pages/Records'
import Reviews from '../pages/Reviews'
import { RightOutlined } from '@ant-design/icons'

export const routes = [
    {
        name: 'Profile',
        url: 'profile',
        component: <Profile />,
        icon: <RightOutlined />,
    },
    {
        name: 'Message',
        url: 'message',
        component: <Message />,
        icon: <RightOutlined />,
    },
    {
        name: 'Services',
        url: 'services',
        component: <Services />,
        icon: <RightOutlined />,
    },
    {
        name: 'Add work schedule',
        url: 'add work schedule',
        component: <AddWork />,
        icon: <RightOutlined />,
    },
    {
        name: 'Record a client',
        url: 'record a client',
        component: <Record />,
        icon: <RightOutlined />,
    },
    {
        name: 'Viewing records',
        url: 'viewing records',
        component: <Records />,
        icon: <RightOutlined />,
    },
    {
        name: 'Client base',
        url: 'client base',
        component: <ClientBase />,
        icon: <RightOutlined />,
    },
    {
        name: 'Notifications',
        url: 'notifications',
        component: <Notifications />,
        icon: <RightOutlined />,
    },
    {
        name: 'Rates',
        url: 'rates',
        component: <Rates />,
        icon: <RightOutlined />,
    },
    {
        name: 'Reviews',
        url: 'reviews',
        component: <Reviews />,
        icon: <RightOutlined />,
    },
]

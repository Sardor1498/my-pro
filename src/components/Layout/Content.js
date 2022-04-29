import { Route, Routes } from "react-router-dom"
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import Profile from '../../pages/Profile'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Test from '../../pages/Test'
import Azizbek from '../../pages/Register'

const Content = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element="" />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/test" element={<Test hidden={props.state.hidden} click={props.state.click} />}/>
                <Route path="/azizbek" element={<Azizbek/>} />
            </Routes>
        </div>
    )
}
export default Content
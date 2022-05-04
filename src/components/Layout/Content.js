import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import { Register } from '../../pages/Register';
import Test from '../../pages/Test';

const Content = (props) => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element=""
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/test"
                    element={<Test hidden={props.state.hidden} click={props.state.Click} />}
                />
            </Routes>

        </div>
    )
}

export default Content
import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import AddWork from '../../pages/AddWork';
import ClientBase from '../../pages/ClientBase';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Message from '../../pages/Message';
import Notifications from '../../pages/Notifications';
import Profile from '../../pages/Profile';
import Rates from '../../pages/Rates';
import Record from '../../pages/Record';
import Records from '../../pages/Records';
import { Register } from '../../pages/Register';
import Reviews from '../../pages/Reviews';
import Services from '../../pages/Services';
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




                <Route
                    path="/message"
                    element={<Message />}
                />
                <Route
                    path="/services"
                    element={<Services />}
                />
                <Route
                    path="/addwork"
                    element={<AddWork />}
                />
                <Route
                    path="/record"
                    element={<Record />}
                />
                <Route
                    path="/records"
                    element={<Records />}
                />
                <Route
                    path="/clientbase"
                    element={<ClientBase />}
                />
                <Route
                    path="/notifs"
                    element={<Notifications />}
                />
                <Route
                    path="/rates"
                    element={<Rates />}
                />
                <Route
                    path="/reviews"
                    element={<Reviews />}
                />


            </Routes>

        </div>
    )
}

export default Content
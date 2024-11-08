import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Chatbot } from './chatbot/chatbot';
import { Login } from './Login/Login';
import { Landing } from './Landing/Landing';
import { Register } from './Register/Register';
import Unauthorized from './401/Unanuthorized';
import { connect } from "react-redux";
import { UserForm } from './userForm/userForm';

import '../src/index.css'

const App = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/401" element={<Unauthorized />} />
                
                <Route 
                    path="/protected/form/:userID" 
                    element={
                        props.userID ? <UserForm /> : <Navigate to="/" />
                    } 
                />
                <Route 
                    path="/protected/:userID" 
                    element={
                        props.userID ? <Chatbot /> : <Navigate to="/" />
                    } 
                />
            </Routes>
        </div>
    );
};

const mapState = (state) => ({
    userID: state.reducerName.userID,
});

const connectedApp = connect(mapState)(App);
export default connectedApp;

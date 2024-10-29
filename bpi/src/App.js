import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Chatbot } from './chatbot/chatbot';
import { Login } from './Login/Login';
import { connect } from "react-redux";

const App = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
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

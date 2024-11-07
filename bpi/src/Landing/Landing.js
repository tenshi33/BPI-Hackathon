import React from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actionName } from "../redux/actions";

const Landing = ({ loginUser }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };
    

    return (
        <div className="landing-page">
            <header>
                <h1 className='text-red-800 text-center'>Welcome to Our Platform</h1>
            </header>
            <div className="buttons">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

const mapState = (state) => ({
    userID: state.reducerName.userID, 
});

const actionCreators = {
    loginUser: actionName.loginUser,
};

const connectedLanding = connect(mapState, actionCreators)(Landing);
export { connectedLanding as Landing };

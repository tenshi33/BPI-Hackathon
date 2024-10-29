import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionName } from "../redux/actions";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await props.loginUser({ email, password });
        if(props.userID){
         console.log(props.userID, "login form")
         localStorage.getItem(props.userID)
         navigate(`/protected/${props.userID}`);
         
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

const mapState = (state) => ({
    userID: state.reducerName.userID, 

});

const actionCreators = {
    loginUser: actionName.loginUser,

};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };

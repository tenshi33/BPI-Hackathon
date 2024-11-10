import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actionName } from "../redux/actions";
import Navigation from '../components/Navigation'
import circle from '../assets/circle.png'

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await props.loginUser({ email, password });
    };
    
 
    useEffect(() => {
        if (props.userID) {
            
            navigate(`/protected/${props.userID}`);
        }
        console.log(props.userID)
    }, [props.userID, navigate]);


    return (
        <div className='w-full '>
            <Navigation/>

            <div className='min-h-lvh flex align-center relative justify-center py-36'>
                <form onSubmit={handleSubmit} className=
                    'p-14 flex-col m-auto w-login-width h-login-height rounded-2xl bg-custom-gradient  backdrop-blur-md'>

                    <div className='grid gap-5'>
                        <h1 className='text-center  font-regular m-auto text-4xl max-w-48 mb-16'>Log in your account</h1>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Email'
                                    className='w-input-width h-10 bg-input-bg text-slate-400  rounded-lg px-3 text-sm'/>
                        
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='Password'

                            className='w-input-width h-10 bg-input-bg text-slate-400  rounded-lg px-3 text-sm'/>
                    </div>

                    <button type="submit" className='bg-login-btn hover:bg-fuchsia-950 duration-200 w-full h-12 rounded-lg mt-16 ' onClick={handleSubmit}>Login</button>
                </form>

                <div className=" absolute flex items-center justify-center max-w-72 rounded-full ">
                     <img className="animate-spin-slow  object-fill rounded-full blur-3xl bg-gradient-to-bl from-glow-primary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20" src={circle} alt="" />
                </div>
                <div className=" absolute flex items-center justify-center max-w-lg rounded-full -right-10 -bottom-20">
                     <img className=" animate-spin-slow object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20" src={circle} alt="" />
                </div>

            </div>
        </div>
    );
};

const mapState = (state) => ({
    userID: state.reducerName.userID, 
    data : state.reducerName.data
});

const actionCreators = {
    loginUser: actionName.loginUser,

};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };

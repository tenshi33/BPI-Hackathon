import React from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actionName } from "../redux/actions";
import Splash from '../assets/splash.png'
import circle from '../assets/circle.png'
import Navigation from '../components/Navigation.jsx';
import Card from '../components/Card.jsx';
import { useState } from 'react';
import Star from '../assets/ai.png'

const Landing = ({ loginUser }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };
    


    return (
    <div className='max-w-7xl'>

    <Navigation/>
    <div className='my-28 mx-7 absolute'>
        
      <div className='flex relative  ' >
        <div className='flex flex-col gap-5 ml-5'>
          <h1 className='text-6xl text-white max-w-2xl'>Welcome to Project Sol <br />- Your Trusted Banking Chat Assistant</h1>
          <p className='text-white text-sm font-light max-w-2xl'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
          <button className='text-white  py-1 px-8 border w-fit rounded-button'>Continue</button>
        </div>

        <div className=" relative flex items-center justify-center max-w-md rounded-full -right-64  -bottom-16 ">
               <img className='z-10 absolute animate-spin-slow ' src={Splash} alt="" />
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={circle} alt="" />
        </div>


    

      </div>




      <div className='flex relative  items-center  justify-end h-lvh'>
        
        <div className=" absolute flex items-center justify-center max-w-5xl rounded-full -left-2/4 top-10">
               <img className='z-10 absolute animate-spin-slow' src={circle} alt="" />
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={circle} alt="" />
        </div>

        <div className='z-20 max-w-xl text-right '>
          <h2 className='text-left text-2xl'>Who we are</h2>
          <p className='text-right font-light text-xl my-3'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
          <button className='rounded-button px-6 py-1 border' >Learn more</button>
        </div>
      </div>


     <div className='flex  gap-10 justify-center min-h-lvh items-end pt-96 relative'>
        <Card star={Star}/>
        <Card star={Star}/>
        <Card star={Star}/>

        <div className=" absolute flex items-center justify-center max-w-md rounded-full -right-52">
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={circle} alt="" />
        </div>
        
     </div>
     <div className='flex w-full justify-center my-20'>
            <button className='rounded-button border px-7 py-1 '>Back to top</button>
    </div>
       
        
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

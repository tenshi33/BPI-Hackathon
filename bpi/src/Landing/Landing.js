import React from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { actionName } from "../redux/actions";
import Splash from '../assets/splash.png'
import circle from '../assets/circle.png'
import Navigation from '../components/Navigation.jsx';
import Card from '../components/Card.jsx';
import { useEffect } from 'react';
import Star from '../assets/ai.png'

const Landing = (props) => {
  const navigate = useNavigate()
  const handleLogin=()=>{
    navigate('/login')
  }
  const handleAbout = ()=>{
    navigate('/about')
  }

  useEffect(() => {
    if (localStorage.getItem('userID')) {
        
        navigate(`/protected/${props.userID}`);
    }
}, [props.userID, navigate]);
 
    return (
    <div className='w-full'>

    <Navigation/>
    <div className='m-auto py-28 px-7   w-full max-w-7xl' >
        
      <div className='flex relative  ' >
        <div className='flex flex-col gap-5 ml-5'>
          <h1 className='text-6xl text-white max-w-2xl' >Welcome to Project Sol <br />- Your Trusted Banking Chat Assistant</h1>
          <p className='text-white text-sm font-light max-w-2xl'>Discover how Project SOL revolutionizes decision-making for Micro, Small, and Medium Enterprises (MSMEs) with localized generative AI solutions. We’re here to make advanced technology accessible, secure, and tailored to your business needs.</p>
          <button className='text-white  py-1 px-8  w-fit rounded-button border' onClick={handleLogin}>Continue</button>
        </div>

        <div className=" relative flex items-center justify-center max-w-md rounded-full -right-64">
               <img className='z-10 absolute animate-spin-slow ' src={Splash} alt="" />
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={circle} alt="" />
        </div>


    

      </div>




      <div className='flex relative  items-center  justify-end h-lvh'>
        
        <div className=" absolute flex items-center justify-center max-w-4xl rounded-full -left-2/4 top-10">
               <img className='z-10 absolute animate-spin-slow' src={circle} alt="" />
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={circle} alt="" />
        </div>

        <div className='z-20 max-w-xl text-right '>
          <h2 className='text-left text-2xl'>Who we are</h2>
          <p className='text-right font-light text-xl my-3'>We are Team Sol, a group of passionate innovators dedicated to empowering Micro, Small, and Medium Enterprises (MSMEs) through cutting-edge AI solutions.
</p>
          <button className='rounded-button px-6 py-1 border' onClick={handleAbout}>Learn more</button>
        </div>
      </div>


     <div className='flex m-auto  w-full gap-10 justify-center  items-end  '>
        <Card star={Star} title="AI-Powered Decision Support" paragraph="From sales forecasting to customer targeting, our tools are built to optimize every aspect of your business."/>
        <Card star={Star} title="Automated Database Query Assistant" paragraph="Easily access personalized insights with our automated system that retrieves and processes your business data securely."/>
        <Card star={Star} title="Tailored Solutions for MSMEs" paragraph="Whether you're in retail, manufacturing, or services, our platform adapts to your unique challenges and goals."/>

        <div className=" absolute flex items-center justify-center max-w-md rounded-full -right-52">
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={circle} alt="" />
        </div>
        
     </div>
     <div className='flex w-full justify-center my-10'>
            <button className='rounded-button border px-7 py-1 '  ><a href='#back-to-top'>Back to top</a></button>
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

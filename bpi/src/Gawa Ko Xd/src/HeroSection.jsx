import React from 'react'
import myImage from './assets/fluid-sphere.png'
import Splash from './assets/splash.png'
import { Link } from 'react-router-dom'
import About from './assets/router/About'


const Components = () => {
  return (
    <div className='my-28 mx-7 absolute'>

      <div className='flex relative'>


        <div className='flex flex-col gap-5'>
          <h1 className='text-6xl text-white max-w-2xl'>Welcome to Project Sol <br />- Your Trusted Banking Chat Assistant</h1>
          <p className='text-white text-sm font-light max-w-2xl'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
          <Link to={'/profiles'} className='text-white rounded-button py-1 px-8 border w-fit'>Continue</Link>
        </div>

        <div className=" relative flex items-center justify-center max-w-md rounded-full -right-64  -bottom-16 ">
               <img className='z-10 absolute animate-spin-slow' src={Splash} alt="" />
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={myImage} alt="" />
        </div>


    

      </div>




      <div className='flex relative  items-center  justify-end h-lvh'>
        
        <div className="  absolute flex items-center justify-center max-w-5xl rounded-full -left-2/4 top-10">
               <img className='z-10 absolute animate-spin-slow' src={myImage} alt="" />
              <img className=" object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge" src={myImage} alt="" />
        </div>

        <div className='z-20 max-w-xl text-right '>
          <h2 className='text-left text-2xl'>Who we are</h2>
          <p className='text-right font-light text-xl my-3'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
          <Link className='rounded-button px-6 py-1 border' to={'/about'}>Learn more</Link>
        </div>
      </div>
     

      

    </div>
  )
}

export default Components
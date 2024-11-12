import React, { useState,useEffect } from 'react';
import { connect } from "react-redux";
import { actionName } from "../redux/actions";
import Navigation from '../components/Navigation.jsx';
import registerImage from '../assets/registerImage.png'
import circle from '../assets/circle.png'
import { useNavigate } from 'react-router-dom';


const Register = (props) => {
  const navigate = useNavigate()
  const initialF = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    age: '',
  }
  const [formData, setFormData] = useState(initialF);

  useEffect(() => {
    if (localStorage.getItem('userID') ) {
        
        navigate(`/protected/${props.userID}`);
    }
    console.log(props.userID)
}, [props.userID, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    props.registerUser(formData)
    setFormData(initialF)
  };

  return (
    <div>

   <Navigation/>

   <div className='w-full min-h-lvh py-28 relative'>

       <div className='flex w-register-width h-register-height bg-custom-gradient m-auto items-center rounded-xl'>
        <div className='w-1/2 h-full py-14'>

          <div className='w-input-width m-auto'>

            <h2 className='text-4xl w-40  mb-20	'>Create an account</h2>
        
              <form className='grid gap-input-gap text-sm font-light'onSubmit={handleSubmit}>
                <input

                  type="input"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                
                placeholder='Fullname' className='h-register w-full   text-slate-600 bg-input-bg rounded-lg px-4 border-none'/>
                
                <input 
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                
                placeholder='Age' className='h-register w-full   text-slate-600 bg-input-bg rounded-lg px-4 border-none'/>
                <input
                
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                
                placeholder='Contact Number' className='h-register w-full   text-slate-600 bg-input-bg rounded-lg px-4 border-none'/>
                <input
                
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                
                 placeholder='Email' className='h-register w-full   text-slate-600 bg-input-bg rounded-lg px-4 border-none'/>
                <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                
                placeholder='Password' className='h-register w-full   text-slate-600 bg-input-bg rounded-lg px-4 border-none'/>
                <button className='w-full h-11 bg-login-btn hover:bg-fuchsia-950 border-none mt-16 border rounded-xl' type='submit'>Submit</button>

                
              </form>

            
          </div>
        </div>


            <div className='w-1/2 h-full'>
              <img className='rounded-3xl w-full h-full object-cover' src={registerImage} alt='Register Page'/>
            </div>
          
          </div>
          <div className=" absolute flex items-center justify-center max-w-72 rounded-full top-14 left-10">
                     <img className="animate-spin-slow  object-fill rounded-full blur-3xl bg-gradient-to-bl from-glow-primary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20" src={circle} alt="" />
                </div>
                
                <div className=" absolute flex items-center justify-center max-w-lg rounded-full -right-10 -bottom-20 ">
                     <img className=" animate-spin-slow object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20" src={circle} alt="" />
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
    registerUser : actionName.registerUser

};

const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };

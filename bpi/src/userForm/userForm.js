import React, { useState, } from 'react';
import { connect } from "react-redux";
import { actionName } from "../redux/actions";
import Navigation from '../components/Navigation.jsx'
function UserForm(props){
  const [formData, setFormData] = useState({
/*     fullName: '',
    email: '',
    password: '',
    phone: '',
    age: '', */
    _id : props.userID,
    occupation: '',
    income: '',
    financialGoals: '',
    loansDepts: '',
    savings: '',
    businessName: '',
    industry : '',
    employees:'',
    revenue: '',
    shortTermGoals: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    props.postUserForm(formData)
    
  };

  return (
    <div className='max-w-7xl m-auto'>
      <Navigation/>
      
      <div className='w-input-field-width h-input-field-height m-auto rounded-2xl py-20 bg-custom-gradient border'>
          <div className='max-w-4xl m-auto flex flex-col gap-20 border'>
              <div className='grid gap-4'>
                  <h2 className='text-4xl'>Gather Data</h2>
                  <p className='text-sm max-w-56 text-gray-400'>we need to gather data to specify the information need for this application </p>
              </div>
              <form action="" className='grid grid-rows-4 grid-flow-col gap-5 border'>
                  <input type="text" placeholder='Occupation'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='income'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='financial goals'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Loan Debts'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Business Name'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Industry'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Employees'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Revenue'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Savings'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Short Term Goals'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
                  <input type="text" placeholder='Long Term Goals'  className='bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm '/>
              </form>
              <div className='m-auto w-full  flex justify-center'>
                  <button type='Submit' className='hover:bg-fuchsia-950 duration-500 m-auto  px-28 py-4 rounded-lg bg-login-btn' >Submit</button>
              </div>
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
    postUserForm: actionName.postUserForm,
    registerUser : actionName.registerUser

};

const connectedUserForm = connect(mapState, actionCreators)(UserForm);
export { connectedUserForm as UserForm };

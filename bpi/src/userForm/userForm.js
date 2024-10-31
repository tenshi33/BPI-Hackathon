import React, { useState, } from 'react';
import { connect } from "react-redux";
import { actionName } from "../redux/actions";

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
    <div className="User-form">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <label>occupation</label>
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />

        <label>income</label>
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          required
        />

        <label>Financial Goals</label>
        <input
          type="text"
          name="financialGoals"
          value={formData.financialGoals}
          onChange={handleChange}
          required
        />

        <label>Loans Depts</label>
        <input
          type="number"
          name="loansDepts"
          value={formData.loansDepts}
          onChange={handleChange}
          required
        />

        <label>Savings</label>
        <input
          type="number"
          name="savings"
          value={formData.savings}
          onChange={handleChange}
          required
        />
        
        <label>businessName</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />

        <label>industry</label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />

        <label>Number of Employees</label>
        <input
          type="number"
          name="employees"
          value={formData.employees}
          onChange={handleChange}
          required
        />

        <label>Revenue</label>
        <input
          type="number"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          required
        />

        <label>short Term Goals</label>
        <input
          type="number"
          name="shortTermGoals"
          value={formData.shortTermGoals}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
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

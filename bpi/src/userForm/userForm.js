import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { actionName } from "../redux/actions";
import Navigation from "../components/Navigation.jsx";
import { useNavigate } from "react-router-dom";

function UserForm(props) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    _id: props.userID,
    occupation: "",
    income: "",
    financialGoals: "",
    loansDepts: "",
    savings: "",
    businessName: "",
    industry: "",
    employees: "",
    revenue: "",
    shortTermGoals: "",
  });

      
  useEffect(() => {
    if (!localStorage.getItem('userID') ) {
        
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
    props.postUserForm(formData);
  };

  return (
    <div className="max-w-7xl m-auto">
      <Navigation />
      <div className="w-input-field-width h-input-field-height m-auto rounded-2xl py-20 bg-custom-gradient border">
        <div className="max-w-4xl m-auto flex flex-col gap-20 border">
          <div className="grid gap-4">
            <h2 className="text-4xl">Gather Data</h2>
            <p className="text-sm max-w-56 text-gray-400">
              we need to gather data to specify the information need for this
              application{" "}
            </p>
          </div>
          <form
            action=""
            className="grid grid-rows-4 grid-flow-col gap-5 border"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.occupation}
              onChange={handleChange}
            />
            <input
              type="text"
              name="income"
              placeholder="income"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.income}
              onChange={handleChange}
            />
            <input
              type="text"
              name="financialGoals"
              placeholder="financial goals"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.financialGoals}
              onChange={handleChange}
            />
            <input
              type="text"
              name="loansDepts"
              placeholder="Loan Debts"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.loansDepts}
              onChange={handleChange}
            />
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.businessName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.industry}
              onChange={handleChange}
            />
            <input
              type="text"
              name="employees"
              placeholder="Employees"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.employees}
              onChange={handleChange}
            />
            <input
              type="text"
              name="revenue"
              placeholder="Revenue"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.revenue}
              onChange={handleChange}
            />
            <input
              type="text"
              name="savings"
              placeholder="Savings"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.savings}
              onChange={handleChange}
            />
            <input
              type="text"
              name="shortTermGoals"
              placeholder="Short Term Goals"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.shortTermGoals}
              onChange={handleChange}
            />
            <input
              type="text"
              name="longTermGoals"
              placeholder="Long Term Goals"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm "
              value={formData.longTermGoals}
              onChange={handleChange}
            />
                      <div className="m-auto w-full flex justify-center">
            <button
              type="submit"
              className="hover:bg-fuchsia-950 duration-500 m-auto px-28 py-4 rounded-lg bg-login-btn"
            >
              Submit
            </button>
          </div>
          </form>

        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  userID: state.reducerName.userID,
});

const actionCreators = {
  postUserForm: actionName.postUserForm,
};

const connectedUserForm = connect(mapState, actionCreators)(UserForm);
export { connectedUserForm as UserForm };

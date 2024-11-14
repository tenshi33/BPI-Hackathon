import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionName } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import circle from "../assets/circle.png";

function UserForm(props) {
  const navigate = useNavigate();
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
    if (!localStorage.getItem("userID")) {
      navigate(`/protected/${props.userID}`);
    }
    console.log(props.userID);
  }, [props.userID, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.values(formData).every(value => value.trim() !== "")) {
      console.log(formData);
      await props.postUserForm(formData);
      navigate(`/protected/${props.userID}`);
    } else {
      console.log("Form is incomplete, cannot submit.");
    }
  };
  

  const handleBack = () => {
    navigate(`/protected/${props.userID}`);
  }

  return (
    <div className="max-w-7xl m-auto mt-10">

      <div className="w-input-field-width h-input-field-height m-auto rounded-2xl py-20 bg-custom-gradient">
        <div className="max-w-4xl m-auto flex flex-col gap-20">
          <div className="grid gap-4">
            <h2 className="text-4xl">Gather Data</h2>
            <p className="text-sm max-w-56 text-gray-400">
              we need to gather data to specify the information needed for this
              application
            </p>
          </div>
          <form
            className="grid grid-rows-4 grid-flow-col gap-5"
          >
            <input
              name="occupation"
              type="text"
              placeholder="Occupation"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="income"
              type="text"
              placeholder="Income"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="financialGoals"
              type="text"
              placeholder="Financial Goals"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="loansDepts"
              type="text"
              placeholder="Loan Debts"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="businessName"
              type="text"
              placeholder="Business Name"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="industry"
              type="text"
              placeholder="Industry"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="employees"
              type="text"
              placeholder="Employees"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="revenue"
              type="text"
              placeholder="Revenue"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="savings"
              type="text"
              placeholder="Savings"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="shortTermGoals"
              type="text"
              placeholder="Short Term Goals"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <input
              name="longTermGoals"
              type="text"
              placeholder="Long Term Goals"
              className="bg-input-bg h-input-height w-input-width rounded-lg px-7 text-white placeholder:text-slate-300 text-sm"
              onChange={handleChange}
              required
            />
            <div>
           
            </div>
            
          </form>

          <div className="m-auto w-full flex justify-center">
              <button
                className="hover:bg-fuchsia-950 duration-500 m-auto px-28 py-4 rounded-lg bg-login-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="hover:bg-fuchsia-950 duration-500 m-auto px-28 py-4 rounded-lg bg-login-btn"
                type="submit"
                onClick={handleBack}
              >
                Back
              </button>
              
            </div>
        </div>
        <div className="absolute flex items-center justify-center max-w-72 rounded-full top-14 left-10">
          <img
            className="animate-spin-slow object-fill rounded-full blur-3xl bg-gradient-to-bl from-glow-primary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20"
            src={circle}
            alt=""
          />
        </div>
        <div className="absolute flex items-center justify-center max-w-lg rounded-full -right-10 -bottom-20">
          <img
            className="animate-spin-slow object-fill rounded-full blur-3xl bg-gradient-to-r from-glow-primary via-glow-secondary to-glow-tertiary shadow-intense-glow filter mix-blend-color-dodge opacity-20"
            src={circle}
            alt=""
          />
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

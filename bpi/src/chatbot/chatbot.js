import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


// Redux
import { connect } from "react-redux";
import { actionName } from "../redux/actions";

const Chatbot = (props) => {
  const navigate = useNavigate()
  const { userID: urlUserID } = useParams();
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    props.getData();
  }, [props, props.message]);

  useEffect(() => {
    if (props.userID !== urlUserID) {
      navigate("/401");
  }
  }, [props.userID, urlUserID, navigate]);


  const handleSend = () => {
    if (userInput.trim()) {
      props.postChatCompletion(userInput);
      setUserInput("");
    }
  };

  function logout() {
        localStorage.removeItem('userID'); 
        props.logoutUser()
        navigate(`/`);

}


  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {props.data
          ?.slice()
          .reverse()
          .map((element, index) => (
            <div key={index} className="chat-message">
              <p>User: {element.question}</p>
              <p>AI: {element.answer}</p>
            </div>
          ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

const mapState = (state) => ({
  data: state.reducerName.data,
  userID: state.reducerName.userID
});

const actionCreators = {
  getData: actionName.getData,
  logoutUser : actionName.logoutUser,
  postChatCompletion: actionName.postChatCompletion,
};


const connectedChatbot = connect(mapState, actionCreators)(Chatbot);
export { connectedChatbot as Chatbot };

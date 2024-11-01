import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
//import { TypeAnimation } from "react-type-animation";

// Redux
import { connect } from "react-redux";
import { actionName } from "../redux/actions";

const Chatbot = (props) => {
  const navigate = useNavigate()
  const  idUrl  = useParams();
  const [userInput, setUserInput] = useState("");
  //const [chatHistory, setchatHistory] = useState([])

  useEffect(() => {
    props.getData(idUrl);
  }, [props, props.message, idUrl]);

  useEffect(() => {
    console.log(idUrl)
    console.log(props.userID)
    if (props.userID === idUrl) {
      navigate("/401");
  }
  }, [props.userID, idUrl, navigate]);


  const handleSend = async () => {
    if (userInput.trim()) {
      console.log(idUrl, "handle send")
      await props.postChatCompletion(userInput,idUrl);
      setUserInput("");
      // setchatHistory({
      //   propmt :userInput,
      //   responseAI: props.message
      // })
    }
  };

  function logout() {
        localStorage.removeItem('userID'); 
        props.logoutUser()
        navigate(`/Login`);

}

  function userForm(){

    navigate(`/protected/form/${props.userID}`);
  }



  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {props.data
          .map((element, index) => (
            <div key={index} className="chat-message">
              <p>User: {element.prompt}</p>
              <p>AI: {element.reponseAI}</p>
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
        <button onClick={()=>handleSend()}>Send</button>
      </div>
      <button onClick={logout}>LOGOUT</button>
      <button onClick={userForm}>userForm</button>

    </div>
  );
};

const mapState = (state) => ({
  data: state.reducerName.data,
  userID: state.reducerName.userID,
  message: state.reducerName.message
});

const actionCreators = {
  getData: actionName.getData,
  logoutUser : actionName.logoutUser,
  postChatCompletion: actionName.postChatCompletion,
};


const connectedChatbot = connect(mapState, actionCreators)(Chatbot);
export { connectedChatbot as Chatbot };

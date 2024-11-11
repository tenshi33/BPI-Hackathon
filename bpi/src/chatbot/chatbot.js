import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionName } from "../redux/actions";

const Chatbot = (props) => {
  const navigate = useNavigate();
  const idUrl = useParams();
  const [userInput, setUserInput] = useState("");
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [currentConvo, setCurrentConvo] = useState([]);

  useEffect(() => {
    const savedConvo = JSON.parse(localStorage.getItem('currentConvo'));
    if (savedConvo) {
      setCurrentConvo(savedConvo);
    }
  }, []);


  useEffect(() => {
    props.getData(idUrl);
  }, [props, idUrl]);

  useEffect(() => {
    if (props.userID === idUrl) {
      navigate("/401");
    }
  }, [props.userID, idUrl, navigate]);

  useEffect(() => {
    const move = () => {
      setCurX(prevX => prevX + (tgX - prevX) / 20);
      setCurY(prevY => prevY + (tgY - prevY) / 20);
      requestAnimationFrame(move);
    };

    move();
  }, [tgX, tgY]);

  useEffect(() => {
    localStorage.setItem('currentConvo', JSON.stringify(currentConvo));
  }, [currentConvo]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (props.message) {
      setCurrentConvo(prevConvo => [...prevConvo, { ai: props.message }]);
    }
  }, [props.message]);

  const handleSend = async () => {
    if (userInput.trim()) {
      setCurrentConvo(prevConvo => [...prevConvo, { user: userInput }]);
      await props.postChatCompletion(userInput, idUrl);
      setUserInput("");
    }
  };

  const logout = () => {
    localStorage.removeItem('userID');
    localStorage.removeItem('currentConvo');
    props.logoutUser();
    navigate(`/Login`);
  };

  const userForm = () => {
    navigate(`/protected/form/${props.userID}`);
  };


  const reset = () => {
    props.reset(idUrl);
    setCurrentConvo([]);
    localStorage.removeItem('currentConvo');
  };


  return (
    <div className="chatbot-container">
       <button onClick={logout}>LOGOUT</button>
      <button onClick={userForm}>User Form</button>
      <button onClick={reset}>Reset</button>
      <div className="chat-history">
        {currentConvo.map((element, index) => {
          if (element.user) {
            return (
              <div key={index} className="chat-message-user">
                <p>{element.user}</p>
              </div>
            );
          }
          if (element.ai) {
            return (
              <div key={index} className="chat-message-ai">
                <p>{element.ai}</p>
              </div>
            );
          }
          return null; 
        })}
      </div>

     
      <div className="input-container">
        <input
          className='w-input-width h-10 border-none bg-input-bg text-slate-400  rounded-lg px-3 text-sm'
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

     

    </div>
  );
};

const mapState = (state) => ({
  data: state.reducerName.data,
  userID: state.reducerName.userID,
  message: state.reducerName.message,
});

const actionCreators = {
  getData: actionName.getData,
  logoutUser: actionName.logoutUser,
  postChatCompletion: actionName.postChatCompletion,
  reset: actionName.reset,
};

const connectedChatbot = connect(mapState, actionCreators)(Chatbot);
export { connectedChatbot as Chatbot };

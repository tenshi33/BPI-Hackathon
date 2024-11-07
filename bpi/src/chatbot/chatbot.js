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
    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSend = async () => {
    if (userInput.trim()) {
      await props.postChatCompletion(userInput, idUrl);
      setUserInput("");
    }
  };

  const logout = () => {
    localStorage.removeItem('userID');
    props.logoutUser();
    navigate(`/Login`);
  };

  const userForm = () => {
    navigate(`/protected/form/${props.userID}`);
  };

  const reset = () => {
    props.reset(idUrl);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {props.data.map((element, index) => (
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
        <button onClick={handleSend}>Send</button>
      </div>

      <button onClick={logout}>LOGOUT</button>
      <button onClick={userForm}>User Form</button>
      <button onClick={reset}>Reset</button>

      <div className="gradient-bg">
        <svg
          viewBox="0 0 100vw 100vw"
          xmlns='http://www.w3.org/2000/svg'
          className="noiseBg"
        >
          <filter id='noiseFilterBg'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.6'
              stitchTiles='stitch'
            />
          </filter>
          <rect width='100%' height='100%' preserveAspectRatio="xMidYMid meet" filter='url(#noiseFilterBg)' />
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" style={{ transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)` }}></div>
        </div>
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

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionName } from "../redux/actions";
import ChatbotSearch from '../components/ChatbotSeach.jsx';

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
      {/* <button onClick={logout}>LOGOUT</button>
      <button onClick={userForm}>User Form</button>
      <button onClick={reset}>Reset</button> */}
      {/* <div className="chat-history">
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

     
      <div className="input-container flex border">
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
      </div> */}



<div className="m-auto max-w-5xl min-h-screen">
        <div className="h-screen w-10/12 m-auto my-10 -scroll-m-44 backdrop-blur-3xl ">
          <div className="flex flex-col h-screen  ">
            <div className="w-full py-10 text-white font-bold text-4xl backdrop-blur-3xl ">
              Welcome to Project Sol - Your Trusted Banking Chat Assistant
            </div>
            <div className='flex justify-start gap-3 '>
            <button className='bg-slate-900 px-8 py-2 rounded-xl mb-10 hover:bg-slate-800 duration-500 max-w-40' onClick={reset}>Reset</button>
            <button className='bg-slate-900 px-8 py-2 rounded-xl mb-10 hover:bg-slate-800 duration-500 max-w-40' onClick={userForm}>Field</button>
            <button className='bg-slate-900 px-8 py-2 rounded-xl mb-10 hover:bg-slate-800 duration-500 max-w-40' onClick={logout}>Log out</button>
            </div>
          
            <div className="flex-1 flex-col-reverse overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-none" >
              <div className="flex items-end justify-end space-x-2">
                <div className="bg-slate-600/10 rounded-lg px-4 py-2 text-white max-w-2xl w-auto text-md">
                  Can you help me with my question?
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="bg-transparent rounded-lg px-4 py-5 text-white max-w-3xl w-auto font-normal text-md">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, amet voluptatum. Deserunt molestias a laudantium accusantium, officia harum possimus quaerat illum magnam placeat. Aspernatur pariatur voluptate hic ab ratione vero, nesciunt atque aliquam porro similique autem deserunt nostrum ipsam ipsa optio repellendus iste veniam sed dolorem ex omnis debitis quia! Unde quisquam iste fugiat magnam dolores, fugit debitis necessitatibus? Possimus architecto nisi harum quo culpa et officia placeat illum voluptates. Atque expedita quod deserunt tenetur quia, amet ad in officia unde modi nulla? Iure nisi expedita praesentium temporibus esse cum sed delectus dolore est eveniet optio, asperiores officia ex ad.
                </div>
              </div>
              <div className="flex items-end justify-end space-x-2">
                <div className="bg-slate-600/10 rounded-lg px-4 py-2 text-white max-w-2xl w-auto text-md font-normal">
                  What is bpi
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="bg-transparent rounded-lg px-4 py-5 text-white max-w-3xl w-auto font-normal text-md">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae facere ut voluptatum veniam eum itaque nam nesciunt enim doloremque excepturi minus soluta dignissimos, iusto laudantium omnis veritatis repellat corrupti nisi! Dolore fugiat aspernatur qui cumque explicabo laudantium nostrum pariatur!
                </div>
                
              </div>
              <div className="flex items-end justify-end space-x-2">
                <div className="bg-slate-600/10 rounded-lg px-4 py-2 text-white max-w-2xl font-normal w-auto text-md">
                  Can you help me with my question?
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="bg-transparent rounded-lg px-4 py-5 text-white max-w-3xl w-auto font-normal text-md">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="flex items-end justify-end space-x-2">
                <div className="bg-slate-600/10 rounded-lg px-4 py-2 text-white max-w-2xl w-auto text-md font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ab, nemo fuga facilis doloribus aliquam repellendus non numquam totam.
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="bg-transparent rounded-lg px-4 py-5 text-white max-w-3xl w-auto font-normal text-md">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae facere ut voluptatum veniam eum itaque nam nesciunt enim doloremque excepturi minus soluta dignissimos, iusto laudantium omnis veritatis repellat corrupti nisi! Dolore fugiat aspernatur qui cumque explicabo laudantium nostrum pariatur!
                </div>
                
              </div>

              {/* Repeat messages as needed */}
            </div>

            {/* Chatbot component */}
            <ChatbotSearch/>
            
          </div>
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

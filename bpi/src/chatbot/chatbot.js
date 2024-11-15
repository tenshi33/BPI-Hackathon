import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionName } from "../redux/actions";
import exitImage from "../assets/exit.png"
import circle from '../assets/circle.png'
const Chatbot = (props) => {
  const navigate = useNavigate();
  const idUrl = useParams();
  const [userInput, setUserInput] = useState("");
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

  const handleSend = async () => {
    if (userInput.trim()) {
      setCurrentConvo(prevConvo => [...prevConvo, { user: userInput }]);
      await props.postChatCompletion(userInput, idUrl);
      setUserInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem('currentConvo', JSON.stringify(currentConvo));
  }, [currentConvo]);


  useEffect(() => {
    if (props.message) {
      setCurrentConvo(prevConvo => [...prevConvo, { ai: props.message }]);
    }
  }, [props.message]);


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
   


<div className="m-auto max-w-5xl ">
        <div className="h-screen w-10/12 m-auto my-10 -scroll-m-44 backdrop-blur-3xl ">
          <div className="flex flex-col h-screen">
            <div className="w-full py-10 text-white font-bold text-4xl backdrop-blur-3xl ">
              Welcome to Project Sol - Your Trusted Banking Chat Assistant
            </div>
            <div className='flex justify-start gap-3 '>
            <button className='bg-slate-900 px-8 py-2 rounded-xl mb-10 hover:bg-slate-800 duration-500 max-w-40' onClick={reset}>Reset</button>
            <button className='bg-slate-900 px-8 py-2 rounded-xl mb-10 hover:bg-slate-800 duration-500 max-w-40' onClick={userForm}>Field</button>
            <button className='bg-slate-900 px-8 py-2 rounded-xl mb-10 hover:bg-slate-800 duration-500 max-w-40' onClick={logout}>Log out</button>
            </div>
          
            <div className="flex-1 flex-col-reverse overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-none" >
             
            {currentConvo.map((element,index)=>{

              if(element.user){
                return(

             <div key={index} className="flex items-end justify-end space-x-2">

             <div className="bg-slate-600/10 rounded-lg px-4 py-2 text-white max-w-2xl w-auto text-md">
               <p>{element.user}</p>
             </div>
           </div>
                )
              }

              if(element.ai){
                return (

              <div key={index} className="flex space-x-2">
              <div className="bg-transparent rounded-lg px-4 py-5 text-white max-w-3xl w-auto font-normal text-md">
                <p>{element.ai}</p>
              </div>
            </div>
                )
              }

            })}




            </div>

            {/* Chatbot component */}
            <div className="flex justify-center drop-shadow-2xl">
            <div className="flex items-center border border-none rounded-full pl-4 pr-1 py-1 max-w-4xl w-full bg-background-gray-opacity">
                <textarea
                    className="flex-1 resize-none outline-none text-lg bg-transparent placeholder-slate-300  text-white pl-6"
                    rows="1"
                    placeholder="Message Project Sol..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <button
                    onClick={handleSend}
                    className="duration-500 hover:bg-slate-500 w-20 py-3  bg-slate bg-slate-400 rounded-Button-radius"
                >
                    <img className="max-w-5 m-auto" src={exitImage} alt="" />
                </button>
            </div>
        </div>
      
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

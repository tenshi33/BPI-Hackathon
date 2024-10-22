import React, { useEffect, useState } from "react";

// Redux
import { connect } from "react-redux";
import { actionName } from "../redux/actions"; 

const Chatbot = (props) => {
   const [botResponse, setbotResponse] = useState([]);
   const [userInput, setUserInput] = useState('');

//    useEffect(() => {

//    }, []);

   useEffect(() => {
       if (props.message.length > 0) {
           setbotResponse(props.message);
       }
   }, [props.message]);

   const handleSend = () => {
       if (userInput.trim()) {
           props.postChatCompletion(userInput);
           setUserInput('');
       }
   };

   return (
       <div>
           <h1>{botResponse}</h1>
           <input
               type="text"
               value={userInput}
               onChange={(e) => setUserInput(e.target.value)}
               placeholder="Type your message..."
               onKeyPress={(e) => {
                   if (e.key === 'Enter') {
                       handleSend();
                   }
               }}
           />
           <button onClick={handleSend}>Send</button>
       </div>
   );
};

const mapState = (state) => ({
   message: state.reducerName.message,
   data: state.reducerName.data,
});

const actionCreators = {
   getData: actionName.getData,
   postChatCompletion: actionName.postChatCompletion,
};

// Connect component with Redux
const connectedChatbot = connect(mapState, actionCreators)(Chatbot);
export { connectedChatbot as Chatbot };

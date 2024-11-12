import React, { useState } from "react";
import exitImage from '../assets/exit.png'
function ChatbotSearch() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            // Handle message send logic
            console.log("Message sent:", message);
            setMessage("");
        }
    };

    return (
        <div className="flex justify-center drop-shadow-2xl">
            <div className="flex items-center border border-none rounded-full pl-4 pr-1 py-1 max-w-4xl w-full bg-background-gray-opacity">
                <textarea
                    className="flex-1 resize-none outline-none text-lg bg-transparent placeholder-slate-300  text-white pl-6"
                    rows="1"
                    placeholder="Message Project Sol..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
    );
}

export default ChatbotSearch;

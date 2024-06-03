import  { useState } from "react";
import "./InputChat.css";
import { CiImageOn } from "react-icons/ci";
import { TiMicrophoneOutline } from "react-icons/ti";

const InputChat = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent sending empty messages
    onSendMessage(message);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="input_chat_container">
      <form onSubmit={handleSubmit} className="input_chat">
        <input
          type="text"
          className="input_chat_el"
          placeholder="Enter a message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="badge badge_right">
          <CiImageOn size={22} />
        </div>
        <div className="badge">
          <TiMicrophoneOutline size={22} />
        </div>
        <button type="submit" style={{ display: "none" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default InputChat;

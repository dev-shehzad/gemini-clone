import { useEffect, useRef } from "react";
import "./ChatArea.css";

const ChatArea = ({ chatMessages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]); // Dependency array includes chatMessages to trigger scroll on update

  return (
    <div className="chat_area">
      <div className="chat_area_main">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`chat_message ${msg.type}`}>
            <strong>{msg.senderLogo}</strong> <p>{msg.message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;

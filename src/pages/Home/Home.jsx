import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import InputChat from "../../components/InputChat/InputChat";
import ChatArea from "../../components/ChatArea/ChatArea";
import { RxAvatar } from "react-icons/rx";
import { FaGoogle } from "react-icons/fa";
function useOutsideAlerter(ref, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    // {
    //   id: 1,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Starting the day with a fresh mindset!",
    //   type: "sent",
    // },
    // {
    //   id: 2,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Absolutely, any plans for today?",
    //   type: "received",
    // },
    // {
    //   id: 3,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Focusing on the new UI design. How about you?",
    //   type: "sent",
    // },
    // {
    //   id: 4,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "I'm reviewing the backend code for optimization.",
    //   type: "received",
    // },
    // {
    //   id: 5,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Sounds productive! Let's catch up later about the updates.",
    //   type: "sent",
    // },
    // {
    //   id: 6,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Definitely, looking forward to it.",
    //   type: "received",
    // },
    // {
    //   id: 7,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Also, we need to discuss the client's feedback.",
    //   type: "sent",
    // },
    // {
    //   id: 8,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Agreed, let's schedule a meeting for that.",
    //   type: "received",
    // },
    // {
    //   id: 9,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Will do. I'll send an invite for tomorrow.",
    //   type: "sent",
    // },
    // {
    //   id: 10,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Perfect, thanks!",
    //   type: "received",
    // },
    // {
    //   id: 11,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "No problem. Have a great day ahead!",
    //   type: "sent",
    // },
    // {
    //   id: 12,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "You too, catch you later!",
    //   type: "received",
    // },
    // {
    //   id: 13,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Starting the day with a fresh mindset!",
    //   type: "sent",
    // },
    // {
    //   id: 14,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Absolutely, any plans for today?",
    //   type: "received",
    // },
    // {
    //   id: 15,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Focusing on the new UI design. How about you?",
    //   type: "sent",
    // },
    // {
    //   id: 16,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "I'm reviewing the backend code for optimization.",
    //   type: "received",
    // },
    // {
    //   id: 17,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Sounds productive! Let's catch up later about the updates.",
    //   type: "sent",
    // },
    // {
    //   id: 18,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Definitely, looking forward to it.",
    //   type: "received",
    // },
    // {
    //   id: 19,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Also, we need to discuss the client's feedback.",
    //   type: "sent",
    // },
    // {
    //   id: 20,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Agreed, let's schedule a meeting for that.",
    //   type: "received",
    // },
    // {
    //   id: 32,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message: "Will do. I'll send an invite for tomorrow.",
    //   type: "sent",
    // },
    // {
    //   id: 21,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "Perfect, thanks!",
    //   type: "received",
    // },
    // {
    //   id: 22,
    //   sender: "Gemini",
    //   senderLogo: <FaGoogle size={22} />,
    //   message:
    //     "Star Wars: Episode III – Revenge of the Sith (2005): The conclusion of the prequel trilogy, showcasing Anakin Skywalker's fall to the dark side and the birth of Darth Vader. Guardians of the Galaxy (2014): A spacefaring adventure filled with humor and heart, featuring a ragtag team of heroes who must save the galaxy.Guardians of the Galaxy Vol. 2 (2017): The sequel to Guardians of the Galaxy, with more action, humor, and character development. Children of Men (2006): A bleak but thought-provoking film set in a future where humanity has become infertile, following a man tasked with finding a woman who can still become pregnant.",
    //   type: "sent",
    // },
    // {
    //   id: 23,
    //   sender: "Azaz",
    //   senderLogo: <RxAvatar size={25} />,
    //   message: "You too, catch you later!",
    //   type: "received",
    // },
    // Add more unique messages as needed
  ]);
  const sidebarRef = useRef(null);

  useOutsideAlerter(sidebarRef, () => setSidebarOpen(false)); // Add this line

  const handleSendMessage = (message) => {
    const newMessage = {
      id: chatMessages.length + 1, // Simple ID generation
      sender: "User", // You might want to adjust this based on your needs
      senderLogo: <RxAvatar size={22} />, // Adjust according to the sender
      message: message,
      type: "sent", // or "received" based on the context
    };
    setChatMessages([...chatMessages, newMessage]);
  };
  return (
    <div className={`home_container`}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapse={sidebarCollapse}
        setSidebarCollapse={setSidebarCollapse}
        sidebarRef={sidebarRef}
      />
      <main
        className={`home_main ${sidebarCollapse ? "sidebar_collapse" : ""}`}
      >
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <ChatArea chatMessages={chatMessages} />
        <InputChat onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
};

export default Home;

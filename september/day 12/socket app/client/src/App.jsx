import { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client";
import ChatIcon from "./components/ChatIcon";

const socket = io.connect("http://localhost:3001");

export default function App() {
  const [message, setMessage] = useState("");
  const [messageRecived, setMessageRecieved] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setMessageRecieved(data.message);
    });
  }, [socket]);
  return (
    <>
      <div className="container">
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatIcon />
              <h2 className="logo-text">Chat</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

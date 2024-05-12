// Chatting.js

import React, { useState } from "react";
import "./Chatting.scss";

const Chatting = () => {
  const [messages, setMessages] = useState([
    { sender: "You", text: "Hi, there!" }, // Sample initial message
    { sender: "Other", text: "Hello! How can I help you?" }, // Sample initial message
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        sender: "You",
        text: inputMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="container chat-container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card chat-card">
            <div className="card-body">
              <div className="message-box">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.sender === "You"
                        ? "message my-message"
                        : "message other-message"
                    }
                  >
                    <div>
                      <div className="name">{message.sender}</div>
                      <div className="text">{message.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="typebox">
                <input
                  type="text"
                  className="form-control"
                  id="message-input"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  style={{ width: "calc(100% - 100px)" }}
                />
                <button
                  className="btn btn-primary"
                  id="send-message"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;

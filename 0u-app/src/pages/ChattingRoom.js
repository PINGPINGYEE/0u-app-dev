import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/ChattingRoom.css";

function ChattingRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const { nickname } = location.state || { nickname: "알 수 없음" };
  const displayName = nickname && nickname.trim() ? nickname : "판매자";

  const [messages, setMessages] = useState([
    { id: 1, sender: "you", text: "안녕하세요!" },
    { id: 2, sender: "me", text: "안녕하세요! 무엇을 도와드릴까요?" },
    { id: 3, sender: "you", text: "이 상품에 대해 더 알고 싶어요." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, sender: "me", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="chatting-container">
      <header className="chatting-header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h1 className="header-title">{displayName}와의 채팅</h1>
      </header>
      <div className="chatting-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chatting-message ${message.sender === "me" ? "sent" : "received"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatting-input">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          전송
        </button>
      </div>
    </div>
  );
}

export default ChattingRoom;

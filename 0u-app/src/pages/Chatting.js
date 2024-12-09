import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "../css/Chatting.css";

const messages = [
  { name: "MACBOOK PRO 1", time: "3:40 PM", status: "Unread", id: "@SG원넓이", notification: 2 },
  { name: "MACBOOK PRO 2", time: "3:40 PM", status: "Unread", id: "@닉넴뭐하징", notification: 1 },
  { name: "캠핑 텐트", time: "3:35 PM", status: "Read", id: "@기믹노나마에와", notification: 0 },
  { name: "인디언 텐트", time: "3:30 PM", status: "Read", id: "@기미기미나우", notification: 0 },
  { name: "아이폰 14", time: "3:25 PM", status: "Unread", id: "@네고레츠고", notification: 3 },
  { name: "아이패드 프로", time: "3:20 PM", status: "Read", id: "@핑안좋은핑핑이", notification: 0 },
  { name: "노트북", time: "3:15 PM", status: "Unread", id: "@징징대는징징이", notification: 1 },
  { name: "모니터", time: "3:10 PM", status: "Read", id: "@수박이박수", notification: 0 },
  { name: "키보드", time: "3:05 PM", status: "Unread", id: "@스리슬쩍스리랑카", notification: 0 },
];
const Chatting = () => {
  const navigate = useNavigate();

  const handleChatClick = (chat) => {
    navigate(`/chatting-room`, { state: { nickname: chat.id } });
  };

  return (
    <div className="chatting-container">
      <header className="chatting-header">
        <button className="back-button" onClick={() => navigate("/main")}>←</button>
        <h2 className="chatting-title">채팅</h2>
      </header>
      <div className="chatting-tabs">
        <button className="tab active">All</button>
        <button className="tab">Unread</button>
        <button className="tab">Read</button>
      </div>
      <ul className="chatting-list">
        {messages.map((chat, index) => (
          <li key={index} className="chatting-item" onClick={() => handleChatClick(chat)}>
            <div className="chat-avatar"></div>
            <div className="chat-details">
              <h3 className="chat-name">{chat.name}</h3>
              <p className="user-id">{chat.id}</p>
            </div>
            <div className="chat-status">
              <span className="chat-time">{chat.time}</span>
              {chat.notification > 0 && <span className="notification-badge">{chat.notification}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chatting;
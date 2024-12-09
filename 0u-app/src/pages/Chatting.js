import React from "react";
import "../css/Chatting.css";

const messages = [
  { name: "MACBOOK PRO 1", time: "3:40 PM", status: "Unread", avatar: "🟢" , id: "@SG원넓이"},
  { name: "MACBOOK PRO 2", time: "3:40 PM", status: "Unread", avatar: "🟢", id: "@닉넴뭐하징"},
  { name: "캠핑 텐트", time: "3:35 PM", status: "Read", avatar: "🔵" ,id: "@기믹노나마에와"},
  { name: "인디언 텐트", time: "3:30 PM", status: "Read", avatar: "🟡" ,id: "@기미기미나우"},
  { name: "아이폰 14", time: "3:25 PM", status: "Unread", avatar: "🔴" ,id:"@네고레츠고"},
  { name: "아이패드 프로", time: "3:20 PM", status: "Read", avatar: "🟣", id:"@핑안좋은핑핑이" },
  { name: "노트북", time: "3:15 PM", status: "Unread", avatar: "🟢", id:"@징징대는징징이" },
  { name: "모니터", time: "3:10 PM", status: "Read", avatar: "🔵" ,id:"@dedsfs"},
  { name: "키보드", time: "3:05 PM", status: "Unread", avatar: "🟡", id:"@스리슬쩍스리랑카" },
];

const Chatting = () => {
  return (
    <div className="chatting-container">
      <header className="chatting-header">
        <button className="back-button">←</button>
        <h1 className="chatting-title">CHAT</h1>
      </header>
      <div className="chatting-tabs">
        <button className="tab active">All</button>
        <button className="tab">Unread</button>
        <button className="tab">Read</button>
      </div>
      <ul className="chatting-list">
        {messages.map((chat, index) => (
          <li key={index} className="chatting-item">
            <div className="chat-avatar">{chat.avatar}</div>
            <div className="chat-details">
              <h3 className="chat-name">{chat.name}</h3>
              <p className="chat-message">{chat.message}</p>
            </div>
            <span className="chat-time">{chat.time}</span>
            <div className="user-id">{chat.id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chatting;

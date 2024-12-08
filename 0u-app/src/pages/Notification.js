import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "../css/Notification.css"; // Notification 페이지 스타일 파일

function Notification() {const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/main"); // Notification 페이지로 이동
  };
  const notifications = [
    {
      id: 1,
      title: "Indian Tents",
      description: "생활의 다리미 님이 좋아요를 눌렀습니다.",
      date: "NOV 15, 2024 5:06 PM",
      image: "https://via.placeholder.com/50", // 이미지 URL 대체
    },
    {
      id: 2,
      title: "MACBOOK PRO 16GB 1TB",
      description: "애플둥둥이 님이 채팅을 보냈습니다.",
      date: "NOV 14, 2024 3:31 PM",
      image: "https://via.placeholder.com/50", // 이미지 URL 대체
    },
    {
      id: 3,
      title: "MACBOOK PRO 16GB 1TB",
      description: "치이카와는 귀여워 님이 좋아요를 눌렀습니다.",
      date: "NOV 13, 2024 7:11 PM",
      image: "https://via.placeholder.com/50", // 이미지 URL 대체
    },
  ];

  return (
    <div className="notification-container">
      <header className="notification-header">
        <button className="back-button" onClick={handleBackClick}>←</button>
        <h1 className="header-title">Feed</h1>
      </header>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div className="notification-item" key={notification.id}>
            <img
              src={notification.image}
              alt={notification.title}
              className="notification-image"
            />
            <div className="notification-content">
              <h2 className="notification-title">{notification.title}</h2>
              <p className="notification-description">
                {notification.description}
              </p>
              <p className="notification-date">{notification.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;

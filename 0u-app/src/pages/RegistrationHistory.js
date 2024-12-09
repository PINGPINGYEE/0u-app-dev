import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Order.css"; // CSS 파일 가져오기

const Order = () => {

  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  const handleBackClick = () => {
    navigate("/profile"); // Profile 페이지로 이동
  };
  // 더미 데이터
  const orders = [
    {
      title: "APPLE PENCIL 2th Gen",
      date: "24.11.07",
      duration: "(14일간)",
      price: "20,000",
      code: "SDKF23SDKFAA",
    },
    {
      title: "ROLEX DAY DATE",
      date: "24.11.11",
      duration: "(7일간)",
      price: "21,000",
      code: "GEKF6I4JFVEW",
    },
  ];

  return (
    <div className="order-container">
      {/* 헤더 */}
      <header className="order-header">
      <button className="back-button" onClick={handleBackClick}>←</button> {/* 뒤로가기 버튼 */}
        <h1 className="order-title">등록내역</h1>
      </header>
      <p className="header-divider" /> {/* 추가된 부분 */}

      {/* 주문 목록 */}
      <div className="order-list">
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-item-header">
              <h2 className="order-title">{order.title}</h2>
              {order.status && <span className="order-status">{order.status}</span>}
            </div>
            <p className="order-date">
              {order.date} {order.duration}
            </p>
            <hr className="order-divider" />
            <div className="order-details">
              <p className="order-detail">
              </p>
              <p className="order-detail">
                <span>가격</span> <span className="price-bold">{order.price}</span>
              </p>
              <p className="order-detail">
                <span>주문 코드</span> {order.code}
              </p>
              <p className="order-review">
                <span>수정하기 &nbsp;{'>'}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

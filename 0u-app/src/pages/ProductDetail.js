import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProductDetail.css";

function ProductDetail() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/main");
  };

  const handleRentClick = () => {
    console.log("대여하기 버튼 클릭됨");
    alert("대여 신청이 완료되었습니다!");
  };

  const handleChatClick = () => {
    const renterId = "생활의다리미"; // 대여자의 ID
    navigate("/chatting-room", { state: { renterId } });
  };

  const [reviews, setReviews] = useState([
    { id: 1, author: "사용가리", content: "훌륭한 상품입니다!" },
    { id: 2, author: "이거추천쪼가리", content: "너무 깨끗하고 좋아요." },
  ]);

  return (
    <div className="product-detail-container">
      <header className="product-detail-header">
        <button className="back-button" onClick={handleBackClick}>
          ←
        </button>
        <h1 className="header-title">상품 상세</h1>
      </header>
      <div className="product-image">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="product-image-display"
        />
      </div>
      <div className="product-info">
        <h2 className="product-title">Nike Air Max 270</h2>
        <p className="product-subtitle">
          대여자: 생활의다리미 <span className="product-group">355그루</span>
        </p>
        <p className="product-price">₩35,000</p>
        <p className="product-period">대여 가능 기간: 2024.11.18 ~ 2024.11.30</p>
        <p className="product-description">
          상품 설명: 편안한 착용감과 트렌디한 스타일의 나이키 에어맥스 신발입니다.
          운동이나 일상 활동에 적합합니다.
        </p>
      </div>
      <div className="product-actions">
        <button className="rent-button" onClick={handleRentClick}>
          대여하기
        </button>
        <button className="chat-button" onClick={handleChatClick}>
          채팅하기
        </button>
      </div>
      <div className="reviews-section">
        <h2>후기</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p className="review-author">{review.author}</p>
            <p className="review-content">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;

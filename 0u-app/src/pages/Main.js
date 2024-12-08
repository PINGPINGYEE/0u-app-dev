import React from "react";
import "../css/Main.css"; // src/css 폴더에 있는 스타일 파일

function Main() {
  return (
    <div className="main-container">
      <header className="header">
        <i className="fas fa-search icon"></i>
        <h1 className="title">0U</h1>
        <div>
          <i className="fas fa-bell icon"></i>
          <i className="fas fa-user icon"></i>
        </div>
      </header>
      <div className="banner">
        <h2>빌릴수록 더욱 아끼는 환경,</h2>
        <h3>환경을 보호하는 소비</h3>
      </div>
      <div className="cards">
        {/* 상품 1 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Nike Air Max"
            className="card-image"
          />
          <div className="card-content">
            <p className="card-title">Nike Air Max 27, ...</p>
            <p className="card-subtitle">
              생활의다리미 <span className="card-group">355그루</span>
            </p>
            <p className="card-price">₩35,000</p>
            <p className="card-period">24.11.18 (13일간)</p>
          </div>
        </div>
        {/* 상품 2 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="MacBook Pro"
            className="card-image"
          />
          <div className="card-content">
            <p className="card-title">MacBook Pro 32, ...</p>
            <p className="card-subtitle">
              장충동왕족발 <span className="card-group">412그루</span>
            </p>
            <p className="card-price">$50,000</p>
            <p className="card-period">24.11.20 (2일간)</p>
          </div>
        </div>
        {/* 상품 3 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Camping Tent"
            className="card-image"
          />
          <div className="card-content">
            <p className="card-title">Camping Tent</p>
            <p className="card-subtitle">
              머니먼일 <span className="card-group">278그루</span>
            </p>
            <p className="card-price">₩12,000</p>
            <p className="card-period">24.11.22 (7일간)</p>
          </div>
        </div>
        {/* 상품 4 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Gaming Chair"
            className="card-image"
          />
          <div className="card-content">
            <p className="card-title">Gaming Chair</p>
            <p className="card-subtitle">
              개임이좋아요 <span className="card-group">198그루</span>
            </p>
            <p className="card-price">₩45,000</p>
            <p className="card-period">24.11.25 (3일간)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

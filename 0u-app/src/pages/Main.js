import React from "react";
import "../css/Main.css"; // src/css 폴더에 있는 스타일 파일

function Main() {
  return (
    <div className="main-container">
      <header className="header">
        {/* 검색 아이콘 */}
        <img
          src="/Search.png"
          alt="Search Icon"
          className="icon"
        />
        {/* 로고 이미지 */}
        <img
          src="/Icon.png"
          alt="0U Logo"
          className="logo"
        />
        <div className="header-icons">
          {/* 알림 아이콘 */}
          <img
            src="/Notification.png"
            alt="Notification Icon"
            className="icon"
          />
          {/* 메시지 아이콘 */}
          <img
            src="/Message.png"
            alt="Message Icon"
            className="icon"
          />
        </div>
      </header>
      <div className="banner">
        <h2>빌릴수록 더욱 아끼는 환경, 환경을 보호하는 소비</h2>
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
            <p className="card-price">₩20,000</p>
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
            <p className="card-title">JBL Bluetooth S...</p>
            <p className="card-subtitle">
              스피커어헉 <span className="card-group">198그루</span>
            </p>
            <p className="card-price">₩45,000</p>
            <p className="card-period">24.11.25 (3일간)</p>
          </div>
        </div>
        {/* 상품 5 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Camping Tent"
            className="card-image"
          />
          <div className="card-content">
            <p className="card-title">Crayon 32 Colors</p>
            <p className="card-subtitle">
              캐쵸크레용 <span className="card-group">215그루</span>
            </p>
            <p className="card-price">₩5,000</p>
            <p className="card-period">24.11.21 (5일간)</p>
          </div>
        </div>
        {/* 상품 6 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Camping Tent"
            className="card-image"
          />
          <div className="card-content">
            <p className="card-title">Renton</p>
            <p className="card-subtitle">
              왜거기랜턴을 <span className="card-group">22그루</span>
            </p>
            <p className="card-price">₩1,000</p>
            <p className="card-period">24.11.30 (5일간)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

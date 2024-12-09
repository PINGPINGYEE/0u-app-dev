import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/BottomNavigation.css"; // 스타일 파일

function BottomNavigation() {
  const location = useLocation();
  return (
    <nav className="bottom-navigation">
      <Link to="/main" className={`nav-item ${location.pathname === "/main" ? "active" : ""}`}>
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link to="/list-category" className={`nav-item ${location.pathname === "/list-category" ? "active" : ""}`}>
        <i className="fas fa-th-large"></i>
        <span>Category</span>
      </Link>
      <Link
        to="/product-registration"
        className={`nav-item ${location.pathname === "/product-registration" ? "active" : ""}`}
      >
        <i className="fas fa-plus-circle"></i>
        <span>Register</span>
      </Link>
      <Link to="/profile" className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}>
        <i className="fas fa-user"></i>
        <span>Profile</span>
      </Link>
    </nav>
  );
}

export default BottomNavigation;

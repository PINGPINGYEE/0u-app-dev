import React from "react";
import "../css/Login.css"; // CSS 파일 가져오기

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <h1>0U</h1>
      </div>
      <h2 className="login-title">Welcome to 0U</h2>
      <p className="login-subtitle">Sign in to continue</p>

      <form className="login-form">
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>

      <p className="login-or">OR</p>

      <div className="login-social">
        <button className="social-button">Login with Google</button>
        <button className="social-button">Login with Naver</button>
      </div>

      <div className="login-footer">
        <a href="#" className="login-link">
          Forgot Password?
        </a>
        <br />
        <a href="#" className="dont-have">
          Don't have an account? <a href="#" className="login-link">Register</a>
        </a>
      </div>
    </div>
  );
};

export default Login;

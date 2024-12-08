import React from "react";
import "../css/Login.css"; // CSS 파일 가져오기

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-login">
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

      {/* OR 구분선 */}
      <div className="login-or-container">
        <div className="login-or-line"></div>
        <div className="login-or-text">OR</div>
        <div className="login-or-line"></div>
      </div>

      <div className="login-social">
        <button className="social-button">Login with Google</button>
        <button className="social-button">Login with Naver</button>
      </div>

      <div className="login-footer">
        <a href="#" className="login-link">
          Forgot Password?
        </a>
        <br />
        <span className="dont-have">
          Don't have an account? <a href="#" className="login-link">Register</a>
        </span>
      </div>
    </div>
  );
};

export default Login;

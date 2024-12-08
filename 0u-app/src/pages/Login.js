import React, { useState } from "react";
import "../css/Login.css"; // CSS 파일 가져오기
import { useNavigate } from "react-router-dom"; // 로그인 성공 시 이동

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 하드코딩된 계정 정보
    const hardcodedEmail = "adm@hkr.kr";
    const hardcodedPassword = "admhkr";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      alert("Login successful!");
      navigate("/main"); // 로그인 성공 시 메인 페이지로 이동
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="logo-login">
        <h1>0U</h1>
      </div>
      <h2 className="login-title">Welcome to 0U</h2>
      <p className="login-subtitle">Sign in to continue</p>

      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 이메일 입력 핸들러
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 핸들러
        />
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>

      {error && <p className="login-error">{error}</p>} {/* 에러 메시지 */}

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

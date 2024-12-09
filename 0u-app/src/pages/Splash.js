import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import "../css/Splash.css"; // CSS 파일 가져오기

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1.5초 후 로그인 화면으로 이동
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    // 컴포넌트가 언마운트될 때 타이머 클리어
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-logo">
      <img
          src="/Icon.png"
          alt="0U Logo"
        />
      </div>
    </div>
  );
};

export default Splash;

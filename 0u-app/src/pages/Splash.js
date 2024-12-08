import React from "react";
import "../css/Splash.css"; // CSS 파일 가져오기

const Splash = () => {
  return (
    <div className="splash-container">
      <div className="splash-logo">
        <img src="/icon.png" alt="Icon Logo" className="splash-image" />
      </div>
    </div>
  );
};

export default Splash;

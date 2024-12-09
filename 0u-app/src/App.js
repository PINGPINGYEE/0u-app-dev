import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// 페이지 컴포넌트 임포트
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Notification from "./pages/Notification";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Chatting from "./pages/Chatting";
import ListCategory from "./pages/ListCategory";
import ChattingRoom from "./pages/ChattingRoom";
import ProductRegistration from "./pages/ProductRegistration";
import BottomNavigation from "./components/BottomNavigation"; // 하단 네비게이션 컴포넌트

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
        <Route path="/" element={<Splash />} /> {/* 루트 경로에 Splash 설정 */}
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<WithBottomNav Component={Main} />} />
          <Route path="/notification" element={<WithBottomNav Component={Notification} />} />
          <Route path="/order" element={<WithBottomNav Component={Order} />} />
          <Route path="/profile" element={<WithBottomNav Component={Profile} />} />
          <Route path="/chatting" element={<WithBottomNav Component={Chatting} />} />
          <Route path="/list-category" element={<WithBottomNav Component={ListCategory} />} />
          <Route path="/chatting-room" element={<WithBottomNav Component={ChattingRoom} />} />
          <Route path="/product-registration" element={<WithBottomNav Component={ProductRegistration} />} />
        </Routes>
      </div>
    </Router>
  );
}

// 하단 네비게이션 바 포함 컴포넌트
function WithBottomNav({ Component }) {
  const location = useLocation();
  return (
    <div className="with-bottom-nav">
      <Component />
      {/* Splash와 Login 페이지를 제외한 경로에 네비게이션 바 표시 */}
      {location.pathname !== "/splash" && location.pathname !== "/login" && <BottomNavigation />}
    </div>
  );
}


export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 페이지 컴포넌트 임포트
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Notification from "./pages/Notification";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Chatting from "./pages/Chatting";
import ListCategory from "./pages/ListCategory";

function App() {
  return (
    <Router>
      {/* 라우트 설정 */}
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/list-category" element={<ListCategory />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      <div style={styles.container}>
        <h1>App Navigation</h1>
        <div style={styles.nav}>
          {/* 페이지로 이동하는 버튼 */}
          <Link to="/splash" style={styles.button}>Splash</Link>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/main" style={styles.button}>Main</Link>
          <Link to="/notification" style={styles.button}>Notification</Link>
          <Link to="/order" style={styles.button}>Order</Link>
          <Link to="/profile" style={styles.button}>Profile</Link>
          <Link to="/chatting" style={styles.button}>Chatting</Link>
          <Link to="/list-category" style={styles.button}>List Category</Link>
        </div>

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
      </div>
    </Router>
  );
}

// 간단한 스타일 객체
const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default App;

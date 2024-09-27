import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/BeforeHeader";
import Footer from "../components/Footer";
import "../assets/css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // 클라이언트 환경에서만 로컬 스토리지에 접근
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // 로그인한 사용자 정보 저장
        navigate("/mypage"); // 로그인 성공 시 마이페이지로 이동
      } else {
        setErrorMessage("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1 className="login-title">Gig-Vibe</h1>
        <div className="login-box">
          <input
            type="text"
            placeholder="아이디"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            로그인
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="additional-options">
            <button className="forgot-password">비밀번호 찾기</button>
            <button className="signup" onClick={handleSignUpClick}>
              회원가입
            </button>
          </div>
        </div>
      </div>
      <Footer element="nexon section gray" />
    </div>
  );
};

export default Login;






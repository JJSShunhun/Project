import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 추가
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Login.css";

const Login = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이션 사용

  const handleLogin = () => {
    // 로그인 버튼 클릭 시 1초 후 메인 페이지로 이동
    setTimeout(() => {
      navigate("/");
    }, 500); //
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
          <input type="text" placeholder="아이디" className="input-field" />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-field"
          />
          <button className="login-button" onClick={handleLogin}>
            로그인
          </button>
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



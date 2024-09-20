import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 추가
import Header from "../components/BeforeHeader";
import Footer from "../components/Footer";
import "../assets/css/SignUpPage.css";

const SignUp = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이션 사용

  const handleSignUp = () => {
    // 1초 후 로그인 페이지로 이동
    setTimeout(() => {
      navigate("/login"); // 로그인 페이지로 이동
    }, 800); 
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <h1 className="signup-title">회원가입</h1>
        <div className="signup-box">
          <input type="text" placeholder="아이디" className="input-field" />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-field"
          />
          <input type="text" placeholder="이름" className="input-field" />
          <input type="text" placeholder="닉네임" className="input-field" />
          <input
            type="email"
            placeholder="이메일 주소"
            className="input-field"
          />
          <button className="signup-button" onClick={handleSignUp}>
            회원가입 완료
          </button>
        </div>
      </div>
      <Footer element="nexon section gray" />
    </div>
  );
};

export default SignUp;




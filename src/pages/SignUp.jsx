import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/BeforeHeader";
import Footer from "../components/Footer";
import "../assets/css/SignUpPage.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    nickname: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    // 클라이언트 환경에서만 로컬 스토리지에 접근
    if (typeof window !== "undefined") {
      // 로컬 스토리지에서 기존 사용자 목록을 가져옴
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // 새로운 사용자 정보 추가
      users.push(formData);

      // 업데이트된 사용자 목록을 다시 로컬 스토리지에 저장
      localStorage.setItem("users", JSON.stringify(users));

      // 1초 후 로그인 페이지로 이동
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <h1 className="signup-title">회원가입</h1>
        <div className="signup-box">
          <input
            type="text"
            name="username"
            placeholder="아이디"
            className="input-field"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="input-field"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="이름"
            className="input-field"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="nickname"
            placeholder="닉네임"
            className="input-field"
            value={formData.nickname}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="이메일 주소"
            className="input-field"
            value={formData.email}
            onChange={handleInputChange}
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






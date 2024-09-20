import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/MyPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyPage() {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleFavoritesClick = () => {
    navigate("/favorites"); // 관심 공연 페이지로 이동
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile-container">
          {profileImage ? (
            <img
              src={profileImage}
              alt="프로필 이미지"
              className="profile-image"
            />
          ) : (
            <div className="default-profile-image">200x200</div>
          )}
          <input
            type="file"
            id="profileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            onClick={() => document.getElementById("profileInput").click()}
          >
            사진 변경하기
          </button>
        </div>

        <div className="info-container">
          <p>이름 : 김성엽</p>
          <p>닉네임 : 주4일제</p>
          <p>이메일 : jack7250@naver.com</p>
          <button onClick={handleFavoritesClick}>나의 관심 공연 바로가기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;


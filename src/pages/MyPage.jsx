import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/MyPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: "", nickname: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // 클라이언트 환경에서만 로컬 스토리지에 접근
    if (typeof window !== "undefined") {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUserInfo({
          name: loggedInUser.name,
          nickname: loggedInUser.nickname,
          email: loggedInUser.email,
        });
      }
      const savedImage = localStorage.getItem("profileImage");
      if (savedImage) {
        setProfileImage(savedImage);
      }
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      if (typeof window !== "undefined") {
        localStorage.setItem("profileImage", imageUrl);
      }
    }
  };

  const handleImageReset = () => {
    setProfileImage(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("profileImage");
    }
  };

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="profile-container">
          {profileImage ? (
            <img src={profileImage} alt="프로필 이미지" className="profile-image" />
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
          <div className="button-group">
            <button onClick={() => document.getElementById("profileInput").click()}>
              사진 변경하기
            </button>
            <button onClick={handleImageReset}>초기화</button>
          </div>
        </div>

        <div className="info-container">
          <p>이름: {userInfo.name}</p>
          <p>닉네임: {userInfo.nickname}</p>
          <p>이메일: {userInfo.email}</p>
          <button onClick={handleFavoritesClick}>나의 관심 공연 바로가기</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;





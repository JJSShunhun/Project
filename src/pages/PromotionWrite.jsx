// src/pages/PromotionWrite.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostWrite from "../components/PostWrite";

const PromotionWrite = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handlePostSubmit = (title, content) => {
    onAddPost(title, content, "promotion"); // "promotion" 카테고리를 추가
    navigate("/promote_perform");
  };

  return (
    <div>
      <Header />
      <PostWrite onAddPost={handlePostSubmit} category="promotion" /> {/* 카테고리 전달 */}
      <Footer />
    </div>
  );
};

export default PromotionWrite;

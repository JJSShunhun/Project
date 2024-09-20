import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostWrite from "../components/PostWrite";

const TogetherWrite = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handlePostSubmit = (title, content) => {
    onAddPost(title, content, "together"); // "together" 카테고리 전달
    navigate("/together");
  };

  return (
    <div>
      <Header />
      <PostWrite onAddPost={handlePostSubmit} category="together" /> {/* 카테고리 전달 */}
      <Footer />
    </div>
  );
};

export default TogetherWrite;



import React, { useState, useEffect } from "react";
import "../assets/css/PostWrite.css";

const PostWrite = ({ onAddPost, category }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");

  // 로그인된 사용자 정보 로컬 스토리지에서 가져오기
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setNickname(loggedInUser.nickname); // 닉네임 설정
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (typeof window !== "undefined") {
      onAddPost(title, content, category, nickname); // 카테고리와 닉네임도 함께 전달
      alert("게시글을 등록했습니다.");
      setTitle(""); // 폼 초기화
      setContent("");
    }
  };

  return (
    <div className="new-post-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">등록</button>
        </form>
      </div>
    </div>
  );
};

export default PostWrite;



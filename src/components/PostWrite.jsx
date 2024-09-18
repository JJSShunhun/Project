import React, { useState } from "react";
import "../assets/css/PostWrite.css";

const PostWrite = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddPost(title, content);
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

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Together = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>같이 봐요!</h1>
      {/* PostList에 카테고리 정보 전달 */}
      <PostList posts={posts} writePath="/together/write" category="together" />
      <Footer />
    </div>
  );
};

export default Together;



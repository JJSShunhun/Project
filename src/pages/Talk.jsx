import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Talk = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>인디토크</h1>
      {/* PostList에 카테고리 정보 전달 */}
      <PostList posts={posts} writePath="/talk/write" category="talk" />
      <Footer />
    </div>
  );
};

export default Talk;


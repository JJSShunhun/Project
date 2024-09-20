import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Review = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>공연 후기</h1>
      {/* PostList에 카테고리 정보 전달 */}
      <PostList posts={posts} writePath="/review/write" category="review" />
      <Footer />
    </div>
  );
};

export default Review;



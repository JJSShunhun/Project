import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Promotion = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>공연 홍보</h1>
      {/* PostList에 카테고리 정보 전달 */}
      <PostList posts={posts} writePath="/promotion/write" category="promotion" />
      <Footer />
    </div>
  );
};

export default Promotion;



import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Promotion = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>공연 홍보</h1>
      <PostList posts={posts} />
      <Footer />
    </div>
  );
};

export default Promotion;

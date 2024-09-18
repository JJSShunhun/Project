import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Review = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>공연 후기</h1>
      <PostList posts={posts} />
      <Footer />
    </div>
  );
};

export default Review;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Together = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>같이 봐요!</h1>
      <PostList posts={posts} />
      <Footer />
    </div>
  );
};

export default Together;

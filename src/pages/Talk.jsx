// import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";

const Talk = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1>인디토크</h1>
      <PostList posts={posts} />
      <Footer />
    </div>
  );
};

export default Talk;

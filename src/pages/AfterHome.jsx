import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const AfterHome = ({ posts }) => {
  return (
    <div>
      <Header />
      <Main posts={posts} />
      <Footer element="nexon section gray" />
    </div>
  );
};

export default AfterHome;

import React from "react";
import Header from "../components/BeforeHeader";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = ({ posts }) => {
  return (
    <div>
      <Header />
      <Main posts={posts} />
      <Footer element="nexon section gray" />
    </div>
  );
};

export default Home;


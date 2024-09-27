import React from "react";
import Preview from "./Preview";
import ConcertList from "./ConcertList";

const Main = ({ posts }) => {
  return (
    <main id="main" role="main">
      <ConcertList element="nexon" />
      <Preview element="section nexon" posts={posts} />
    </main>
  );
};

export default Main;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteConcerts from "../components/FavoriteConcerts"; // 관심 공연 컴포넌트 가져오기

const FavoriteInfo = () => {
  return (
    <div>
      <Header />
      <FavoriteConcerts />
      <Footer />
    </div>
  );
};

export default FavoriteInfo;

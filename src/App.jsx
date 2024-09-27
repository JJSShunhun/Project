// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Home from "./pages/Home";
import AfterHome from "./pages/AfterHome";
import Intro from "./pages/Intro";
import Info from "./pages/Info";
import Find from "./pages/Find";
import Review from "./pages/Review";
import Promotion from "./pages/Promotion";
import Together from "./pages/Together";
import Talk from "./pages/Talk";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ConcertDetail from "./components/ConcertDetail";
import MyPage from "./pages/MyPage";
import TalkWrite from "./pages/TalkWrite";
import TalkDetail from "./pages/TalkDetail";
import TogetherWrite from "./pages/TogetherWrite";
import ReviewWrite from "./pages/ReviewWrite";
import PromotionWrite from "./pages/PromotionWrite";
import FavoriteInfo from "./pages/FavoriteInfo"; 

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPosts = JSON.parse(localStorage.getItem("posts"));
      if (savedPosts) {
        setPosts(savedPosts);
      }
    }
  }, []);

  const handleAddPost = (title, content, category) => {
    if (typeof window !== "undefined") {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        alert("로그인 후 글 작성이 가능합니다.");
        return;
      }

      const nickname = loggedInUser.nickname;
      const postCountKey = `post_count_${category}`;
      let postCount = parseInt(localStorage.getItem(postCountKey), 10) || 0;
      postCount += 1;

      const newPost = {
        id: postCount,
        title,
        content,
        category,
        nickname,
        date: new Date().toLocaleDateString(),
        views: 0,
      };

      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);

      localStorage.setItem(postCountKey, postCount);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/after" element={<AfterHome posts={posts} />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/info_perform" element={<Info />} />
        <Route path="/find_perform" element={<Find />} />
        <Route
          path="/review_perform"
          element={<Review posts={posts.filter((post) => post.category === "review")} />}
        />
        <Route
          path="/promote_perform"
          element={<Promotion posts={posts.filter((post) => post.category === "promotion")} />}
        />
        <Route
          path="/together"
          element={<Together posts={posts.filter((post) => post.category === "together")} />}
        />
        <Route
          path="/talk"
          element={<Talk posts={posts.filter((post) => post.category === "talk")} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/concertinfo/:id" element={<ConcertDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/favorites" element={<FavoriteInfo />} />

        <Route path="/talk/write" element={<TalkWrite onAddPost={handleAddPost} />} />
        <Route path="/together/write" element={<TogetherWrite onAddPost={handleAddPost} />} />
        <Route path="/review/write" element={<ReviewWrite onAddPost={handleAddPost} />} />
        <Route path="/promotion/write" element={<PromotionWrite onAddPost={handleAddPost} />} />

        {/* 카테고리와 글번호를 포함한 경로 설정 */}
        <Route path="/:category/:id" element={<TalkDetail posts={posts} setPosts={setPosts} />} />
      </Routes>
    </>
  );
}

export default App;







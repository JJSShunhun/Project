import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostDetail from "./../components/PostDetail";

const TalkDetail = ({ posts, setPosts }) => {
  const { id, category } = useParams(); // 카테고리와 글번호를 URL에서 가져옴

  // 해당 카테고리와 글번호에 맞는 게시글 찾기
  const post = posts.find((p) => p.id === parseInt(id) && p.category === category);

  if (!post) {
    return <div>글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <Header />
      <PostDetail post={post} posts={posts} setPosts={setPosts} />
      <Footer />
    </div>
  );
};

export default TalkDetail;




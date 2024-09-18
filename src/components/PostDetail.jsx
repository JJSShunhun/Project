import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/PostDetail.css";
// import axios from "axios";

const PostDetail = ({ posts = [], setPosts }) => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [visitCount, setVisitCount] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((response) => {
  //       setPost(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error : ", error);
  //     });
  // }, [id]);

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
      const visitKey = `visit_count_${postId}`;

      // 현재 방문 횟수 가져오기, 없으면 0으로 설정
      let visitInfo = JSON.parse(localStorage.getItem(visitKey)) || {
        count: 0,
        lastVisited: null,
      };

      // 현재 시간
      const now = new Date().getTime();

      if (!visitInfo.lastVisited || now - visitInfo.lastVisited > 1000) {
        // 방문한 지 1초 이상 지난 경우
        const newCount = visitInfo.count + 1;
        setVisitCount(newCount);

        // 조회수 업데이트
        const updatedPosts = posts.map((p) =>
          p.id === postId ? { ...p, views: newCount } : p,
        );
        setPosts(updatedPosts);

        // 방문 정보 업데이트
        localStorage.setItem(
          visitKey,
          JSON.stringify({ count: newCount, lastVisited: now }),
        );
      } else {
        // 마지막 방문 이후 1초 이내에 다시 방문한 경우
        setVisitCount(visitInfo.count);
      }
    }
  }, [postId, posts, setPosts]);

  if (!post) {
    return <div>글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>등록일: {post.date}</p>
      <p>조회수: {visitCount}</p>
      <button onClick={() => navigate(-1)} className="back-btn">
        뒤로가기
      </button>
    </div>
  );
};

export default PostDetail;

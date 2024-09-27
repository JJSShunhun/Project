import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/PostDetail.css";

const PostDetail = ({ posts = [], setPosts }) => {
  const { id, category } = useParams();
  const postId = parseInt(id, 10);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [visitCount, setVisitCount] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // 로그인된 사용자 정보 로컬 스토리지에서 가져오기
  const loggedInUser = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("loggedInUser")) : null;
  const nickname = loggedInUser ? loggedInUser.nickname : "알 수 없음"; // 사용자 닉네임 설정

  const categoryNames = {
    talk: "인디토크",
    together: "같이 봐요",
    promotion: "공연홍보",
    review: "공연후기",
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const foundPost = posts.find((p) => p.id === postId && p.category === category);
      if (foundPost) {
        setPost(foundPost);
        setComments(foundPost.comments || []);
        const visitKey = `visit_count_${category}_${postId}`;
        let visitInfo = JSON.parse(localStorage.getItem(visitKey)) || {
          count: 0,
          lastVisited: null,
        };

        const now = new Date().getTime();

        if (!visitInfo.lastVisited || now - visitInfo.lastVisited > 1000) {
          const newCount = visitInfo.count + 1;
          setVisitCount(newCount);

          const updatedPosts = posts.map((p) => (p.id === postId && p.category === category ? { ...p, views: newCount } : p));
          setPosts(updatedPosts);

          localStorage.setItem(
            visitKey,
            JSON.stringify({ count: newCount, lastVisited: now })
          );
        } else {
          setVisitCount(visitInfo.count);
        }
      }
    }
  }, [postId, category, posts, setPosts]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment) return;

    const newComment = {
      id: comments.length + 1,
      text: comment,
      date: new Date().toLocaleDateString(),
      nickname,
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts.map((p) => (p.id === postId && p.category === category ? updatedPost : p));
    setPosts(updatedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setComment("");
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((c) => c.id !== commentId);
    setComments(updatedComments);

    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts.map((p) => (p.id === postId && p.category === category ? updatedPost : p));
    setPosts(updatedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  return (
    <div className="post-detail-container">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        <span className="post-category">[{categoryNames[category]}]</span>
        <span className="post-nickname">작성자: {post.nickname}</span>
        <span className="post-date">등록일: {post.date}</span>
        <span className="post-views">조회수: {visitCount}</span>
      </div>
      <div className="post-divider"></div>
      <div className="post-content">{post.content}</div>

      <div className="comment-section">
        <h3>댓글</h3>
        <form onSubmit={handleAddComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            required
          />
          <button type="submit">댓글 작성</button>
        </form>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((c) => (
              <div key={c.id} className="comment">
                <p>{c.text}</p>
                <div className="comment-meta">
                  <span className="comment-nickname">{c.nickname}</span>
                  <span className="comment-date"> {c.date}</span>
                </div>
                {c.nickname === nickname && (
                  <button onClick={() => handleDeleteComment(c.id)} className="delete-btn">
                    삭제
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </div>
      </div>

      <button onClick={() => navigate(-1)} className="back-btn">
        뒤로가기
      </button>
    </div>
  );
};

export default PostDetail;







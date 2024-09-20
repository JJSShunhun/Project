import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/PostDetail.css";

const PostDetail = ({ posts = [], setPosts }) => {
  const { id, category } = useParams(); // 카테고리와 글번호를 URL에서 가져옴
  const postId = parseInt(id, 10);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [visitCount, setVisitCount] = useState(0);
  const [comment, setComment] = useState(""); // 댓글 입력 상태
  const [comments, setComments] = useState([]); // 댓글 목록 상태

  // 카테고리 이름 매핑
  const categoryNames = {
    talk: "인디토크",
    together: "같이 봐요",
    promotion: "공연홍보",
    review: "공연후기",
  };

  // 고정 닉네임
  const nickname = "주4일제";

  useEffect(() => {
    // 카테고리와 글번호가 모두 일치하는 게시글 찾기
    const foundPost = posts.find((p) => p.id === postId && p.category === category);
    if (foundPost) {
      setPost(foundPost);
      setComments(foundPost.comments || []); // 게시글에 저장된 댓글 불러오기
      const visitKey = `visit_count_${category}_${postId}`; // 카테고리+글번호로 구분

      let visitInfo = JSON.parse(localStorage.getItem(visitKey)) || {
        count: 0,
        lastVisited: null,
      };

      const now = new Date().getTime();

      if (!visitInfo.lastVisited || now - visitInfo.lastVisited > 1000) {
        const newCount = visitInfo.count + 1;
        setVisitCount(newCount);

        const updatedPosts = posts.map((p) =>
          p.id === postId && p.category === category ? { ...p, views: newCount } : p
        );
        setPosts(updatedPosts);

        localStorage.setItem(
          visitKey,
          JSON.stringify({ count: newCount, lastVisited: now })
        );
      } else {
        setVisitCount(visitInfo.count);
      }
    }
  }, [postId, category, posts, setPosts]);

  // 댓글 추가 함수
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment) return; // 댓글이 비어 있으면 아무 작업도 하지 않음

    const newComment = {
      id: comments.length + 1,
      text: comment,
      date: new Date().toLocaleDateString(),
      nickname, // 댓글에 고정된 닉네임 추가
    };

    const updatedComments = [...comments, newComment]; // 기존 댓글에 새로운 댓글 추가
    setComments(updatedComments); // 상태 업데이트

    // 해당 게시글에 댓글 추가
    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts.map((p) =>
      p.id === postId && p.category === category ? updatedPost : p
    );
    setPosts(updatedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // 로컬 스토리지에 저장
    setComment(""); // 입력란 초기화
  };

  // 댓글 삭제 함수
  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((c) => c.id !== commentId); // 해당 댓글 삭제
    setComments(updatedComments);

    // 게시글 업데이트
    const updatedPost = { ...post, comments: updatedComments };
    const updatedPosts = posts.map((p) =>
      p.id === postId && p.category === category ? updatedPost : p
    );
    setPosts(updatedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // 로컬 스토리지 업데이트
  };

  if (!post) {
    return <div>글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="post-detail-container">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        {/* 카테고리 이름을 등록일 왼쪽에 출력 */}
        <span className="post-category">[{categoryNames[category]}]</span>
        <span className="post-date">등록일: {post.date}</span>
        <span className="post-views">조회수: {visitCount}</span>
      </div>
      {/* 구분선 추가 */}
      <div className="post-divider"></div>
      <div className="post-content">{post.content}</div>

      {/* 댓글 섹션 */}
      <div className="comment-section">
        <h3>댓글</h3>
        {/* 댓글 입력 폼 */}
        <form onSubmit={handleAddComment}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            required
          />
          <button type="submit">댓글 작성</button>
        </form>

        {/* 댓글 목록 출력 */}
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((c) => (
              <div key={c.id} className="comment">
                <p>{c.text}</p>
                <div className="comment-meta">
                  <span className="comment-nickname">{c.nickname}</span>
                  <span className="comment-date"> {c.date}</span> {/* 닉네임과 작성일 순서 변경 */}
                </div>
                <button onClick={() => handleDeleteComment(c.id)} className="delete-btn">
                  삭제
                </button>
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






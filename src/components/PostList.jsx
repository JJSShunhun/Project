import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/PostList.css";
import "../assets/css/Pagination.css";
import Pagination from "react-js-pagination";

const PostList = ({ posts }) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePostClick = (id) => {
    navigate(`/talk/${id}`);
  };

  const handleWriteButtonClick = () => {
    navigate("/talk/write");
  };

  return (
    <div className="post-table-container">
      <div className="post-table">
        <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id} onClick={() => handlePostClick(post.id)}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <Pagination
            activePage={page}
            itemsCountPerPage={postsPerPage}
            totalItemsCount={posts.length}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={handlePageChange}
          />
        </div>
        <div className="btn-container">
          <button className="write-btn" onClick={handleWriteButtonClick}>
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostList;

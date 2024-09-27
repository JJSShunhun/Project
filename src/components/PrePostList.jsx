import React, { useState, useEffect } from "react";
import CommonTable from "./table/CommonTable.jsx";
import CommonTableColumn from "./table/CommonTableColumn.jsx";
import CommonTableRow from "./table/CommonTableRow.jsx";

const PrePostList = ({ posts }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") { // 클라이언트 환경에서만 로컬 스토리지 사용
      setDataList(posts.slice(0, 5)); // 최대 5개의 게시글만 출력되도록 설정
    }
  }, [posts]);

  // 글 제목이 최대 8글자까지만 표시되도록 자르고, 초과하면 "..." 추가
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
      {dataList.length > 0 ? (
        dataList.map((item, index) => (
          <CommonTableRow key={index}>
            <CommonTableColumn>{item.id}</CommonTableColumn>
            <CommonTableColumn>{truncateText(item.title, 8)}</CommonTableColumn>
            <CommonTableColumn>{item.date}</CommonTableColumn>
            <CommonTableColumn>{item.views}</CommonTableColumn>
          </CommonTableRow>
        ))
      ) : (
        <CommonTableRow>
          <CommonTableColumn colSpan="4">등록된 게시글이 없습니다.</CommonTableColumn>
        </CommonTableRow>
      )}
    </CommonTable>
  );
};

export default PrePostList;


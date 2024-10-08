const prepostList = [
  /*{
    no: 1,
    title: "첫번째 게시글입니다.",
    content: "첫번째 게시글 내용입니다.",
    createDate: "2024-9-21",
    readCount: 0,
  },
  {
    no: 2,
    title: "두번째 게시글입니다.",
    content: "두번째 게시글 내용입니다.",
    createDate: "2024-9-21",
    readCount: 0,
  },
  {
    no: 3,
    title: "세번째 게시글입니다.",
    content: "세번째 게시글 내용입니다.",
    createDate: "2024-9-21",
    readCount: 0,
  },
  {
    no: 4,
    title: "네번째 게시글입니다.",
    content: "네번째 게시글 내용입니다.",
    createDate: "2024-9-21",
    readCount: 0,
  },
  {
    no: 5,
    title: "다섯번째 게시글입니다.",
    content: "다섯번째 게시글 내용입니다.",
    createDate: "2024-9-21",
    readCount: 0,
  }, */

];

const getPostByNo = (no) => {
  const array = prepostList.filter((x) => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { prepostList, getPostByNo };

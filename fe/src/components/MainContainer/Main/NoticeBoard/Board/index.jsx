import React from "react";
import Post from "./Post";
import { Container } from "./style";

const post = [
  {
    author: "shmallow",
    img_url:
      "https://pbs.twimg.com/media/EpgvS9jVoAAz1cG?format=jpg&name=small",
    tags: ["안녕", "하세"],
    content: "안녕하세요 아이유입니다.",
    heart: 5,
    comment: ["안녕", "하세"],
    clicked: 10,
  },
  {
    author: "shmallow",
    img_url:
      "https://pbs.twimg.com/media/EpgvS9jVoAAz1cG?format=jpg&name=small",
    tags: ["안녕", "하세"],
    content: "안녕하세요 아이유입니다.",
    heart: 5,
    comment: ["안녕", "하세"],
    clicked: 10,
  },
  {
    author: "shmallow",
    img_url:
      "https://pbs.twimg.com/media/EpgvS9jVoAAz1cG?format=jpg&name=small",
    tags: ["안녕", "하세"],
    content: "안녕하세요 아이유입니다.",
    heart: 5,
    comment: ["안녕", "하세"],
    clicked: 10,
  },
];

// 글 목록을 불러온다.
// 해당 글 목록 개수만큼 보여준다.
const Board = () => {
  return (
    <Container>
      {post.map((element) => (
        <Post post={element} />
      ))}
    </Container>
  );
};

export default Board;

import React from "react";
import {
  Container,
  ImgIcon,
  ContentWrap,
  CommentBtn,
  Comment,
  CommentWrap,
} from "./style";

const post = {
  author: "shmallow",
  img_url: "https://pbs.twimg.com/media/EpgvS9jVoAAz1cG?format=jpg&name=small",
  tags: ["안녕", "하세"],
  content:
    "안녕하세요 아이유입니다. 이 글은 아이유의 엉망라이브입니다! 재밌게 봐주세요~",
  heart: 5,
  comment: [
    {
      createAt: "2020-12-21 15:00:00",
      context: "아이유님 안녕하세요!",
      pw: "1234",
    },
    {
      createAt: "2020-12-21 16:00:00",
      context: "아이유님 반갑습니다!",
      pw: "1234",
    },
    {
      createAt: "2020-12-21 17:00:00",
      context: "연세가 어떻게 되시나요",
      pw: "1234",
    },
  ],
  clicked: 10,
};

const DetailView = () => {
  return (
    <Container>
      <h6>{post.author}</h6>
      <ImgIcon src={post.img_url}></ImgIcon>
      <ContentWrap>{post.content}</ContentWrap>
      <div>
        <ul>
          {post.comment.map((ele) => (
            <Comment>
              <div>{ele.createAt}</div>
              <div>{ele.context}</div>
            </Comment>
          ))}
        </ul>
      </div>
      <CommentWrap>
        <CommentBtn>댓글 작성</CommentBtn>
      </CommentWrap>
    </Container>
  );
};

export default DetailView;

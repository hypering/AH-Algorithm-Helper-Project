import React from 'react';
import {
  Container,
  ImgIcon,
  ContentWrap,
  CommentBtn,
  Comment,
  CommentWrap,
  EmptyText,
} from './style';

const DetailView = ({ post }) => {
  if (!post) return <EmptyText>선택된 글이 없습니다.</EmptyText>;
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

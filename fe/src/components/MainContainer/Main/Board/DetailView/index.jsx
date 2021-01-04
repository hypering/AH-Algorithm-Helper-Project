import React, { useContext } from 'react';
import { CommentStateContext } from '../../Board';
import { CommentDispatchContext } from '../../Board';
import {
  Container,
  ImgIcon,
  ContentWrap,
  CommentBtn,
  Comment,
  CommentWrap,
  EmptyText,
  PostWrap,
  CommentText,
} from './style';

const DetailView = ({ post, setUpdateBoard }) => {
  if (!post) return <EmptyText>선택된 글이 없습니다.</EmptyText>;
  const value = useContext(CommentStateContext);
  const dispatch = useContext(CommentDispatchContext);

  const onChange = (e) => {
    dispatch({
      type: 'CHANGE_VALUE',
      payload: e.target.value,
    });
  };

  const onClick = async () => {
    if (value.length === 0) {
      alert('댓글을 입력하세요!');
      return;
    }

    const response = await fetch('http://localhost:4000/board/comment/write', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardId: post._id,
        context: value,
      }),
    });

    dispatch({
      type: 'CHANGE_VALUE',
      payload: '',
    });

    if (response.status !== 200) {
      alert('댓글 등록에 실패하였습니다.');
      return;
    }
    setUpdateBoard({});
  };

  return (
    <Container>
      <h6>{post.author}</h6>
      <ImgIcon src={post.img_url}></ImgIcon>
      <ContentWrap>{post.content}</ContentWrap>
      <PostWrap>
        {post.comment.length > 0 ? (
          <ul>
            {post.comment.map((ele, index) => (
              <Comment key={index}>
                <div>{ele.createAt}</div>
                <div>{ele.context}</div>
              </Comment>
            ))}
          </ul>
        ) : (
          <h6>No Comment</h6>
        )}
      </PostWrap>
      <CommentWrap>
        <CommentText
          name="content"
          id="boardContent"
          cols="120"
          rows="5"
          value={value}
          onChange={onChange}
        />
        <CommentBtn onClick={onClick}>등록</CommentBtn>
      </CommentWrap>
    </Container>
  );
};

export default DetailView;

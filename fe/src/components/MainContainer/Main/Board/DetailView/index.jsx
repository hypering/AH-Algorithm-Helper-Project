import React, { useContext } from 'react';
import { CommentStateContext } from '../../Board';
import { CommentDispatchContext } from '../../Board';
import { getDate } from '../../../../../lib/getTimer';
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

const DetailView = ({ posts, post, setBoards, setSelectedBoard }) => {
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
    const pw = prompt('비밀번호를 입력하세요! (최소 4글자)');
    if (pw.length < 4) {
      alert('최소 4글자 이상입니다!');
      return;
    }

    const nowDate = getDate(new Date());
    const key = post.comment.length + 1;
    const response = await fetch('http://localhost:4000/board/comment/write', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        boardId: post._id,
        createAt: nowDate,
        context: value,
        password: pw,
        key: key,
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
    post.comment.push({
      createAt: nowDate,
      context: value,
      password: pw,
      key: key,
    });

    const updatedPosts = [...posts];
    setBoards(updatedPosts);
  };

  return (
    <Container>
      <h6>{post.author}</h6>
      <ImgIcon src={post.img_url}></ImgIcon>
      <ContentWrap>{post.content}</ContentWrap>
      <PostWrap>
        {post.comment.length > 0 ? (
          <ul>
            {post.comment.map((ele, index) => {
              const deleteOnClick = async () => {
                const pw = prompt('비밀번호를 입력하세요! (최소 4글자)');
                if (pw !== ele.password) {
                  alert('비밀번호가 일치하지 않습니다!');
                  return;
                }
                const conFirm = confirm('정말 댓글을 삭제하시겠습니까?');
                if (conFirm === false) return;
                const response = await fetch(
                  'http://localhost:4000/board/comment/delete',
                  {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      boardId: post._id,
                      key: ele.key,
                    }),
                  }
                );
                if (response.status !== 200) {
                  alert('댓글 삭제에 실패하였습니다.');
                  return;
                }
                for (let i = 0; i < post.comment.length; i++) {
                  if (post.comment[i].key === ele.key) {
                    post.comment.splice(i, 1);
                  }
                }
                setBoards([...posts]);
              };

              return (
                <Comment key={ele} onClick={deleteOnClick}>
                  <div>{ele.createAt}</div>
                  <div>{ele.context}</div>
                </Comment>
              );
            })}
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

import React, { useContext, useRef } from 'react';
import { CommentStateContext } from '../../../Main';
import { CommentDispatchContext } from '../../../Main';
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
  ProfileImg,
  UserInfoContainer,
  AuthorID,
  PostContent,
} from './style';
import { IsLoginedState } from '../../../../../App';
import { Link } from 'react-router-dom';
const DetailView = ({
  posts,
  post,
  setPost,
  setBoards,
  isModal,
  setModalPost,
}) => {
  const postContentRef = useRef();
  const isLogined = useContext(IsLoginedState);
  const value = useContext(CommentStateContext);
  const dispatch = useContext(CommentDispatchContext);
  if (!post) return <EmptyText>선택된 글이 없습니다.</EmptyText>;
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
    const nowDate = getDate(new Date());
    const response = await fetch(
      `${process.env.BASE_URL}/board/comment/write`,
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          boardId: post._id,
          createAt: nowDate,
          context: value,
          writerId: isLogined.userKey,
        }),
      }
    );

    dispatch({
      type: 'CHANGE_VALUE',
      payload: '',
    });

    if (response.status !== 200) {
      alert('댓글 등록에 실패하였습니다.');
      return;
    }
    const { newCommentId } = await response.json();

    post.comment.push({
      _id: newCommentId,
      createAt: nowDate,
      context: value,
      writerKey: isLogined.userKey,
      writerId: isLogined.userId,
      profile: isLogined.profile,
    });

    postContentRef.current.scrollTop = postContentRef.current.scrollHeight;

    const updatedPosts = [...posts];
    setBoards(updatedPosts);
  };
  const onDeleteClick = async (e) => {
    const answer = confirm('정말 글을 삭제하시겠습니까?');
    if (answer) {
      const response = await fetch(`${process.env.BASE_URL}/board/delete`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          boardId: post._id,
        }),
      });
      if (response.status === 200) {
        const idx = posts.findIndex((e) => post._id === e._id);
        posts.splice(idx, 1);
        if (isModal) {
          setModalPost(null);
        } else {
          setPost(null);
        }
      }
    }
  };
  return (
    <Container isModal={isModal}>
      {post.authorKey === isLogined.userKey && (
        <svg
          aria-label="닫기"
          fill="#00000"
          height="24"
          viewBox="0 0 48 48"
          width="24"
          onClick={onDeleteClick}
        >
          <path
            clipRule="evenodd"
            d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
            fillRule="evenodd"
          ></path>
        </svg>
      )}
      <Link to={`/account/${post.author}`}>
        <UserInfoContainer>
          <ProfileImg>
            {post.profile && (
              <img
                src={
                  `https://kr.object.ncloudstorage.com/algorithm-helper/users/profile/` +
                  post.profile
                }
                alt="프로필 이미지"
              />
            )}
          </ProfileImg>
          <AuthorID>{post.author} </AuthorID>
        </UserInfoContainer>
      </Link>
      <PostContent ref={postContentRef}>
        {post.img_url != '' && !isModal ? (
          <ImgIcon
            src={`https://kr.object.ncloudstorage.com/algorithm-helper/Boards/FreeBoard/${post.img_url}`}
          ></ImgIcon>
        ) : (
          ''
        )}
        <ContentWrap>{post.content}</ContentWrap>
        <PostWrap>
          {post.comment.length > 0 ? (
            <ul>
              {post.comment.map((ele) => {
                const deleteOnClick = async (e) => {
                  if (ele.writerKey !== isLogined.userKey) return;
                  const conFirm = confirm('정말 댓글을 삭제하시겠습니까?');
                  if (conFirm === false) return;
                  const response = await fetch(
                    `${process.env.BASE_URL}/board/comment/delete`,
                    {
                      method: 'post',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      mode: 'cors',
                      credentials: 'include',
                      body: JSON.stringify({
                        boardId: post._id,
                        key: ele._id,
                      }),
                    }
                  );
                  if (response.status !== 200) {
                    alert('댓글 삭제에 실패하였습니다.');
                    return;
                  }
                  for (let i = 0; i < post.comment.length; i++) {
                    if (post.comment[i]._id === ele._id) {
                      post.comment.splice(i, 1);
                    }
                  }
                  setBoards([...posts]);
                };

                return (
                  <Comment key={ele._id}>
                    <Link to={`/account/` + ele.writerId}>
                      <ProfileImg>
                        {ele.profile && (
                          <img
                            src={
                              `https://kr.object.ncloudstorage.com/algorithm-helper/users/profile/` +
                              ele.profile
                            }
                            alt="프로필 이미지"
                          />
                        )}
                      </ProfileImg>
                    </Link>
                    <div className="commentContent" onClick={deleteOnClick}>
                      <div>
                        <span className="writer">{ele.writerId} </span>
                        {getDate(ele.createAt)}
                      </div>
                      <div>{ele.context}</div>
                    </div>
                  </Comment>
                );
              })}
            </ul>
          ) : (
            <h6>No Comment</h6>
          )}
        </PostWrap>
      </PostContent>
      {isLogined.isLogined && (
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
      )}
    </Container>
  );
};

export default DetailView;

import React, { useRef } from 'react';
import { getDate } from 'lib/getTimer';
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
  BoardDate,
} from './style';
import {
  useUserState,
  useCommentState,
  useCommentDispatch,
} from '../../../../../context/index';
import { Link } from 'react-router-dom';
import API from 'lib/api';
import PostDeleteButton from '../../../../Buttons/PostDeleteButton';

const DetailView = ({
  posts,
  post,
  setPost,
  setBoards,
  isModal,
  setModalPost,
}) => {
  const postContentRef = useRef();
  const isLogined = useUserState();
  const value = useCommentState();
  const dispatch = useCommentDispatch();

  if (!post) return <EmptyText>선택된 글이 없습니다.</EmptyText>;

  const onChange = (e) => {
    dispatch({
      type: 'CHANGE_VALUE',
      payload: { value: e.target.value },
    });
  };

  const onClick = async () => {
    if (value.value.length === 0) {
      alert('댓글을 입력하세요!');
      return;
    }
    const nowDate = getDate(new Date());
    const response = await API.post('board/comment/write', {
      boardId: post._id,
      createAt: nowDate,
      context: value.value,
      writerId: isLogined.userKey,
    });

    dispatch({
      type: 'CHANGE_VALUE',
      payload: { value: '' },
    });

    if (!response) {
      alert('댓글 등록에 실패하였습니다.');
      return;
    }

    post.comment.push({
      _id: response,
      createAt: nowDate,
      context: value.value,
      writerKey: isLogined.userKey,
      writerId: isLogined.userId,
      profile: isLogined.profile,
    });

    postContentRef.current.scrollTop = postContentRef.current.scrollHeight;

    const updatedPosts = [...posts];
    setBoards(updatedPosts);
  };

  const onDeleteClick = async () => {
    const answer = confirm('정말 글을 삭제하시겠습니까?');
    if (answer) {
      const deleteResult = await API.post('board/delete', {
        boardId: post._id,
      });
      if (deleteResult) {
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
        <PostDeleteButton onClick={onDeleteClick} />
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
      <BoardDate>{getDate(post.createAt)}</BoardDate>
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
          {post && post.comment && post.comment.length > 0 ? (
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
            value={value.value}
            onChange={onChange}
          />
          <CommentBtn onClick={onClick}>등록</CommentBtn>
        </CommentWrap>
      )}
    </Container>
  );
};

export default DetailView;

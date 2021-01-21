import React, { useContext } from 'react';
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
} from './style';
import { IsLoginedState } from '../../../../../App';
import { Link } from 'react-router-dom';
const DetailView = ({ posts, post, setBoards, isModal }) => {
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

    const updatedPosts = [...posts];
    setBoards(updatedPosts);
  };

  return (
    <Container isModal={isModal}>
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
      <div className="postContent">
        {post.img_url != '' && !isModal ? (
          <div>
            <ImgIcon
              src={`https://kr.object.ncloudstorage.com/algorithm-helper/Boards/FreeBoard/${post.img_url}`}
            ></ImgIcon>
          </div>
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
                  <Comment key={ele._id} onClick={deleteOnClick}>
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
                    <div className="commentContent">
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
      </div>
    </Container>
  );
};

export default DetailView;

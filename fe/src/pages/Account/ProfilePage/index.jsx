import React, { useEffect, useState } from 'react';
import Post from 'components/MainContainer/Main/Board/Board/Post';
import PostModal from 'components/MainContainer/Main/Board/PostModal';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useUserState } from '../../../context/index';
import {
  Container,
  ProfileContainer,
  ProfileContent,
  ProfileImg,
  UserId,
  UserIntContainer,
  UserNameContainer,
  UserPosts,
} from './style';
import API from 'lib/api';

const ProfilePage = ({ match }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [modalPost, setModalPost] = useState(null);
  const { userId } = match.params;
  const isLogined = useUserState();

  const getUser = async () => {
    const user = await API.post('user/getUser', { userId });
    if (!user) setLoaded(false);
    else {
      setPosts(user.posts);
      setUserInfo(user.queryUser);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return loaded ? (
    <Container>
      <ProfileContainer>
        <ProfileImg>
          {userInfo && userInfo.profile && (
            <img
              src={
                `https://kr.object.ncloudstorage.com/algorithm-helper/users/profile/` +
                userInfo.profile
              }
              alt="프로필 이미지"
            ></img>
          )}
        </ProfileImg>
        <ProfileContent>
          <UserNameContainer>
            {userInfo && <UserId>{userInfo.userId}</UserId>}
            <Link to="/account/edit">
              {isLogined && isLogined.userId === userId && (
                <FontAwesomeIcon icon={faUserEdit} color="#707070" />
              )}
            </Link>
          </UserNameContainer>

          <UserIntContainer>
            {userInfo &&
            userInfo.introduction &&
            userInfo.introduction.length >= 1
              ? userInfo.introduction
              : '자기소개가 없습니다.'}
          </UserIntContainer>
          <div className="UserEmailContainer">{userInfo && userInfo.email}</div>
        </ProfileContent>
      </ProfileContainer>
      <UserPosts>
        {posts && posts.length >= 1
          ? posts.map((post) => {
              return (
                <Post
                  post={post}
                  posts={posts}
                  id={post._id}
                  key={post._id}
                  setPosts={setPosts}
                  fromProfile={true}
                  setModalPost={setModalPost}
                />
              );
            })
          : '작성한 글이 없습니다.'}
      </UserPosts>
      {modalPost && posts && (
        <PostModal
          posts={posts}
          setModalPost={setModalPost}
          post={modalPost}
          setPosts={setPosts}
        />
      )}
    </Container>
  ) : (
    '존재 하지 않는 유저 입니다.'
  );
};

export default ProfilePage;

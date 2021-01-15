import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Post from '../../Board/Board/Post';
const Container = styled.div`
  display: flex;
  width: 1720px;
  min-width: 1720px;
  height: 820px;
  min-height: 820px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
const ProfileContainer = styled.div`
  display: flex;
  width: 600px;
  padding: 50px 20px 50px 20px;
  border: 1px solid #efefef;

  margin-bottom: 50px;
`;
const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;
const UserNameContainer = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

  border-bottom: 1px solid #efefef;
`;

const UserIntContainer = styled.div`
  margin-bottom: 20px;
`;
const UserPosts = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
`;

const Profile = ({ match }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { userId } = match.params;

  useEffect(() => {
    fetch('http://127.0.0.1:4000/user/getUser', {
      method: 'Post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
      }),
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((json) => {
          console.log(json);
          setPosts(json.posts);
          setUserInfo(json.queryUser);
          console.log(posts);
          setLoaded(true);
        });
      } else {
        setLoaded(false);
      }
    });
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
        <div className="ProfileContent">
          <UserNameContainer>{userInfo && userInfo.userId}</UserNameContainer>
          <UserIntContainer>
            {userInfo && userInfo.introduction
              ? userInfo.introduction
              : '자기소개가 없습니다.'}
          </UserIntContainer>
          <div className="UserEmailContainer">{userInfo && userInfo.email}</div>
        </div>
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
                />
              );
            })
          : '작성한 글이 없습니다.'}
      </UserPosts>
    </Container>
  ) : (
    '존재 하지 않는 유저 입니다.'
  );
};

export default Profile;

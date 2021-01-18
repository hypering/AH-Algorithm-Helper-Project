import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { IsLoginedState } from '../../../../../App';
import { Redirect } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const EditContainer = styled.div`
  width: 650px;
  border: 1px solid #efefef;
`;
const Header = styled.div`
  margin-top: 50px;
  display: flex;
  margin-bottom: 20px;
`;
const ProfileImgContainer = styled.div`
  margin-left: 50px;
  margin-right: 20px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  & > .hover {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    & > .hoverText {
      font-size: 10px;
      word-break: keep-all;
    }
  }

  &:hover {
    & > img {
      opacity: 0.3;
    }
    & > .hover {
      opacity: 1;
    }
  }
  & > img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 15px;
  & > textarea {
    resize: none;
    width: 300px;
    height: 150px;
  }
  & > input {
    width: 300px;
  }
`;
const ItemName = styled.div`
  & > span {
    padding-right: 5px;
    border-right: 5px solid #707070;
  }
  font-size: 18px;
  font-weight: 600;
  width: 150px;
  text-align: right;
  margin-right: 15px;
`;
const ErrorMsg = styled.div`
  font-size: 15px;
  color: red;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const ButtonAccept = styled.button`
  border: 0;
  outline: 0;
  &:disabled {
    opacity: 0.3;
  }
  color: white;
  background-color: #707070;
  border-radius: 12px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
`;
const Edit = () => {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [disable, setDisable] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const profileImg = useRef();
  const isLogined = useContext(IsLoginedState);
  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  useEffect(() => {
    fetch(`${process.env.BASE_URL}/user/getUserForEdit`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    }).then(async (response) => {
      if (response.status === 200) {
        const json = await response.json();
        setUser(json);
        setLoaded(true);
      }
    });
  }, []);

  useEffect(() => {
    if (user && user.email.match(emailRegExp)) {
      setDisable(false);
    } else setDisable(true);
  }, [user]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userEmail') {
      setUser({ ...user, email: value });
      if (user.email.match(emailRegExp)) {
        setErrorMsg({ ...errorMsg, email: '' });
      } else {
        setErrorMsg({ ...errorMsg, email: '올바르지 않은 이메일입니다.' });
      }
    } else if (name === 'userIntrod') {
      setUser({ ...user, introduction: value });
    } else if (name === 'img') {
      setImg(value);
    }
  };
  const onProfileImgClick = () => {
    profileImg.current.click();
  };
  return loaded && !isLogined && !isLogined.isLogined ? (
    <Redirect to="/" />
  ) : (
    <Container>
      <form
        method="post"
        action={`${process.env.BASE_URL}/user/edit`}
        encType="multipart/form-data"
      >
        <EditContainer>
          <Header>
            <ProfileImgContainer>
              {user && (
                <img
                  onClick={onProfileImgClick}
                  src={`https://kr.object.ncloudstorage.com/algorithm-helper/users/profile/${user.profile}`}
                />
              )}
              <div className="hover">
                <div className="hoverText">프로필 사진 변경</div>
              </div>
            </ProfileImgContainer>

            {user && <span className="userId">{user.userId}</span>}
          </Header>

          <Item>
            <ItemName>
              <span>자기 소개</span>
            </ItemName>
            {user && (
              <textarea
                name="userIntrod"
                value={user.introduction}
                onChange={onChange}
              ></textarea>
            )}
          </Item>
          <Item>
            <ItemName>
              <span>이메일</span>
            </ItemName>
            {user && (
              <input
                type="text"
                name="userEmail"
                value={user.email || ''}
                onChange={onChange}
              />
            )}
            {errorMsg && errorMsg.email && <ErrorMsg>errorMsg.email</ErrorMsg>}
          </Item>
          <ButtonContainer>
            <ItemName />
            {disable ? (
              <ButtonAccept type="submit" disabled>
                적용
              </ButtonAccept>
            ) : (
              <ButtonAccept type="submit">적용</ButtonAccept>
            )}
          </ButtonContainer>
        </EditContainer>
        <input
          type="file"
          hidden
          name="img"
          accept="image/*"
          value={img}
          onChange={onChange}
          ref={profileImg}
        ></input>
      </form>
    </Container>
  );
};
export default Edit;

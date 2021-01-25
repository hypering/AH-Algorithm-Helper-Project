import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  Item,
  ItemName,
  ErrorMsg,
  EditContainer,
  Header,
  ButtonContainer,
  Overlay,
  OverlayText,
  ProfileImgContainer,
  ButtonAccept,
} from 'components/MainContainer/Main/Account/Edit/style';

const Edit = () => {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [disable, setDisable] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const profileImg = useRef();
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
    if (user && user.email && user.email.match(emailRegExp)) {
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
      const { files } = e.target;
      if (files) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = (finishedEvent) => {
          const {
            currentTarget: { result },
          } = finishedEvent;
          setUser({ ...user, profile: result });
        };
      }
      setImg(value);
    }
  };
  const onProfileImgClick = () => {
    profileImg.current.click();
  };

  return (
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
                  src={
                    profileImg && profileImg.current.files[0]
                      ? `${user.profile}`
                      : `https://kr.object.ncloudstorage.com/algorithm-helper/users/profile/${user.profile}`
                  }
                />
              )}
              <Overlay>
                <OverlayText onClick={onProfileImgClick}>
                  프로필 사진 변경
                </OverlayText>
              </Overlay>
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

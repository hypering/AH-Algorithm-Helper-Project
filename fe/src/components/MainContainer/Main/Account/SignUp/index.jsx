import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { IsLoginedState } from '../../../../../App';
import { Redirect } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  width: 1720px;
  min-width: 1720px;
  height: 820px;
  min-height: 820px;
  justify-content: center;
  align-items: center;
`;
const SignUpContainer = styled.div`
  border: 1px solid #efefef;
  flex-grow: 1;
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 550px;
  & > form {
    max-width: 350px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    min-width: 285px;
    & > input {
      margin-top: 10px;
      padding: 5px 10px 5px 10px;
      outline: 0;
    }
    & > .errorMsg {
      display: flex;
      height: 16px;
      & > span {
        font-size: 12px;
        color: red;
      }
    }
  }
`;
const SignupHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #707070;
`;
const SignupButton = styled.button`
  width: 100%;
  background-color: #707070;
  color: white;
  font-size: 12px;
  margin-top: 5px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: 0;
  outline: 0;

  &:disabled {
    opacity: 0.5;
  }
`;
const SignUp = () => {
  const isLogined = useContext(IsLoginedState);
  const [userId, setUserId] = useState('');
  const [idValid, setIdValid] = useState(false);
  const [userPw, setUserPw] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [disable, setDisable] = useState(true);
  const [errorMsg, setErrorMsg] = useState({
    idError: '',
    pwdError: '',
    emailError: '',
  });
  const pwdRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userId') {
      setUserId(value);
    } else if (name === 'userPw') {
      setUserPw(value);
    } else {
      setUserEmail(value);
    }
  };

  useEffect(async () => {
    await fetch(`${process.env.BASE_URL}/user/idcheck`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputId: userId,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setIdValid(true);
      } else if (res.status == 409) {
        setIdValid(false);
      }
    });
  }, [userId]);

  useEffect(() => {
    if (
      userPw.match(pwdRegExp) &&
      userEmail.match(emailRegExp) &&
      idValid === true
    ) {
      setDisable(false);
    } else setDisable(true);
  }, [userPw, userEmail, idValid]);

  useEffect(() => {
    let idError = '';
    let pwdError = '';
    let emailError = '';

    if (idValid) {
      idError = '';
    } else {
      idError = '이미 존재하는 아이디 입니다.';
    }
    if (userPw.length >= 1 && !userPw.match(pwdRegExp)) {
      pwdError = '비밀번호는 8~10자리, 영문 숫자 조합이어야 합니다.';
    } else {
      pwdError = '';
    }
    if (userEmail.length >= 1 && !userEmail.match(emailRegExp)) {
      emailError = '유효하지 않은 이메일 입니다.';
    } else {
      emailError = '';
    }
    setErrorMsg({ idError, pwdError, emailError });
  }, [idValid, userPw, userEmail]);
  return isLogined && isLogined.isLogined ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Container>
      <SignUpContainer>
        <SignupHeader>SignUp</SignupHeader>
        <form method="Post" action={`${process.env.BASE_URL}/user/join/`}>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={onChange}
            placeholder="ID 입력"
          />

          <div className="errorMsg">
            <span>{errorMsg.idError}</span>
          </div>

          <input
            type="password"
            name="userPw"
            value={userPw}
            onChange={onChange}
            placeholder="비밀번호 입력"
          />
          <div className="errorMsg">
            <span>{errorMsg.pwdError}</span>
          </div>
          <input
            type="text"
            name="userEmail"
            value={userEmail}
            onChange={onChange}
            placeholder="이메일 입력"
          />
          <div className="errorMsg">
            <span>{errorMsg.emailError}</span>
          </div>
          {disable ? (
            <SignupButton disabled>SignUp</SignupButton>
          ) : (
            <SignupButton type="submit">SignUp</SignupButton>
          )}
        </form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;

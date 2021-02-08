import React, { useContext, useEffect, useState } from 'react';

import { IsLoginedState } from 'App';
import { Redirect } from 'react-router-dom';
import {
  Container,
  ErrorMsg,
  SignupButton,
  SignUpContainer,
  SignupHeader,
} from './style';
import API from 'lib/api';

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
  const idRegExp = /^[0-9a-z]+$/;

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

  const checkUser = async () => {
    const result = await API.post('user/idcheck', { inputId: userId });

    if (result) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  useEffect(async () => {
    if (!userId.match(idRegExp)) setIdValid(false);
    else {
      checkUser();
    }
  }, [userId]);

  useEffect(() => {
    if (
      userId.match(idRegExp) &&
      userPw.match(pwdRegExp) &&
      userEmail.match(emailRegExp) &&
      idValid === true
    ) {
      setDisable(false);
    } else setDisable(true);
  }, [userId, userPw, userEmail, idValid]);

  useEffect(() => {
    let idError = '';
    let pwdError = '';
    let emailError = '';

    if (idValid) {
      idError = '';
    } else {
      if (userId.length >= 1 && !userId.match(idRegExp)) {
        idError = '아이디는 영문 숫자 조합이어야 합니다.';
      } else if (userId.length >= 1) idError = '이미 존재하는 아이디 입니다.';
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
          <ErrorMsg>
            <span>{errorMsg.idError}</span>
          </ErrorMsg>
          <input
            type="password"
            name="userPw"
            value={userPw}
            onChange={onChange}
            placeholder="비밀번호 입력"
          />
          <ErrorMsg>
            <span>{errorMsg.pwdError}</span>
          </ErrorMsg>
          <input
            type="text"
            name="userEmail"
            value={userEmail}
            onChange={onChange}
            placeholder="이메일 입력"
          />
          <ErrorMsg>
            <span>{errorMsg.emailError}</span>
          </ErrorMsg>
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

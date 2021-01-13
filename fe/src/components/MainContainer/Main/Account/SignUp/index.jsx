import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const SignUpContainer = styled.div`
  border: 1px solid #efefef;

  width: 50%;
  padding-bottom: 50px;
  display: flex;
  align-items: center;

  flex-direction: column;
  & > input {
    margin-top: 10px;
    padding: 5px 10px 5px 10px;

    outline: 0;
  }
  & > form > .errorMsg {
    display: flex;
    height: 16px;
    & > span {
      font-size: 12px;
      color: red;
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
  width: 200px;
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
    await fetch('http://127.0.0.1:4000/user/idcheck', {
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
    if (userPw.length >= 4 && userEmail.length >= 1 && idValid === true) {
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
    if (userPw.length < 4) {
      pwdError = '비밀번호는 4자리 이상이어야 합니다.';
    } else {
      pwdError = '';
    }
    if (userEmail.length < 1) {
      emailError = '유효하지 않은 이메일 입니다.';
    } else {
      emailError = '';
    }
    setErrorMsg({ idError, pwdError, emailError });
  }, [idValid, userPw, userEmail]);

  return (
    <Container>
      <SignUpContainer>
        <SignupHeader>SignUp</SignupHeader>
        <form method="Post" action="http://127.0.0.1:4000/user/join/">
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
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import LoginButton from './LoginButton';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #efefef;
  & > .errorMsgContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    margin: 10px 0 10px 0;
  }
  & > .errorMsgContainer > .errorMsg {
    color: red;
    font-size: 12px;
    margin-right: 180px;
  }
  & > .item {
    width: 100%;
  }
  & > .item > .inputBox {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    justify-content: center;
    & > div {
      width: 120px;
      text-align: right;
      margin-right: 5px;
      & > span {
        font-size: 14px;
      }
    }
    & > input {
      outline: 0;
      padding: 5px 10px 5px 10px;
      overflow: hidden;
      position: relative;
    }
  }
`;
const LoginHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #707070;
`;

const Login = ({ history, setIsLogined }) => {
  const [input, setInput] = useState({ userId: '', userPwd: '' });
  const [disable, setDisable] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const onClick = () => {
    fetch('//127.0.0.1:4000/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: input.userId,
        userPw: input.userPwd,
      }),
    }).then((res) => {
      if (res.status === 401) {
        setErrorMsg('계정 정보를 확인해주세요.');
      } else {
        history.push('/picker');
        setIsLogined(true);
      }
    });
  };
  useEffect(() => {
    if (input.userId.length == 0 || input.userPwd.length == 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [input]);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userId') {
      setInput({ ...input, userId: value });
    } else if (name === 'userPw') {
      setInput({ ...input, userPwd: value });
    }
  };
  return (
    <Container>
      <LoginContainer>
        <LoginHeader>Login</LoginHeader>
        <div className="item">
          <div className="inputBox">
            <input
              type="text"
              name="userId"
              value={input.userId}
              onChange={onChange}
              placeholder="ID 입력"
            ></input>
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="userPw"
              value={input.userPwd}
              onChange={onChange}
              placeholder="Password 입력"
            ></input>
          </div>
        </div>
        <div className="errorMsgContainer">
          <span className="errorMsg">{errorMsg}</span>
        </div>
        <div className="item">
          <LoginButton disable={disable} onClick={onClick} />
        </div>
      </LoginContainer>
    </Container>
  );
};

export default Login;

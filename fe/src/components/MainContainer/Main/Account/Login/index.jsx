import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import LoginButton from 'components/MainContainer/Main/Account/Login/LoginButton';
import { UserDispatch } from 'App';
import {
  Container,
  ErrorMsg,
  ErrorMsgContainer,
  Item,
  Items,
  LoginContainer,
  LoginHeader,
  LoginWrap,
  Partition,
  SignUpButton,
} from './style';
import API from '../../../../../lib/api';

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState({ userId: '', userPwd: '' });
  const [disable, setDisable] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useContext(UserDispatch);

  const onClick = async () => {
    const userInfo = await API.post('user/login', {
      userId: input.userId,
      userPw: input.userPwd,
    });
    if (!userInfo) setErrorMsg('계정 정보를 확인해주세요.');
    else {
      dispatch({ type: 'SET_IS_LOGINED', payload: userInfo });
      history.push('/picker');
    }
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
        <Items>
          <Item>
            <input
              type="text"
              name="userId"
              value={input.userId}
              onChange={onChange}
              placeholder="ID 입력"
            ></input>
          </Item>

          <Item>
            <input
              type="password"
              name="userPw"
              value={input.userPwd}
              onChange={onChange}
              placeholder="Password 입력"
            ></input>
          </Item>
        </Items>
        <ErrorMsgContainer>
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </ErrorMsgContainer>
        <LoginWrap>
          <LoginButton disable={disable} onClick={onClick} />
        </LoginWrap>
        <Partition></Partition>
        <Link to="/account/signup">
          <SignUpButton>Sign Up</SignUpButton>
        </Link>
      </LoginContainer>
    </Container>
  );
};

export default Login;

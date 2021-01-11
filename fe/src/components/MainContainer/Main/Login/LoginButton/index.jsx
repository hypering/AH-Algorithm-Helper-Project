import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    min-width: 200px;
    background-color: #707070;
    color: white;
    font-size: 12px;
    margin-top: 5px;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
    border: 0;
    outline: 0;
  }
`;

const LoginButton = ({ onClick, disable }) => {
  const githubOnClick = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.DEV_CLIENT_ID}&redirect_uri=${process.env.CALLBACK_URL}`;
  };
  return (
    <Container>
      {disable ? (
        <button onClick={onClick} disabled>
          Login
        </button>
      ) : (
        <button onClick={onClick}>Login</button>
      )}
      <button onClick={githubOnClick}>GitHub Login</button>
    </Container>
  );
};

export default LoginButton;

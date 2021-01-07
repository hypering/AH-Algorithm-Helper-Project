import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 170px;
  & > button {
    background-color: #707070;
    color: white;
    font-size: 12px;
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
  return (
    <Container>
      {disable ? (
        <button onClick={onClick} disabled>
          Login
        </button>
      ) : (
        <button onClick={onClick}>Login</button>
      )}
    </Container>
  );
};

export default LoginButton;

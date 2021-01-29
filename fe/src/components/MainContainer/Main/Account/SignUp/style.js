import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const SignUpContainer = styled.div`
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
export const SignupHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #707070;
`;
export const SignupButton = styled.button`
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
export const ErrorMsg = styled.div`
  display: flex;
  height: 16px;
  & > span {
    font-size: 12px;
    color: red;
  }
`;

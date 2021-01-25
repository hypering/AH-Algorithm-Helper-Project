import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const ErrorMsgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin: 10px 0 10px 0;
`;
export const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
`;
export const LoginContainer = styled.div`
  width: 50%;
  min-width: 220px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #efefef;

  & > .item {
  }
  & > .item > .inputBox {
  }
`;
export const LoginHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #707070;
`;
export const LoginWrap = styled.div`
  width: 100%;
`;
export const Partition = styled.div`
  border: 1px solid #efefef;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 210px;
`;
export const SignUpButton = styled.button`
  min-width: 200px;
  background-color: #707070;
  color: white;
  font-size: 12px;
  margin-top: 5px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: white;
  }
`;
export const Items = styled.div`
  width: 100%;
`;

export const Item = styled.div`
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
`;

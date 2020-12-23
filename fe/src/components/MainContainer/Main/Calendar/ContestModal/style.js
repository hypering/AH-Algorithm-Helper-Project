import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 30%;
  height: 35%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
  & > div {
    width: 50px;
    height: 40px;
    line-height: 40px;
    margin-right: 10px;
    border-radius: 20px;
    background-color: #707070;
    color: white;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
    &:hover {
      color: #385185;
      transition: 0.5s;
    }
  }
`;

export const Text = styled.input`
  width: 80%;
  padding: 7px;
  border: 2px solid black;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.span`
  font-size: 17px;
  padding: 5px;
`;

import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const EditContainer = styled.div`
  width: 650px;
  border: 1px solid #efefef;
`;
export const Header = styled.div`
  margin-top: 50px;
  display: flex;
  margin-bottom: 20px;
`;
export const Overlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
export const OverlayText = styled.div`
  font-size: 10px;
  word-break: keep-all;
  cursor: pointer;
`;
export const ProfileImgContainer = styled.div`
  margin-left: 50px;
  margin-right: 20px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;

  &:hover {
    & > img {
      opacity: 0.3;
    }
    & > .css-11jw3f8 {
      opacity: 1;
    }
  }
  & > img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
export const Item = styled.div`
  display: flex;
  margin-bottom: 15px;
  & > textarea {
    resize: none;
    width: 300px;
    height: 150px;
  }
  & > input {
    width: 300px;
  }
`;
export const ItemName = styled.div`
  & > span {
    padding-right: 5px;
    border-right: 5px solid #707070;
  }
  font-size: 18px;
  font-weight: 600;
  width: 150px;
  text-align: right;
  margin-right: 15px;
`;
export const ErrorMsg = styled.div`
  font-size: 15px;
  color: red;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const ButtonAccept = styled.button`
  border: 0;
  outline: 0;
  &:disabled {
    opacity: 0.3;
  }
  color: white;
  background-color: #707070;
  border-radius: 12px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
`;

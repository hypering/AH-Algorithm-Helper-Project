import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  text-align: start;
  overflow-y: scroll;
`;

export const ImgIcon = styled.img`
  width: 60%;
  padding-top: 5px;
  border-radius: 15px;
`;

export const ContentWrap = styled.div`
  padding: 15px 0px;
  font-size: 17px;
`;

export const Comment = styled.li`
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  font-size: 15px;
  &:hover {
    cursor: pointer;
    background-color: #ebeef1;
    opacity: 0.9;
    transition: 0.5s;
  }
`;

export const CommentBtn = styled.button`
  width: 15%;
  padding: 10px;
  border: 1px solid rgb(29, 161, 242);
  border-radius: 20px;
  background-color: rgb(29, 161, 242);
  color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.5s;
  }
`;

export const CommentWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

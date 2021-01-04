import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 17px;
`;

export const Comment = styled.li`
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: #385185;
    transition: 0.5s;
  }
`;
export const PostWrap = styled.div`
  padding-top: 5px;
`;

export const CommentBtn = styled.button`
  width: 15%;
  padding: 10px;
  border: 2px solid #707070;
  border-radius: 20px;
  background-color: #707070;
  color: white;
  font-size: 17px;
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
  padding-top: 5px;
  justify-content: space-between;
`;

export const EmptyText = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 1rem;
  text-align: start;
`;

export const CommentText = styled.textarea`
  padding: 5px;
`;

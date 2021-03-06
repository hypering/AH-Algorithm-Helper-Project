import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.isModal ? 'width: 300px;' : 'width: calc(100% - 420px);')}

  margin: 10px;
  text-align: start;
  position: relative;
  background-color: white;
  & > svg {
    width: 10px;
    height: 10px;
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 5px;
  }
  & > .postContent {
  }
`;
export const PostContent = styled.div`
  height: calc(100% - 50px);
  display: flex;
  position: relative;
  flex-direction: column;
  overflow-y: scroll;
  flex-grow: 1;
  margin-bottom: 50px;
  padding-bottom: 10px;
  &::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;
export const ImgIcon = styled.img`
  object-fit: contain;
  max-width: 500px;
  height: 100%;
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
  display: flex;

  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: #385185;
    transition: 0.5s;
  }
  & > .commentContent > div > .writer {
    font-weight: 600;
  }
`;
export const PostWrap = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% - 300px);
`;

export const CommentBtn = styled.button`
  width: 15%;
  padding: 10px;
  border: 2px solid #707070;
  border-radius: 20px;
  background-color: #707070;
  min-width: 80px;
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
  padding-top: 10px;
  max-height: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
`;

export const EmptyText = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin: 10px;
  text-align: start;
`;

export const CommentText = styled.textarea`
  padding: 5px;
  resize: none;
  outline: 0;
  margin-right: 5px;
  border-radius: 12px;
`;
export const UserInfoContainer = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
export const AuthorID = styled.div`
  font-size: 20px;
  line-height: 50px;
`;

export const BoardDate = styled.div`
  font-size: 15px;
  margin-left: 70px;
  min-width: 50px;
  color: #808080;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 15px;
  font-size: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  text-align: start;
  &:hover {
    cursor: pointer;
    background-color: #ebeef1;
    opacity: 0.9;
    transition: 0.5s;
  }
  margin-bottom: 10px;
  & > .userInfo {
    display: flex;
    & > .userId {
      font-size: 20px;
      line-height: 50px;
    }
  }
  & > .postContent {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SvgWrap = styled.ul`
  display: flex;
`;

export const ImgIcon = styled.img`
  padding-top: 5px;
  border-radius: 15px;
  width: 95%;
`;
export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 12px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  width: 600px;
  padding: 50px 20px 50px 20px;
  border: 1px solid #efefef;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const ProfileContent = styled.div``;
export const ProfileImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
export const UserNameContainer = styled.div`
  font-size: 20px;
  margin-bottom: 20px;

  border-bottom: 1px solid #efefef;
`;

export const UserIntContainer = styled.div`
  margin-bottom: 20px;
`;
export const UserPosts = styled.div`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  width: 600px;

  align-items: center;
  flex-direction: column;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const UserId = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;

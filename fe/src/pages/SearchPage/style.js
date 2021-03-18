import styled from '@emotion/styled';
export const PostsContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  padding: 15px;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1rem;
  min-width: 800px;
  min-height: 700px;
`;

export const SubContainer = styled.div`
  display: flex;
  height: 85%;
`;

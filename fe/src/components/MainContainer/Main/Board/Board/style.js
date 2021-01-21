import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const Loading = styled.div`
  max-width: 500px;
  background-color: white;
  font-weight: 900;
  font-size: 15px;
`;

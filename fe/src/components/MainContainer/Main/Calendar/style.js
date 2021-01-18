import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1720px;
  min-width: 1720px;
  height: 820px;
  min-height: 820px;
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContestButton = styled.div`
  width: 10%;
  padding: 5px;
  margin-top: 7px;
  border-radius: 15px;
  background-color: #707070;
  color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #385185;
    transition: 0.5s;
  }
`;

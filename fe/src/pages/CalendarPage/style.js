import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 650px;
  padding: 15px;
  min-height: 700px;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContestButton = styled.div`
  width: 10%;
  padding: 5px 10px 5px 10px;
  margin-top: 7px;
  border-radius: 15px;
  background-color: #707070;
  min-width: 130px;
  color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #385185;
    transition: 0.5s;
  }
`;

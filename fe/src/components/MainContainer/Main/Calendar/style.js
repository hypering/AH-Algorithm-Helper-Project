import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
`;

export const ContestButton = styled.div`
  width: 10%;
  padding: 5px;
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

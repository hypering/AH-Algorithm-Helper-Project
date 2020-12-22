import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 10px 10px 5px 0px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ebeef1;
    color: ${(props) => props.color || 'black'};
    transition: 1s;
    & > svg {
      fill: ${(props) => props.color || 'black'};
      transition: 1s;
    }
  }
`;

export const Icon = styled.svg`
  width: 25px;
  height: 25px;
  border-radius: 15px;
`;

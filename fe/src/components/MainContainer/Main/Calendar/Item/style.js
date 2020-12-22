import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  &:hover {
    background-color: #efefef;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: start;
`;

export const Container = styled.div`
  display: flex;
  height: 80%;
  width: 100%;
  border-radius: 5px;
  &:hover {
    background-color: #efefef;
  }
`;

export const ContestWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 15px;
  font-size: 17px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: yellowgreen;
    transition: 1.5s;
  }
`;

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
  height: 100%;
  width: 20%;
  padding: 10px;
  justify-content: space-around;
  align-content: center;
  font-size: 15px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #707070;
  }
`;

export const ContestTitle = styled.div`
  font-weight: 800;
`;

export const ContestDate = styled.div`
  color: blue;
`;

export const ContestTimer = styled.div``;

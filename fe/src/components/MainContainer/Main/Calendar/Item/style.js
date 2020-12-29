import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  height: 100%;
  width: 70%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #efefef;
  }
`;

export const Title = styled.div`
  color: #addfaa;
  padding-left: 10px;
  font-size: 30px;
  font-weight: 700;
  text-align: start;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  height: 76%;
  width: 100%;
  padding: 7px;
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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    cursor: pointer;
    background-color: #d9edf7;
  }
`;

export const ContestAlram = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const ContestTitle = styled.div`
  font-weight: 800;
`;

export const ContestDate = styled.div`
  color: blue;
`;

export const ContestTimer = styled.div``;

import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #efefef;
    & > div:nth-of-type(1) {
      color: #66cc33;
    }
  }
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

export const SvgIcon = styled.svg`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  &:hover {
    fill: #e0245e;
    transition: 0.5s;
  }
`;

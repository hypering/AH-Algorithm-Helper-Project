import styled from "@emotion/styled";

export const Title = styled.div`
  margin: auto;
  font-size: 25px;
`;

export const ContestWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 15px;
  font-size: 17px;
  &:hover {
    border: 1px groove;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: #efefef;
  }
`;

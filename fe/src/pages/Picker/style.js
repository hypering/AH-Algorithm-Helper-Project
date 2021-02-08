import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 650px;
  height: 100%;
  min-height: 700px;
  padding: 15px;
`;
export const ButtonWrap = styled.div`
  text-align: right;
  margin-right: 120px;
  margin-top: 5px;
  margin-bottom: 5px;
  & > svg {
    cursor: pointer;
    &:hover {
      color: #385185;
      transition: 1s;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  height: 13%;
  flex-direction: row;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #efefef;
  padding-bottom: 5px;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 80%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  flex-direction: row;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > span {
    text-align: right;
    margin-right: 120px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  height: 13%;
  flex-direction: row;
  border-bottom: 1px solid #efefef;
  padding-bottom: 5px;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 70%;
  flex-direction: row;
`;

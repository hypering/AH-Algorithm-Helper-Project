import styled from '@emotion/styled';

export const ResContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 60%;
  margin-left: 15px;
  max-width: 60%;
  overflow: hidden;
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const Subtitle = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

export const ResultHeader = styled.div`
  border-bottom: 1px solid #efefef;
  display: flex;
  text-align: center;
  & > span {
    margin-left: 15px;
    margin-right: 110px;
    text-align: center;
  }
  overflow: hidden;

  white-space: nowrap;
`;

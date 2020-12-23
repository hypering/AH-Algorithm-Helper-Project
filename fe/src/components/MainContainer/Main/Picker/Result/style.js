import styled from '@emotion/styled';

export const ResContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 60%;
  margin-left: 15px;
  max-width: 60%;
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
export const Subtitle = styled.span`
  font-weight: 600;
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
`;

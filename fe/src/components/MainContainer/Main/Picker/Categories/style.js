import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  margin-top: 15px;
  flex-grow: 1;
  margin-left: 15px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Subtitle = styled.span`
  font-weight: 600;
  padding-bottom: 10px;
`;

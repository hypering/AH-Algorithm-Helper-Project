import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-top: 15px;
  flex-grow: 1;
  margin-left: 15px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Subtitle = styled.span`
  font-weight: 600;
`;

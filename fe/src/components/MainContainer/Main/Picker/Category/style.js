import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin-top: 15px;
  flex-grow: 1;
  overflow-y: scroll;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.span`
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid #efefef;
  border-radius: 12px;
  cursor: pointer;
`;

export const Subtitle = styled.span`
  font-weight: 600;
`;

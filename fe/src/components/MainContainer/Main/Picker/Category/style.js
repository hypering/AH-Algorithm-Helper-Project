import styled from "@emotion/styled";
export const Container = styled.div`
  margin-top: 15px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const CategoriesScroll = styled.div`
  overflow-y: auto;
`;
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Category = styled.span`
  cursor: pointer;
  border: 1px solid #efefef;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 5px;
`;
export const Subtitle = styled.span`
  font-weight: 600;
`;

import styled from "@emotion/styled";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #efefef;
  margin-right: 20px;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.span`
  &:hover {
    background-color: #efefef;
  }
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  font-weight: 600;
  border-bottom: 1px solid #efefef;
`;

//NameContainer ->

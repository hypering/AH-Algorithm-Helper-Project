import styled from '@emotion/styled';

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  border-right: 1px solid #efefef;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    display: flex;
  }
`;

export const Menu = styled.span`
  &:hover {
    background-color: #efefef;
  }
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: 1px solid #efefef;
  font-weight: 600;
  text-align: center;
`;

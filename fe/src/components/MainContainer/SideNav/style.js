import styled from '@emotion/styled';

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  min-width: 115px;
  border-right: 1px solid #efefef;
`;

export const Menus = styled.div`
  display: flex;

  flex-direction: column;
  & > a {
    display: flex;
  }
  & > .active {
    background-color: #707070;
    color: white;
  }
`;

export const Menu = styled.span`
  width: 100%;

  cursor: pointer;
  padding: 10px 20px;
  border-bottom: 1px solid #efefef;
  font-weight: 600;
  text-align: center;
`;

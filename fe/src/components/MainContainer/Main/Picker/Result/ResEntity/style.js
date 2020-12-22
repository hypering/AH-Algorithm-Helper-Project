import styled from '@emotion/styled';

export const EntityContainer = styled.div`
  cursor: pointer;
  background-color: #efefef;
  margin: 5px 5px 5px 5px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  & > a > span {
    margin-right: 90px;
  }
  &:hover {
    background-color: #707070;
    color: white;
    transition: 1s;
    & > span {
      color: white;
    }
  }
  & > a,
  a:visited {
    text-decoration: none;
    color: black;
  }
  & > a:hover {
    color: white;
    transition: 1s;
  }
`;

import styled from '@emotion/styled';

export const EntityContainer = styled.div`
  cursor: pointer;
  background-color: #efefef;
  margin: 5px 5px 5px 5px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  & > a > span {
  }

  &:hover {
    background-color: #707070;
    color: white;
    transition: 1s;
    & > span {
      color: white;
    }
  }
  & > a {
    display: flex;
    flex-direction: row;
  }
  & > a > span > img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
  }
  & > a > .cate {
    font-size: 14px;
    width: 300px;
    color: #707070;
  }

  & > a > .tier {
    width: 200px;
  }
  & > a > .number {
    margin-right: 20px;
    width: 100px;
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

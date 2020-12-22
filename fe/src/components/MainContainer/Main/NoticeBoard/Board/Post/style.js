import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  text-align: start;
  &:hover {
    cursor: pointer;
    background-color: #ebeef1;
    opacity: 0.9;
    transition: 0.5s;
  }
`;

export const SvgWrap = styled.ul`
  display: flex;
`;

export const ImgIcon = styled.img`
  padding-top: 5px;
  border-radius: 15px;
  width: 95%;
`;

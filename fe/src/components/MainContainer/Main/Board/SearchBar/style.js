export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  & > a {
    display: flex;
    & > button > svg {
      color: #707070;
      width: 18px !important;
      height: 18px;
    }
  }
`;
import styled from '@emotion/styled';

export const SelectBox = styled.select`
  height: 100%;
  padding: 0 8px 0 8px;
  border: 1px solid #ebeef1;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  margin-right: 3px;
`;

export const InputBox = styled.input`
  height: 100%;
  padding: 10px 32px 9px 16px;
  border: 1px solid #ebeef1;
  background-color: #ebeef1;
  &:focus {
    outline: none;
  }
`;

export const ButtonBox = styled.button`
  height: 100%;
  border: 1px solid #ebeef1;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

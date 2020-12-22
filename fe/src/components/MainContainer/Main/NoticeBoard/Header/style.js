import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: 17%;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const SelectBox = styled.select`
  height: 100%;
  padding: 10px 32px 9px 16px;
  border: 1px solid #ebeef1;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
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

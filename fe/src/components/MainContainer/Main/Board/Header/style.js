import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  height: 17%;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const HeaderLeft = styled.div`
  display: flex;
  padding-bottom: 15px;
  flex-direction: column;
  overflow: hidden;
  min-height: 25px;
  white-space: nowrap;
  flex-shrink: 1;
  & > .fa-w-14 {
    cursor: pointer;
  }
`;
export const HeaderRight = styled.div`
  flex-shrink: 0;
  display: flex;
  padding-bottom: 15px;
  flex-direction: column;
  overflow: hidden;
  min-height: 25px;
  white-space: nowrap;
  & > .fa-w-14 {
    cursor: pointer;
  }
  align-items: flex-end;
`;

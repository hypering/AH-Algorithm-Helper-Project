import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 15px;
`;

export const Subtitle = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 600;
`;

export const AddRemove = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddUser = styled.div`
  width: 2rem;
  cursor: pointer;
  margin-left: 15px;
`;

export const RemoveUser = styled.div`
  width: 2rem;
  cursor: pointer;
  margin-left: 5px;
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
  overflow-y: scroll;
`;
export const Input = styled.input`
  padding: 3px 10px 3px 26px;
  margin: 0px 5px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

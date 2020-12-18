import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const RemoveUser = styled.div`
  width: 2rem;
  cursor: pointer;
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputID = styled.input`
  padding: 3px 10px 3px 26px;
  margin: 0px 5px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

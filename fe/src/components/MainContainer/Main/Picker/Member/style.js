import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 100%;

  overflow-y: scroll;
`;

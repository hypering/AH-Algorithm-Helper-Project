import styled from "@emotion/styled";

export const InputContainers = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const InputContainer = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  align-items: center;
  height: 25px;
  padding: 3px;
  margin-right: 10px;
`;

export const InputID = styled.input`
  outline: 0;
  border: 0;
  height: 18px;
  padding: 3px 10px 3px 26px;
`;

export const AddRemove = styled.div`
  position: absolute;
  right: 0;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AddUser = styled.div`
  cursor: pointer;
`;
export const RemoveUser = styled.div`
  cursor: pointer;
`;

export const Subtitle = styled.span`
  font-weight: 600;
`;

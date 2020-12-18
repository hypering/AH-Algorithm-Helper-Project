import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Subtitle = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
`;

export const TextInput = styled.input`
  padding: 3px 10px 3px 26px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

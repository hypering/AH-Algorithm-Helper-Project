import React from "react";
import {
  AddRemove,
  InputContainer,
  InputContainers,
  InputID,
  Container,
  Subtitle,
  AddUser,
  RemoveUser,
} from "./style";
const Member = () => {
  return (
    <Container>
      <Subtitle>구성원</Subtitle>
      <InputContainers>
        <InputContainer>
          <InputID placeholder="ID 입력"></InputID>
        </InputContainer>
        <InputContainer>
          <InputID placeholder="ID 입력"></InputID>
        </InputContainer>
        <AddRemove>
          <AddUser>+</AddUser>
          <RemoveUser>-</RemoveUser>
        </AddRemove>
      </InputContainers>
    </Container>
  );
};

export default Member;

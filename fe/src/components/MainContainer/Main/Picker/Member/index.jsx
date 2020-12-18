import React from "react";
import {
  AddRemove,
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
      <Subtitle>
        <div>구성원</div>
        <AddRemove>
          <AddUser>+</AddUser>
          <RemoveUser>-</RemoveUser>
        </AddRemove>
      </Subtitle>
      <InputContainers>
        <InputID placeholder="ID 입력"></InputID>
        <InputID placeholder="ID 입력"></InputID>
      </InputContainers>
    </Container>
  );
};

export default Member;

import React, { useRef, useState } from "react";
import {
  AddRemove,
  InputContainers,
  Container,
  Subtitle,
  AddUser,
  RemoveUser,
} from "./style";
import InputID from "./InputID/index";
const Member = () => {
  const inputBoxCnt = useRef(1);
  const refInputContainer = useRef();
  const [inputList, setInputList] = useState([inputBoxCnt.current]);
  const onAddUserClick = (e) => {
    inputBoxCnt.current += 1;
    setInputList([...inputList, inputBoxCnt.current]);
    // inputList.map((element) => console.log(element));
  };
  const onRemoveUserClick = (e) => {};
  //console.log(inputList);
  return (
    <Container>
      <Subtitle>
        <div>구성원</div>
        <AddRemove>
          <AddUser onClick={onAddUserClick}>+</AddUser>
          <RemoveUser>-</RemoveUser>
        </AddRemove>
      </Subtitle>
      <InputContainers ref={refInputContainer}>
        {inputList.map((element) => (
          <InputID key={element}></InputID>
        ))}
      </InputContainers>
    </Container>
  );
};

export default Member;

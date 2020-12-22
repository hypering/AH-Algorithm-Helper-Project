import React from "react";
import {
  AddRemove,
  InputContainers,
  Container,
  Subtitle,
  AddUser,
  RemoveUser,
  Input,
} from "./style";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Member = ({ inputValue, setInputValue, inputBoxCnt }) => {
  const onAddUserClick = (e) => {
    inputBoxCnt.current += 1;
    setInputValue([...inputValue, { id: inputBoxCnt.current, value: "" }]);
  };
  const onChange = (e) => {
    const { value } = e.target;
    const regex = /^[a-zA-Z0-9_]*$/;
    console.log(regex.test(value));
    if (regex.test(value) || value == "") {
      setInputValue(
        inputValue.map((input) =>
          input.id === +e.target.id ? { ...input, value: value } : input
        )
      );
    } else {
    }
  };
  const onRemoveUserClick = (e) => {
    if (inputValue.length >= 2)
      setInputValue(inputValue.slice(0, inputValue.length - 1));
  };
  return (
    <Container>
      <Subtitle>
        구성원
        <AddRemove>
          <AddUser onClick={onAddUserClick}>
            <FontAwesomeIcon icon={faPlusCircle} color="#707070" />
          </AddUser>
          <RemoveUser onClick={onRemoveUserClick}>
            {" "}
            <FontAwesomeIcon icon={faMinusCircle} color="#707070" />
          </RemoveUser>
        </AddRemove>
      </Subtitle>
      <InputContainers>
        {inputValue.map((element) => (
          <Input
            type="text"
            key={element.id}
            id={element.id}
            placeholder="ID 입력"
            value={
              inputValue[
                inputValue.findIndex((input) => {
                  return element.id === input.id;
                })
              ].value
            }
            onChange={onChange}
          ></Input>
        ))}
      </InputContainers>
    </Container>
  );
};

export default Member;

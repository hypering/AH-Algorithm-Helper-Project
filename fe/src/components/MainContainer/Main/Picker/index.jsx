import React from "react";
import CategoryContainer from "./Category/index";
import { Container, InputContainer, InputID } from "./style";

const Picker = () => {
  return (
    <Container>
      <InputContainer>
        <InputID placeholder="ID 입력"></InputID>
      </InputContainer>
      <select>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
      </select>

      <select>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>

      <select>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
      </select>

      <select>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>

      <input type="text" placeholder="문제 개수"></input>
      <CategoryContainer />
    </Container>
  );
};

export default Picker;

import React from "react";
import Item from "./Item";
import { Container } from "./style";

const Calendar = () => {
  return (
    <Container>
      <Item id="beakjoon" />
      <Item id="codeforces" />
      <Item id="atcoder" />
      <Item id="another" />
    </Container>
  );
};

export default Calendar;

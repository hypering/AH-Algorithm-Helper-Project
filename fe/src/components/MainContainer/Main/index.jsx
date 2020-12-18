import React from "react";
import Picker from "./Picker";
import Calendar from "./Calendar";
import { Container } from "./style";

const Main = ({ value = 0 }) => {
  return <Container>{value ? <Calendar /> : <Picker />}</Container>;
};

export default Main;

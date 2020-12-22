import React from "react";
import Picker from "./Picker";
import Calendar from "./Calendar";
import NoticeBoard from "./NoticeBoard";
import { Container } from "./style";

const CALENDAR_NUMBER = 1;
const NOTICEBOARD_NUMBER = 2;

const Main = ({ value = 0 }) => {
  return (
    <Container>
      {value === CALENDAR_NUMBER ? (
        <Calendar />
      ) : value === NOTICEBOARD_NUMBER ? (
        <NoticeBoard />
      ) : (
        <Picker />
      )}
    </Container>
  );
};

export default Main;

import React from 'react';
import Picker from './Picker';
import Calendar from './Calendar';
import FreeBoard from './Board';
import { Container } from './style';
import { Route } from 'react-router-dom';
// const CALENDAR_NUMBER = 1;
// const NOTICEBOARD_NUMBER = 2;

const Main = () => {
  return (
    <Container>
      <Route path="/calendar" component={Calendar} />
      <Route path="/board" component={FreeBoard} />
      <Route path="/picker" component={Picker} />
    </Container>
  );
};

export default Main;

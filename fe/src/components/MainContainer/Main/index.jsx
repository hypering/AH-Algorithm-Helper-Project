import React from 'react';
import Picker from './Picker';
import Calendar from './Calendar';
import FreeBoard from './Board';
import { Container } from './style';
import { Route } from 'react-router-dom';

const Main = ({ curIp }) => {
  return (
    <Container>
      <Route path="/calendar" component={Calendar} />
      <Route path="/board">
        <FreeBoard curIp={curIp}></FreeBoard>
      </Route>
      <Route path="/picker" component={Picker} />
    </Container>
  );
};

export default Main;

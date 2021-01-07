import React, { useState } from 'react';
import Picker from './Picker';
import Calendar from './Calendar';
import FreeBoard from './Board';
import Login from './Login';
import { Container } from './style';
import { Redirect, Route } from 'react-router-dom';

const Main = ({ curIp }) => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <Container>
      <Route
        exact
        path="/"
        render={(props) =>
          isLogined ? (
            <Redirect
              to={{ pathname: '/picker', state: { from: props.location } }}
            />
          ) : (
            <Login setIsLogined={setIsLogined}></Login>
          )
        }
      />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/board">
        <FreeBoard curIp={curIp}></FreeBoard>
      </Route>
      <Route exact path="/picker" component={Picker} />
    </Container>
  );
};

export default Main;

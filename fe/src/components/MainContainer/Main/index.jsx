import React, { useState, useEffect } from 'react';
import Picker from './Picker';
import Calendar from './Calendar';
import FreeBoard from './Board';
import Login from './Login';
import { Container } from './style';
import { Redirect, Route } from 'react-router-dom';

const Main = ({ curIp }) => {
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:4000/user', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then(({ isLogined }) => {
        setIsLogined(isLogined);
      });
  }, []);

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
      <Route path="/calendar" component={Calendar} />
      <Route path="/board">
        <FreeBoard curIp={curIp}></FreeBoard>
      </Route>
      <Route path="/picker" component={Picker} />
    </Container>
  );
};

export default Main;

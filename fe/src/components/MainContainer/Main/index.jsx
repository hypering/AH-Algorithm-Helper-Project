import React, { useState, useEffect, useContext } from 'react';
import Picker from './Picker';
import Calendar from './Calendar';
import FreeBoard from './Board';
import Login from './Login';
import { Container } from './style';
import { Redirect, Route } from 'react-router-dom';
import { UserDispatch, IsLoginedState } from '../../../App.jsx';
const Main = ({ curIp }) => {
  const dispatch = useContext(UserDispatch);
  const isLogined = useContext(IsLoginedState);
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
      .then((json) => {
        dispatch({ type: 'SET_IS_LOGINED', payload: json });
      });
  }, []);

  return (
    <Container>
      <Route
        exact
        path="/"
        render={(props) =>
          isLogined.isLogined ? (
            <Redirect
              to={{ pathname: '/picker', state: { from: props.location } }}
            />
          ) : (
            <Login />
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

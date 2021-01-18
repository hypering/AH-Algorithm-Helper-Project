import React, { useEffect, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Picker from './Picker';
import Calendar from './Calendar';
import FreeBoard from './Board';
import Login from './Login';
import Callback from './Callback';
import SignUp from './Account/SignUp';
import { UserDispatch, IsLoginedState } from '../../../App.jsx';
import { Container } from './style';
import Profile from './Account/Profile';
import Edit from './Account/Edit';

const Main = ({ curIp }) => {
  const dispatch = useContext(UserDispatch);
  const isLogined = useContext(IsLoginedState);
  useEffect(() => {
    fetch(`${process.env.BASE_URL}/user`, {
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
      <Switch>
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
        <Route path="/callback" component={Callback} />
        <Route path="/account/signup" component={SignUp} />
        <Route exact path="/account/edit" component={Edit} />
        <Route path="/account/:userId" component={Profile} />
        <Route render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </Container>
  );
};

export default Main;

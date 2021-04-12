import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'components/MainContainer/Main/style';
import useCheckAuth from 'hooks/useCheckAuth';
import {
  ProfilePage,
  CalendarPage,
  LoginPage,
  FreeBoardPage,
  SignUpPage,
  EditPage,
  SearchPage,
  PickerPage,
  Callback,
} from 'pages';

const Main = ({ curIp }) => {
  useCheckAuth();
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/board">
          <FreeBoardPage curIp={curIp} />
        </Route>
        <Route path="/picker" component={PickerPage} />
        <Route path="/callback" component={Callback} />
        <Route path="/account/signup" component={SignUpPage} />
        <Route exact path="/account/edit" component={EditPage} />
        <Route exact path="/search">
          <SearchPage curIp={curIp} />
        </Route>
        <Route path="/account/:userId" component={ProfilePage} />

        <Route render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </Container>
  );
};

export default Main;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'components/MainContainer/Main/style';
import useCheckAuth from 'hooks/useCheckAuth';
import {
  Profile,
  Calendar,
  Login,
  FreeBoard,
  SignUp,
  Edit,
  Search,
  Picker,
  Callback,
} from 'pages';

const Main = ({ curIp }) => {
  useCheckAuth();
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/board">
          <FreeBoard curIp={curIp}></FreeBoard>
        </Route>
        <Route path="/picker" component={Picker} />
        <Route path="/callback" component={Callback} />
        <Route path="/account/signup" component={SignUp} />
        <Route exact path="/account/edit" component={Edit} />
        <Route exact path="/search">
          <Search curIp={curIp}></Search>
        </Route>
        <Route path="/account/:userId" component={Profile} />

        <Route render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </Container>
  );
};

export default Main;

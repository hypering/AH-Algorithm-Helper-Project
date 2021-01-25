import React, { createContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import Picker from 'components/MainContainer/Main/Picker';
import Calendar from 'components/MainContainer/Main/Calendar';
import FreeBoard from 'components/MainContainer/Main/Board';
import Login from 'components/MainContainer/Main/Account/Login';
import Callback from 'components/MainContainer/Main/Account/Login/Callback';
import SignUp from 'components/MainContainer/Main/Account/SignUp';
import { Container } from 'components/MainContainer/Main/style';
import Profile from 'components/MainContainer/Main/Account/Profile';
import Edit from 'components/MainContainer/Main/Account/Edit';
import useCheckAuth from 'hooks/checkAuth';
import Search from 'components/MainContainer/Main/Search';
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return action.payload;
    default:
      return state;
  }
};

const CommentDispatchContext = createContext(null);
const CommentStateContext = createContext(null);
const Main = ({ curIp }) => {
  const [state, dispatch] = useReducer(reducer, '');
  useCheckAuth();
  return (
    <CommentDispatchContext.Provider value={dispatch}>
      <CommentStateContext.Provider value={state}>
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
      </CommentStateContext.Provider>
    </CommentDispatchContext.Provider>
  );
};
export { CommentDispatchContext, CommentStateContext };
export default Main;

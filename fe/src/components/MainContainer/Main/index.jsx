import React, { createContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'components/MainContainer/Main/style';
import useCheckAuth from 'hooks/checkAuth';
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

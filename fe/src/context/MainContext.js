import React from 'react';
import UserContext from './UserContext';
import CommentContext from './CommentContext';

const ContextProvider = (...Provider) => {
  const MainContextProvider = ({ children }) => {
    let SubContextProvider = children;
    Provider.forEach((Prov) => {
      SubContextProvider = <Prov>{SubContextProvider}</Prov>;
    });
    return SubContextProvider;
  };

  return ({ children }) => (
    <MainContextProvider>{children}</MainContextProvider>
  );
};

const MainContext = ContextProvider(UserContext, CommentContext);

export default MainContext;

import React, { useContext, createContext, useReducer } from 'react';

export const UserDispatchContext = createContext(null);
export const UserStateContext = createContext(null);

const userReducer = (isLogined, { type, payload }) => {
  switch (type) {
    case 'SET_IS_LOGINED':
      return payload;
    default:
      return isLogined;
  }
};

const userContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    isLogined: false,
    userKey: '',
    userId: '',
    profile: '',
  });

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default userContextProvider;

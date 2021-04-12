import React, { useContext, createContext, useReducer } from 'react';

export const CommentDispatchContext = createContext(null);
export const CommentStateContext = createContext(null);

const commentReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_VALUE':
      return payload;
    default:
      return state;
  }
};

const commentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, {
    value: '',
  });

  return (
    <CommentDispatchContext.Provider value={dispatch}>
      <CommentStateContext.Provider value={state}>
        {children}
      </CommentStateContext.Provider>
    </CommentDispatchContext.Provider>
  );
};

export const useCommentState = () => {
  const state = useContext(CommentStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useCommentDispatch = () => {
  const dispatch = useContext(CommentDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default commentContextProvider;

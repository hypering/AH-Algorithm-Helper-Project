import React, { useEffect, useState, useReducer, createContext } from 'react';
import Header from './Header';
import Board from './Board';
import DetailView from './DetailView';
import { Container, SubContainer } from './style';
import Search from './Search';
import { Route } from 'react-router-dom';
import Write from './Write';

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

const FreeBoard = ({ curIp }) => {
  const [boards, setBoards] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [value, setValue] = useState('');
  const [url, setUrl] = useState('/board/search');
  const [searchType, setSearchType] = useState('author');
  const [state, dispatch] = useReducer(reducer, '');

  useEffect(() => {
    fetch('http://127.0.0.1:4000/board', {
      method: 'get',
    })
      .then((response) => response.json())
      .then((board) => {
        console.log(board);
        setBoards(board);
      });
  }, []);

  return (
    <CommentDispatchContext.Provider value={dispatch}>
      <CommentStateContext.Provider value={state}>
        <Container>
          <Route path="/board/write" component={Write} />
          <Route exact path="/board">
            <Header
              value={value}
              setValue={setValue}
              url={url}
              setUrl={setUrl}
              searchType={searchType}
              setSearchType={setSearchType}
            />
            <SubContainer>
              <Board
                posts={boards}
                setBoards={setBoards}
                setSelectedBoard={setSelectedBoard}
                curIp={curIp}
              />
              <DetailView
                posts={boards}
                post={selectedBoard}
                setBoards={setBoards}
                setSelectedBoard={setSelectedBoard}
              />
            </SubContainer>
          </Route>

          <Route path="/board/search">
            <Search
              value={value}
              posts={boards}
              setValue={setValue}
              setBoards={setBoards}
              selectedBoard={selectedBoard}
              setSelectedBoard={setSelectedBoard}
              searchType={searchType}
            ></Search>
          </Route>
        </Container>
      </CommentStateContext.Provider>
    </CommentDispatchContext.Provider>
  );
};

export { CommentDispatchContext, CommentStateContext };
export default FreeBoard;

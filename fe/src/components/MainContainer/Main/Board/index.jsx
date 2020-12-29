import { React, useEffect, useState } from 'react';
import Header from './Header';
import Board from './Board';
import DetailView from './DetailView';
import { Container, SubContainer } from './style';
import Search from './Search';
import { Route, Switch } from 'react-router-dom';
import Write from './Write/index.jsx';
// import Write from './Write';
const FreeBoard = () => {
  const [boards, setBoards] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/board', {
      method: 'get',
    })
      .then((response) => response.json())
      .then((board) => {
        setBoards(board);
      });
  }, []);
  const [searchResults, setSearchResults] = useState(null);

  return (
    <Container>
      <Switch>
        <Route exact path="/board">
          <Header
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
          <SubContainer>
            <Board posts={boards} setSelectedBoard={setSelectedBoard} />
            <DetailView post={selectedBoard} />
          </SubContainer>
        </Route>
        <Route exact path="/board/write" component={Write} />
        <Route
          exact
          path="/board/search"
          component={Search}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </Switch>
    </Container>
  );
};

export default FreeBoard;

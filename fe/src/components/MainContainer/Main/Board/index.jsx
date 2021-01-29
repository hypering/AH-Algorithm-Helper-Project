import React, { useEffect, useState } from 'react';
import Header from './Header';
import Board from './Board';
import DetailView from './DetailView';
import { Container, SubContainer } from './style';
import { Route, Switch } from 'react-router-dom';
import Write from './Write';

const FreeBoard = ({ curIp }) => {
  const [boards, setBoards] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [value, setValue] = useState('');
  const [url, setUrl] = useState('/search');
  const [searchType, setSearchType] = useState('author');

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/board?startIdx=0`, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((board) => {
        setBoards(board);
      });
  }, []);

  return (
    <Container>
      <Switch>
        <Route exact path="/board/write" component={Write} />
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
              setPost={setSelectedBoard}
              setBoards={setBoards}
              setSelectedBoard={setSelectedBoard}
            />
          </SubContainer>
        </Route>

        <Route render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </Container>
  );
};

export default FreeBoard;

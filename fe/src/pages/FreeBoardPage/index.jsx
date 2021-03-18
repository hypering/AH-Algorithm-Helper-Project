import React, { useEffect, useState } from 'react';
import Header from 'components/MainContainer/Main/Board/Header';
import Board from 'components/MainContainer/Main/Board/Board';
import DetailView from 'components/MainContainer/Main/Board/DetailView';
import { Container, SubContainer } from './style';
import { Route, Switch } from 'react-router-dom';
import { WritePage } from 'pages';
import API from 'lib/api';

const FreeBoardPage = ({ curIp }) => {
  const [boards, setBoards] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [value, setValue] = useState('');
  const [url, setUrl] = useState('/search');
  const [searchType, setSearchType] = useState('author');

  const getBoardDatas = async () => {
    const boardDatas = await API.get('board?startIdx=0');
    setBoards(boardDatas);
  };

  useEffect(() => {
    getBoardDatas();
  }, []);

  return (
    <Container>
      <Switch>
        <Route exact path="/board/write" component={WritePage} />
        <Route exact path="/board">
          <Header
            value={value}
            setValue={setValue}
            url={url}
            setUrl={setUrl}
            searchType={searchType}
            setSearchType={setSearchType}
            title="자유 게시판"
            description="자유 게시판에 오신 것을 환영 합니다!"
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

export default FreeBoardPage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from '../Board/Post';
import queryString from 'query-string';
import DetailView from '../DetailView';
import { SubContainer as Container } from '../style';
import { Container as SubContainer } from './style';
const Search = ({ curIp }) => {
  const [selectedBoard, setSelectedBoard] = useState();
  const [searchResult, setSearchResult] = useState(null);
  //const location = useLocation();

  useEffect(() => {
    const queryObj = queryString.parse(location.search);
    const type = queryObj.type;
    const value = queryObj.value;

    setSelectedBoard(null);
    fetch(`${process.env.BASE_URL}/board/search`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, value }),
    })
      .then((response) => response.json())
      .then((json) => setSearchResult(json));
  }, []);
  return (
    <>
      {searchResult && searchResult.length >= 1 ? (
        <Container>
          <SubContainer>
            {searchResult.map((result) => (
              <Post
                posts={searchResult}
                setBoards={setSelectedBoard}
                post={result}
                id={result._id}
                key={result._id}
                setSelectedBoard={setSelectedBoard}
                curIp={curIp}
                fromSearch="true"
              ></Post>
            ))}
          </SubContainer>
          <DetailView
            posts={searchResult}
            post={selectedBoard}
            setPost={setSelectedBoard}
            setBoards={setSearchResult}
            fromSearch="true"
          />
        </Container>
      ) : (
        <div>검색 결과 없음</div>
      )}
    </>
  );
};
export default Search;

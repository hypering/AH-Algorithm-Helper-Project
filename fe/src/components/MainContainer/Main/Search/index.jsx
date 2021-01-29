import React from 'react';
import { useEffect, useState } from 'react';
import Post from 'components/MainContainer/Main/Board/Board/Post';
import queryString from 'query-string';
import DetailView from 'components/MainContainer/Main/Board/DetailView';
import { SubContainer as Container } from 'components/MainContainer/Main/Board/style';
import { Container as SubContainer } from 'components/MainContainer/Main/style';
const Search = ({ curIp }) => {
  const [selectedBoard, setSelectedBoard] = useState();
  const [searchResult, setSearchResult] = useState(null);
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

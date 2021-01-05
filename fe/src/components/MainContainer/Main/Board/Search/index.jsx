import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from '../Board/Post';
import queryString from 'query-string';
import DetailView from '../DetailView';
import { SubContainer as Container } from '../style';
import { Container as SubContainer } from './style';
const Search = ({
  posts,
  setBoards,
  setValue,
  value,
  selectedBoard,
  setSelectedBoard,
  searchType,
}) => {
  const [searchResult, setSearchResult] = useState(null);
  const location = useLocation();
  const queryObj = queryString.parse(location.search);
  useEffect(() => {
    setSelectedBoard(null);
  }, []);
  useEffect(() => {
    setValue(queryObj.value);

    if (posts) {
      if (searchType === 'author')
        setSearchResult(posts.filter((post) => post.author === value));
      else {
        setSearchResult(
          posts.filter((post) => {
            return post.tags.includes(value);
          })
        );
      }
    }
  }, [posts]);

  return (
    <>
      {searchResult && searchResult.length >= 1 ? (
        <Container>
          <SubContainer>
            {searchResult.map((result) => (
              <Post
                posts={posts}
                setBoards={setBoards}
                post={result}
                id={result._id}
                key={result._id}
                setSelectedBoard={setSelectedBoard}
              ></Post>
            ))}
          </SubContainer>
          <DetailView post={selectedBoard} />
        </Container>
      ) : (
        <div>검색 결과 없음</div>
      )}
    </>
  );
};
export default Search;

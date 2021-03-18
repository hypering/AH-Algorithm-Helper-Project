import React from 'react';
import { useEffect, useState } from 'react';
import Post from 'components/MainContainer/Main/Board/Board/Post';
import queryString from 'query-string';
import DetailView from 'components/MainContainer/Main/Board/DetailView';
import { PostsContainer, Container, SubContainer } from './style';
import API from 'lib/api';
import Header from '../../components/MainContainer/Main/Board/Header';

const SearchPage = ({ curIp }) => {
  const [selectedBoard, setSelectedBoard] = useState();
  const [searchResult, setSearchResult] = useState(null);

  const [value, setValue] = useState('');
  const [url, setUrl] = useState('/search');
  const [searchType, setSearchType] = useState('author');

  const getResultDatas = async () => {
    const queryObj = queryString.parse(location.search);
    const type = queryObj.type;
    const value = queryObj.value;
    const resultDatas = await API.post('board/search', { type, value });
    if (resultDatas) setSearchResult(resultDatas);
    else setSearchResult(null);
  };

  useEffect(() => {
    getResultDatas();
  }, [location.search]);

  return (
    <>
      <Container>
        <Header
          value={value}
          setValue={setValue}
          url={url}
          setUrl={setUrl}
          searchType={searchType}
          setSearchType={setSearchType}
          title="검색 결과"
          description={`${
            queryString.parse(location.search).value
          }에 대한 검색 결과`}
        />
        {searchResult && searchResult.length >= 1 ? (
          <SubContainer>
            <PostsContainer>
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
            </PostsContainer>
            <DetailView
              posts={searchResult}
              post={selectedBoard}
              setPost={setSelectedBoard}
              setBoards={setSearchResult}
              fromSearch="true"
            />
          </SubContainer>
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
      </Container>
    </>
  );
};
export default SearchPage;

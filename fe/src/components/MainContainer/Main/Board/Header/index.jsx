import React, { useState } from 'react';
import {
  Container,
  HeaderWrap,
  SelectBox,
  InputBox,
  ButtonBox,
  SearchBox,
} from './style';
import { Link } from 'react-router-dom';

const Header = ({ setSearchResults }) => {
  const [value, setValue] = useState('');

  const searchOnClick = () => {
    console.log(value);
    fetch(`http://localhost:4000/search?type=author&value=${value}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setSearchResults(results);
        // history.push('http://127.0.0.1:3000/search');
      });
  };

  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <Container>
      <HeaderWrap>
        <h5>
          <a href="/">자유</a>
        </h5>
        <Link to="/board/write">
          <img
            src="https://talk.op.gg/images/icon-write@2x.png"
            alt="글쓰기"
            width="24"
          ></img>
        </Link>
      </HeaderWrap>
      <HeaderWrap>
        <div>자유게시판에 오신 것을 환영합니다!</div>
        <SearchBox>
          <SelectBox name="target">
            <option value="title">제목</option>
            <option value="author">작성자</option>
          </SelectBox>
          <InputBox
            type="text"
            placeholder="검색"
            value={value}
            onChange={onChange}
          />
          <Link to="/search">
            <ButtonBox onClick={searchOnClick}>
              <img
                src="https://talk.op.gg/images/icon-search@2x.png"
                width="24"
              />
            </ButtonBox>
          </Link>
        </SearchBox>
      </HeaderWrap>
    </Container>
  );
};

export default Header;

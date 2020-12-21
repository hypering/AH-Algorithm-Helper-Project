import React from "react";
import {
  Container,
  HeaderWrap,
  SelectBox,
  InputBox,
  ButtonBox,
  SearchBox,
} from "./style";

const Header = () => {
  return (
    <Container>
      <HeaderWrap>
        <h5>
          <a href="/">자유</a>
        </h5>
        <a href="/">
          <img
            src="https://talk.op.gg/images/icon-write@2x.png"
            alt="글쓰기"
            width="24"></img>
        </a>
      </HeaderWrap>
      <HeaderWrap>
        <div>자유게시판에 오신 것을 환영합니다!</div>
        <SearchBox>
          <SelectBox name="target">
            <option value="title">제목</option>
            <option value="author">작성자</option>
          </SelectBox>
          <InputBox type="text" placeholder="검색" />
          <ButtonBox>
            <img
              src="https://talk.op.gg/images/icon-search@2x.png"
              width="24"
            />
          </ButtonBox>
        </SearchBox>
      </HeaderWrap>
    </Container>
  );
};

export default Header;

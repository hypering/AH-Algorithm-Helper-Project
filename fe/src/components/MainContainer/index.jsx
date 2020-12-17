import React from "react";
import SideNav from "./SideNav";
import Main from "./Main";
import { Container } from "./style";

// 여기서 변수를 한개 설정해서 SideNav로 넘겨준다
// 넘겨받은 siveNav에서 onClick 이벤트 적용
const MainContainer = () => {
  return (
    <Container>
      <SideNav />
      <Main />
    </Container>
  );
};

export default MainContainer;

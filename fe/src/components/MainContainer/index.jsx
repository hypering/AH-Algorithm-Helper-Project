import React, { useState } from 'react';
import SideNav from './SideNav';
import Main from './Main';
import { Container } from './style';
import { BrowserRouter } from 'react-router-dom';
// 여기서 변수를 한개 설정해서 SideNav로 넘겨준다
// 넘겨받은 siveNav에서 onClick 이벤트 적용
const MainContainer = () => {
  const [value, setValue] = useState(0);
  return (
    <BrowserRouter>
      <Container>
        <SideNav value={value} setValue={setValue} />
        <Main value={value} />
      </Container>
    </BrowserRouter>
  );
};

export default MainContainer;

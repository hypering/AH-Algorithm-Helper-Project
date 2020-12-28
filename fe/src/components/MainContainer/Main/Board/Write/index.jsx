import React from 'react';
import BtnExecute from '../../Buttons/Execute';
import { Container } from './style';
const Write = () => {
  return (
    <Container>
      <span>글쓰기</span>
      <div className="container_Head">
        <div className="container_Writer">
          <input
            type="text"
            className="input_Writer"
            placeholder="이름"
          ></input>
        </div>
        <div className="container_Pwd">
          <input
            type="password"
            className="input_Pwd"
            placeholder="****"
          ></input>
        </div>
      </div>
      <div className="container_Title">
        <input type="text" className="input_Title" placeholder="제목"></input>
      </div>
      <div className="container_InputImage">
        <input type="file" className="input_Image" accept="image/*"></input>
      </div>
      <div className="container_Content">
        <textarea className="ta_Content"></textarea>
      </div>
      <div className="container_Foot">
        <BtnExecute></BtnExecute>
      </div>
    </Container>
  );
};

export default Write;

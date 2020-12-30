import React, { useRef, useState } from 'react';
import BtnExecute from '../../Buttons/Execute';
import { Container } from './style';
const Write = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const form = useRef();
  const writeOnClick = () => {
    // fetch('http://localhost:4000/board/write', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     pwd: pwd,
    //     title: title,
    //     content: content,
    //   }),
    // });
    form.current.submit();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'author') {
      setName(value);
    } else if (name === 'pwd') {
      setPwd(value);
    } else if (name === 'content') {
      setContent(value);
    } else if (name === 'tags') {
      setTags(value);
    }
  };
  return (
    <>
      <Container>
        <form
          method="POST"
          action="http://localhost:4000/board/write"
          ref={form}
        >
          <span>글쓰기</span>

          <div className="container_Head">
            <div className="container_Writer">
              <input
                type="text"
                className="input_Writer"
                placeholder="이름"
                name="author"
                value={name}
                onChange={onChange}
              ></input>
            </div>
            <div className="container_Pwd">
              <input
                type="password"
                className="input_Pwd"
                placeholder="****"
                name="pwd"
                value={pwd}
                onChange={onChange}
              ></input>
            </div>
          </div>
          <div className="container_InputImage">
            <input type="file" className="input_Image" accept="image/*"></input>
          </div>
          <div className="container_Content">
            <textarea
              className="ta_Content"
              name="content"
              value={content}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="container_Hash">
            <input
              type="text"
              className="input_Hash"
              placeholder="태그 입력 ( ',' 로 구분)"
              name="tags"
              value={tags}
              onChange={onChange}
            ></input>
          </div>
          <div className="container_Foot">
            <BtnExecute onClick={writeOnClick}></BtnExecute>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Write;

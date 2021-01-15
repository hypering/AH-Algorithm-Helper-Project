import React, { useRef, useState } from 'react';
import BtnExecute from '../../Buttons/Execute';
import { Container } from './style';

const Write = () => {
  const [tags, setTags] = useState();
  const [content, setContent] = useState();
  const [img, setImg] = useState();
  const [imgName, setImgName] = useState();
  const form = useRef();
  const writeOnClick = async (e) => {
    e.preventDefault();

    if (!content) {
      alert('글 내용을 입력하세요.');
      return;
    }

    if (img) {
      const formData = new FormData();
      const fileField = document.querySelector('input[type="file"]');
      formData.append('nickname', imgName);
      formData.append('img', fileField.files[0]);

      await fetch(`${process.env.BASE_URL}/board/imageupload`, {
        method: 'post',
        mode: 'cors',
        credentials: 'include',
        body: formData,
      });
    }
    await form.current.submit();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'content') {
      setContent(value);
    } else if (name === 'tags') {
      setTags(value);
    } else if (name === 'img') {
      const file = document
        .querySelector('.container_InputImage')
        .querySelector('input').files[0];
      const fileName = file.name;
      console.log(fileName);
      setImg(value);
      setImgName(Date.now() + '_' + fileName);
    }
  };
  return (
    <>
      <Container>
        <form
          method="POST"
          action={`${process.env.BASE_URL}/board/write`}
          ref={form}
        >
          <span>글쓰기</span>
          <input
            type="text"
            hidden
            value={imgName}
            name="imgName"
            onChange={onChange}
          />
          <div className="container_InputImage">
            <input
              type="file"
              name="img"
              className="input_Image"
              accept="image/*"
              value={img}
              onChange={onChange}
            ></input>
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

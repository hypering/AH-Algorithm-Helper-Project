import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50%;
  & > .container_Head {
    display: flex;
    flex-direction: row;
    & > .container_Writer > .input_Writer {
      outline: 0;
      margin-right: 10px;
    }
    & > .container_Writer > .input_Pwd {
      outline: 0;
      margin-right: 10px;
    }
  }

  & > .container_Title > .input_Title {
    width: 100%;
    outline: 0;
  }
  & > .container_Content {
    width: 100%;
    height: 100%;
    outline: 0;
  }
  & > .container_InputImage > .input_Image {
    margin-bottom: 10px;
  }
  & > .container_Content > .ta_Content {
    resize: none;
    width: 100%;
    height: 90%;
    outline: 0;
  }
  & > .container_Foot {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

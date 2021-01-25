import styled from '@emotion/styled';

export const Container = styled.div`
  ${(props) => (props.isModal ? 'width:500px' : 'width: 100%;')};

  display: flex;
  flex-direction: column;
  padding: 15px;
  max-width: 500px;
  border-radius: ${(props) => (props.isModal ? '0px' : '15px')};
  font-size: 15px;
  background-color: white;
  ${(props) =>
    !props.isModal && 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);'};

  text-align: start;
  ${(props) =>
    !props.isModal &&
    ` &:hover {
    cursor: pointer;
    background-color: #ebeef1;
    opacity: 0.9;
    transition: 0.5s;
  }`}

  margin-bottom: 10px;
  & > .userInfo {
    display: flex;
    & > .userId {
      font-size: 20px;
      line-height: 50px;
    }
  }
  & > .postContent {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > .postImg {
    max-width: ${(props) => (props.fromProfile ? '250px' : '9999px')};
    max-width: ${(props) => (props.isModal ? '500px' : '9999px')};
    & > img {
    }
  }
`;

export const SvgWrap = styled.ul`
  display: flex;
`;

export const ImgIcon = styled.img`
  padding-top: 5px;
  border-radius: 15px;
  width: 95%;
`;
export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;

  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const BoardDate = styled.div`
  font-size: 15px;
  color: #808080;
`;

import React from 'react';

import Post from '../Board/Post';
import DetailView from '../DetailView';
import { ButtonExit, Container, ModalContainer } from './style';

const PostModal = ({ posts, post, setModalPost, setPosts }) => {
  const onExitClick = () => {
    setModalPost(null);
  };
  return (
    <Container>
      <ButtonExit onClick={onExitClick}>
        <svg
          aria-label="닫기"
          fill="#ffffff"
          height="24"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            clipRule="evenodd"
            d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
            fillRule="evenodd"
          ></path>
        </svg>
      </ButtonExit>
      <ModalContainer>
        <Post setBoards={setPosts} posts={posts} post={post} isModal="true" />
        <DetailView
          setModalPost={setModalPost}
          setBoards={setPosts}
          posts={posts}
          isModal="true"
          post={post}
        />
      </ModalContainer>
    </Container>
  );
};
export default PostModal;

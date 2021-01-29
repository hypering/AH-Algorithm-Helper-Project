import React from 'react';
import ExitButton from '../../../Buttons/ExitButton';
import Post from '../Board/Post';
import DetailView from '../DetailView';
import { Container, ModalContainer } from './style';
const PostModal = ({ posts, post, setModalPost, setPosts }) => {
  const onExitClick = () => {
    setModalPost(null);
  };
  return (
    <Container>
      <ExitButton onClick={onExitClick} />
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

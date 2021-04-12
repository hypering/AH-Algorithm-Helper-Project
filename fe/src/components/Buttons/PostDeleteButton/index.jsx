import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
const PostDeleteButton = ({ onClick }) => {
  return (
    <FontAwesomeIcon icon={faTrashAlt} onClick={onClick} color="#707070" />
  );
};

export default PostDeleteButton;

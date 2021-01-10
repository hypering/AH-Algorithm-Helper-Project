import React, { useContext } from 'react';
import SvgIcon from './SvgIcon';
import { Container, SvgWrap, ImgIcon } from './style';
import { CommentDispatchContext } from '../../../Board';

const Post = ({ posts, setBoards, post, setSelectedBoard, id, curIp }) => {
  const dispatch = useContext(CommentDispatchContext);
  const onClick = () => {
    dispatch({
      type: 'CHANGE_VALUE',
      payload: '',
    });
    setSelectedBoard(post);
    const response = fetch('http://127.0.0.1:4000/board/viewup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ curIp: curIp, contentId: post._id }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          post.clicked.push(curIp);
          const updatedPosts = [...posts];
          setBoards(updatedPosts);
        }
      });
  };

  const heartClick = (e) => {
    e.stopPropagation();
    setSelectedBoard(post);

    const response = fetch('http://127.0.0.1:4000/board/heartup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ curIp, contentId: post._id }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          post.heart.push(curIp);
          const updatedPosts = [...posts];
          setBoards(updatedPosts);
          alert('좋아요!');
        } else {
          alert('이미 좋아요를 눌렀습니다.');
        }
      });
  };

  return (
    <Container onClick={onClick} key={id} id={id}>
      <h6>{post.author}</h6>
      <div>
        {post.img_url != '' ? (
          <ImgIcon
            src={`https://kr.object.ncloudstorage.com/algorithm-helper/Boards/FreeBoard/${post.img_url}`}
          />
        ) : (
          ''
        )}
      </div>
      <div>
        <SvgWrap>
          {post.tags.map((ele, index) => (
            <li key={index}>
              <SvgIcon
                path="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
                text={ele}
                color="purple"
              />
            </li>
          ))}
        </SvgWrap>
      </div>
      <div>
        <SvgWrap>
          <li>
            <SvgIcon
              path="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
              text={post.comment.length}
              color="blue"
            />
          </li>
          <li>
            <SvgIcon
              onClick={heartClick}
              key={id}
              id={id}
              path="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
              text={post.heart.length}
              className="hearts"
              color="red"
            />
          </li>
          <li>
            <SvgIcon
              path="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"
              text={post.clicked.length}
              className="views"
              color="green"
            />
          </li>
        </SvgWrap>
      </div>
    </Container>
  );
};

export default Post;

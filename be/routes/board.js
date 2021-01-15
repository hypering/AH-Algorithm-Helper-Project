
const express = require('express');
const { upload } = require('../lib/imageUpload');
const { boardModel, addComment } = require('../models');
const { userModel } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const boardDates = await boardModel.find();

  const refinedDatas = await Promise.all(
    boardDates.map(async (element) => {
      const queryUser = await userModel.findOne({ _id: element.author });
      const refinedComment = await Promise.all(
        element.comment.map(async (e) => {
          const queryCommentUser = await userModel.findOne({ _id: e.writerId });
          return {
            _id: e._id,
            createAt: e.createAt,
            context: e.context,
            writerKey: e.writerId,
            writerId: queryCommentUser.userId,
            profile:queryUser.profile
          };
        }),
      );

      return {
        _id: element._id,
        tags: element.tags,
        heart: element.heart,
        comment: refinedComment,
        clicked: element.clicked,
        author: queryUser.userId,
        img_url: element.img_url,
        content: element.content,
        profile:queryUser.profile
      };
    }),
  );

  res.json(refinedDatas);
});

router.post('/viewup', async (req, res) => {
  const contentId = req.body.contentId;
  const curIp = req.body.curIp;

  const queryContent = await boardModel.findOne({ _id: contentId });

  const isExist = queryContent.clicked.filter((element) => {
    return element === curIp;
  });
  if (isExist.length == 0) {
    queryContent.clicked.push(curIp);
    queryContent.save();
    res.json({ status: 200, clicked: queryContent.clicked.length });
    console.log('새로운 ip');
  } else {
    console.log('이미존재하는  ip');
    res.json({ status: 404 });
  }
});

router.post('/imageupload', upload.single('img'), function (req, res) {
  res.writeHead(302, { Location: '/board' });
  res.end();
});

router.post('/write', async (req, res) => {
  const { content, tags, imgName } = req.body;
  const hash = tags.split(',');
  const author = req.session.user._id;
  const newPost = await boardModel.create({
    author,
    img_url: imgName,
    content: content,
    tags: hash,
  });
  console.log("newPost" ,newPost);
const queryUser = await userModel.findOne({_id:author});
console.log("queryUser",queryUser);
await queryUser.posts.push(newPost._id);
queryUser.save();
  res.statusCode = 302;
  if (process.env.ENV === 'development') {
    res.setHeader('Location', 'http://127.0.0.1:3000/board');
  } else {
    res.setHeader('Location', 'http://49.50.166.11:80/board');
  }
  res.end();
});

router.get('/search', async (req, res) => {
  const value = req.query.value;

  const searchResults = await boardModel.find({ author: value });
  res.json({ results: searchResults });
});

router.post('/heartup', async (req, res) => {
  const contentId = req.body.contentId;
  const queryContent = await boardModel.findOne({ _id: contentId });
  const isExist = queryContent.heart.filter((element) => {
    return element === req.session.user._id;
  });
  if (isExist.length == 0) {
    queryContent.heart.push(req.session.user._id);
    queryContent.save();
    res.json({ status: 200, clicked: queryContent.heart.length });
    console.log('새로운 ip');
  } else {
    console.log('이미존재하는  ip');
    res.json({ status: 404 });
  }
});

router.post('/comment/write', async (req, res) => {
  const { boardId, createAt, context } = req.body;
  const writer = req.session.user._id;
  const newCommentId = await addComment(boardId, {
    writerId: writer,
    createAt,
    context,
  });

  res.status(200).json({ newCommentId });
});

router.post('/comment/delete', async (req, res) => {
  const { boardId, key } = req.body;
  const queryContent = await boardModel.findOne({ _id: boardId });
  console.log(key);
  const removedComment = queryContent.comment.find((element) => {
    console.log(typeof element._id, typeof key);
    return String(element._id) === key;
  });

  if (removedComment !== undefined) {
    await boardModel.findOneAndUpdate(
      {
        _id: boardId,
      },
      {
        $pull: { comment: removedComment },
      },
      { new: true },
    );
    res.status(200).json(true);
    return;
  }
  res.status(201).json(true);
});

module.exports = router;

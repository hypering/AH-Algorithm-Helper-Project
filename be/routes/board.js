const express = require('express');
const { upload } = require('../lib/imageUpload');
const refinePostDatas = require('../lib/refinePostDatas');
const { boardModel, addComment } = require('../models');
const { userModel } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { startIdx } = req.query;
  const boardDatas = await boardModel.find().sort({ _id: -1 }).skip(Number(startIdx)).limit(5);
  const refinedDatas = await refinePostDatas(boardDatas);
  res.json(refinedDatas);
});

router.post('/search', async (req, res) => {
  const { type, value } = req.body;

  if (type === 'author') {
    const queryUser = await userModel.findOne({ userId: value });

    const searchResults = await boardModel.find({ author: queryUser._id }).sort({ _id: -1 });
    const refinedDatas = await refinePostDatas(searchResults);

    console.log(searchResults);
    res.status(200).json(refinedDatas);
  } else if (type === 'tag') {
    console.log(type);
    const searchResults = await boardModel.find().sort({ _id: -1 });
    console.log(searchResults);
    const filterDatas = searchResults.filter((post) => {
      return post.tags.includes(value);
    });
    const refinedDatas = await refinePostDatas(filterDatas);
    res.status(200).json(refinedDatas);
  } else res.status(204).json(false);
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

  const hash = tags.split(',').filter((e) => {
    return e.length >= 1;
  });
  const author = req.session.user._id;
  const newPost = await boardModel.create({
    author,
    img_url: imgName,
    content: content,
    tags: hash,
  });
  console.log('newPost', newPost);
  const queryUser = await userModel.findOne({ _id: author });
  console.log('queryUser', queryUser);
  await queryUser.posts.push(newPost._id);
  queryUser.save();
  res.statusCode = 302;
  if (process.env.ENV === 'development') {
    res.setHeader('Location', 'http://127.0.0.1:3000/board');
  } else {
    res.setHeader('Location', 'http://49.50.166.11:4000/board');
  }
  res.end();
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

router.post('/delete', async (req, res) => {
  const { boardId } = req.body;
  if (!req.session.user) res.status(401).json(false);
  const queryContent = await boardModel.deleteOne({ _id: boardId });
  const queryUser = await userModel.findOne({ _id: req.session.user._id });
  const idx = queryUser.posts.findIndex((e) => e === boardId);
  queryUser.posts.splice(idx, 1);
  await queryUser.save();
  if (queryContent !== undefined) {
    res.status(200).json(true);
  } else res.status(201).json(false);
});
module.exports = router;

const express = require('express');
const { upload } = require('../lib/imageUpload');
const BoardService = require('../services/board');

const router = express.Router();

router.get('/', async (req, res) => {
  const { startIdx } = req.query;
  const selectResult = await BoardService.selectBoard({ startIdx });

  res.json(selectResult);
});

router.post('/search', async (req, res) => {
  const { type, value } = req.body;

  const searchResult = await BoardService.searchBoard({ type, value });

  if (type === 'author' || type === 'tag') return res.status(200).json(searchResult);
  res.status(204).json(false);
});

router.post('/viewup', async (req, res) => {
  const contentId = req.body.contentId;
  const curIp = req.body.curIp;

  const viewUpResult = await BoardService.addBoardView({ contentId, curIp });

  res.json(viewUpResult);
});

router.post('/imageupload', upload.single('img'), function (req, res) {
  res.writeHead(302, { Location: '/board' });
  res.end();
});

router.post('/write', async (req, res) => {
  if (!req.session.user) res.status(401).json(false);
  const { content, tags, imgName } = req.body;
  const user = req.session.user;

  await BoardService.writeBoard({ content, tags, imgName, user });

  res.statusCode = 302;
  if (process.env.ENV === 'development') {
    res.setHeader('Location', 'http://127.0.0.1:3000/board');
  } else {
    res.setHeader('Location', 'http://49.50.166.11:4000/board');
  }
  res.end();
});

router.post('/heartup', async (req, res) => {
  if (!req.session.user) res.status(401).json(false);
  const contentId = req.body.contentId;
  const user = req.session.user;

  const heartResult = await BoardService.addBoardHeart({ contentId, user });

  res.json(heartResult);
});

router.post('/comment/write', async (req, res) => {
  const { boardId, createAt, context } = req.body;
  const writer = req.session.user._id;

  const writeCommentResult = await BoardService.writeBoardComment({
    writer,
    boardId,
    createAt,
    context,
  });

  res.status(200).json({ writeCommentResult });
});

router.post('/comment/delete', async (req, res) => {
  if (!req.session.user) res.status(401).json(false);

  const { boardId, key } = req.body;

  const deleteCommentResult = await BoardService.deleteBoardComment({ boardId, key });

  if (deleteCommentResult) res.status(200).json(true);
  else res.status(201).json(false);
});

router.post('/delete', async (req, res) => {
  const { boardId } = req.body;
  const user = req.session.user;
  if (!user) res.status(401).json(false);

  const deleteResult = await BoardService.deleteBoard({ boardId, user });

  if (deleteResult) {
    res.status(200).json(true);
  } else res.status(201).json(false);
});

module.exports = router;

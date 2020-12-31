const express = require('express');
const { boardModel } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const boardDates = await boardModel.find();
  res.json(boardDates);
});

router.post('/viewup', async (req, res) => {
  const contentId = req.body.contentId;
  const queryContent = await boardModel.findOne({ _id: contentId });
  console.log(queryContent);
  queryContent.clicked += 1;
  queryContent.save();
  res.json({ status: 200, clicked: queryContent.clicked });
  // let count;

  // if (req.cookies.contentId) {
  //   count = parseInt(req.cookies.count, 10) + 1;
  // } else {
  //   count = 0;
  // }

  // res.cookie((contentId, { count: count }));
  // res.send(`Cookie : ${count}`);
});

router.post('/write', async (req, res) => {
  //글쓰기 처리
  const { author, pwd, content, tags, img_url } = req.body;
  const hash = tags.split(',');
  await boardModel.create({ author: author, pwd, img_url: img_url, content: content, tags: hash });
  res.statusCode = 302;
  res.setHeader('Location', 'http://127.0.0.1:3000/board');
  res.end();
});

router.get('/search', async (req, res) => {
  //검색 결과 반환
  // const type = req.query.type;
  const value = req.query.value;

  // console.log(type, value);
  const searchResults = await boardModel.find({ author: value });
  console.log(searchResults);
  res.json({ results: searchResults });
});

module.exports = router;

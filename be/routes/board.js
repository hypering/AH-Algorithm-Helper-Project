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

router.post('/heartup', async (req, res) => {
  const contentId = req.body.contentId;
  const queryContent = await boardModel.findOne({ _id: contentId });
  console.log(queryContent);
  queryContent.heart += 1;
  queryContent.save();
  res.json({ status: 200, heart: queryContent.heart });
});

router.post('/comment/write', async (req, res) => {
  const { boardId, context } = req.body;
  const createAt = '2020/01/04 15:03';

  const x = await boardModel.findOneAndUpdate(
    {
      _id: boardId,
    },
    {
      $addToSet: {
        comment: {
          createAt,
          context,
        },
      },
    },
    { new: true },
  );
  console.log(x);
  res.status(200).json(true);
});

// router.delete('/comment/delete', async (req, res) => {});

// router.patch('/comment/update', async (req, res) => {});

module.exports = router;

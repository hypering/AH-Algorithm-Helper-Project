const express = require('express');
const { upload } = require('../lib/imageUpload');
const { boardModel } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const boardDates = await boardModel.find();
  res.json(boardDates);
});

router.post('/viewup', async (req, res) => {
  const contentId = req.body.contentId;
  const curIp = req.body.curIp;
  console.log(req.body);
  const queryContent = await boardModel.findOne({ _id: contentId });
  console.log(queryContent.clicked);
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
  //queryContent.clicked += 1;

  // let count;

  // if (req.cookies.contentId) {
  //   count = parseInt(req.cookies.count, 10) + 1;
  // } else {
  //   count = 0;
  // }

  // res.cookie((contentId, { count: count }));
  // res.send(`Cookie : ${count}`);
});
router.post('/imageupload', upload.single('img'), function (req, res, next) {
  res.writeHead(302, { Location: `/board` });
  res.end();
});
router.post('/write', async (req, res) => {
  //글쓰기 처리
  const { author, pwd, content, tags, img, imgName } = req.body;
  const hash = tags.split(',');
  const newPost = await boardModel.create({
    author: author,
    pwd,
    img_url: imgName,
    content: content,
    tags: hash,
  });

  //res.json({ _id: newPost._id });
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
  const curIp = req.body.curIp;

  const queryContent = await boardModel.findOne({ _id: contentId });
  const isExist = queryContent.heart.filter((element) => {
    return element === curIp;
  });
  if (isExist.length == 0) {
    queryContent.heart.push(curIp);
    queryContent.save();
    res.json({ status: 200, clicked: queryContent.heart.length });
    console.log('새로운 ip');
  } else {
    console.log('이미존재하는  ip');
    res.json({ status: 404 });
  }
});

router.post('/comment/write', async (req, res) => {
  const { boardId, key, createAt, context, password } = req.body;

  await boardModel.findOneAndUpdate(
    {
      _id: boardId,
    },
    {
      $addToSet: {
        comment: {
          key,
          createAt,
          context,
          password,
        },
      },
    },
    { new: true },
  );
  res.status(200).json(true);
});

router.post('/comment/delete', async (req, res) => {
  const { boardId, key } = req.body;
  const queryContent = await boardModel.findOne({ _id: boardId });
  const removedComment = queryContent.comment.find((element) => {
    return element.key === key;
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

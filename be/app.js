const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const dbStarter = require('./providers/dbProvider');
const { problemModel, boardModel } = require('./models');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 4000;

const ContestRouter = require('./routes/contest');

dotenv.config();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/contest', ContestRouter);

app.get('/board', async (req, res) => {
  const boardDates = await boardModel.find();
  res.json(boardDates);
});
app.post('/viewup', async (req, res) => {
  console.log(req.body.contentId);
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

app.post('/heartup', async (req, res) => {
  const contentId = req.body.contentId;
  const queryContent = await boardModel.findOne({ _id: contentId });
  console.log(queryContent);
  queryContent.heart += 1;
  queryContent.save();
  res.json({ status: 200, heart: queryContent.heart });
});

app.post('/write', async (req, res) => {
  //글쓰기 처리
  const { author, pwd, title, content, tags, img_url } = req.body;
  const hash = tags.split(',');
  await boardModel.create({ author: author, pwd, img_url: img_url, content: content, tags: hash });
  res.statusCode = 302;
  res.setHeader('Location', 'http://127.0.0.1:3000/board');
  res.end();
});

app.get('/search', async (req, res) => {
  //검색 결과 반환
  const type = req.query.type;
  const value = req.query.value;

  // console.log(type, value);
  const searchResults = await boardModel.find({ author: value });
  console.log(searchResults);
  res.json({ results: searchResults });
});
// 유저들의 정보 및 요구사항을 받는다.
// DB에 있는 문제들이랑 해당 유저들이 푼 문제를 비교
// 요구 사항에 맞는 문제들을 보내준다.
app.post('/problem', async (req, res) => {
  const { selectedDifficulty, selectedCate } = req.body;
  let problemCnt = req.body.problemCnt;
  const problemData = await problemModel.find({
    $and: [
      {
        level: { $gte: selectedDifficulty[0], $lte: selectedDifficulty[1] },
        category: { $in: selectedCate },
      },
    ],
  });
  let pickedProblemsNum = [];
  let pickedProblems = [];
  let pickedCnt = 0;
  if (problemData.length < problemCnt) problemCnt = problemData.length;
  //랜덤 뽑기
  while (pickedCnt != problemCnt) {
    let token = Math.floor(Math.random() * problemData.length);
    if (pickedProblemsNum.findIndex((e) => e == token) === -1) {
      pickedProblemsNum.push(token);
      pickedProblems.push(problemData[token]);
      pickedCnt++;
    }
  }
  res.json({ res: pickedProblems });
});

const booting = async () => {
  await dbStarter();
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};

booting();

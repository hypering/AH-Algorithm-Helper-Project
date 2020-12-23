const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const dbStarter = require('./providers/dbProvider');
const { contestModel, problemModel, boardModel } = require('./models');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

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

const getHTML = async () => {
  try {
    return await axios.get('https://codeforces.com/contests');
  } catch (error) {
    console.log(error);
  }
};

const getCodeforcesContest = (contest, turm) => {
  return {
    name: 'codeforces',
    title: contest[0],
    startDate: contest[1 + turm],
    due: contest[2 + turm],
  };
};

app.get('/contest', async (req, res) => {
  const contestDatas = [];
  const htmlDate = await getHTML();
  const $ = cheerio.load(htmlDate.data);
  $('div.contestList>div.datatable>div>table>tbody>tr').each((index, item) => {
    const crollingText = $(item).find('td').text();
    const dataContent = crollingText
      .replace(/(\r\n\t|\n|\r\t)/gm, '')
      .split('  ')
      .filter((element) => element !== '');
    if (index === 1) contestDatas.push(getCodeforcesContest(dataContent, 1));
    else if (index !== 0) contestDatas.push(getCodeforcesContest(dataContent, 0));
  });
  res.json(contestDatas);
});
app.post('/write', async (req, res) => {
  //const { author, img_url, tags, content, heart, comment, clicked } = req.body;
  boardModel.create(req.body);
  console.log('삽입');
  res.end();
});
app.get('/board', async (req, res) => {
  const boardDates = await boardModel.find();
  res.json(boardDates);
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

const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const dbStarter = require('./providers/dbProvider');
const { problemModel, boardModel } = require('./models');
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

app.get('/board', async (req, res) => {
  const boardDates = await boardModel.find();
  res.json(boardDates);
});

// 유저들의 정보 및 요구사항을 받는다.
// DB에 있는 문제들이랑 해당 유저들이 푼 문제를 비교
// 요구 사항에 맞는 문제들을 보내준다.
app.get('/problem', async (req, res) => {
  const problemDate = await problemModel.find();
  res.json(problemDate);
});

const booting = async () => {
  await dbStarter();
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};

booting();

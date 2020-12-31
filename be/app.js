const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const dbStarter = require('./providers/dbProvider');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 4000;

const ContestRouter = require('./routes/contest');
const ProblemRouter = require('./routes/problem');
const BoardRouter = require('./routes/board');
const { boardModel } = require('./models');

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
app.use('/problem', ProblemRouter);
app.use('/board', BoardRouter);

app.post('/heartup', async (req, res) => {
  const contentId = req.body.contentId;
  const queryContent = await boardModel.findOne({ _id: contentId });
  console.log(queryContent);
  queryContent.heart += 1;
  queryContent.save();
  res.json({ status: 200, heart: queryContent.heart });
});

const booting = async () => {
  await dbStarter();
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};

booting();

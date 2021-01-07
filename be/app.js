const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const dbStarter = require('./providers/dbProvider');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

const ContestRouter = require('./routes/contest');
const ProblemRouter = require('./routes/problem');
const BoardRouter = require('./routes/board');
const GetIpRouter = require('./routes/getip');
const UserRouter = require('./routes/user');

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.use('/contest', ContestRouter);
app.use('/problem', ProblemRouter);
app.use('/board', BoardRouter);
app.use('/getip', GetIpRouter);
app.use('/user', UserRouter);

const booting = async () => {
  await dbStarter();
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};

booting();

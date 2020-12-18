const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const dbStarter = require('./providers/dbProvider');

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const booting = async () => {
  await dbStarter();
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};

booting();

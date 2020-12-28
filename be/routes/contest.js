const express = require('express');
const { contestModel } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const contestDates = await contestModel.find();
  res.json(contestDates);
});

router.post('/add', async (req, res) => {
  const { name, title, startDate, url } = req.body;
  await contestModel.create({
    name,
    title,
    startDate,
    url,
  });
  console.log(startDate);
  res.status(200).json(true);
});

module.exports = router;
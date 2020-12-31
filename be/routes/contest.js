const express = require('express');
const { contestModel } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const now = new Date();
  now.setHours(now.getHours());
  const contestDates = await contestModel
    .find({
      startDate: { $gte: now },
    })
    .sort({ startDate: 0 });
  console.log(contestDates);
  res.json(contestDates);
});

router.post('/add', async (req, res) => {
  const { name, title, startDate, url } = req.body;
  const ip_addr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (ip_addr !== '::1') {
    return res.status(201).json(false);
  }

  await contestModel.create({
    name,
    title,
    startDate,
    url,
  });
  console.log(startDate);
  res.status(200).json(true);
});

router.post('/delete', async (req, res) => {
  const { contest_id } = req.body;
  const response = await contestModel.deleteOne({
    _id: contest_id,
  });
  if (response.deletedCount) res.status(200).json(true);
  else res.status(200).json(false);
});

module.exports = router;

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

  res.status(200).json(true);
});

router.post('/delete', async (req, res) => {
  if (!req.session.user) {
    res.status(201).json(false);
    return;
  }
  const { contest_id } = req.body;

  const response = await contestModel.deleteOne({
    _id: contest_id,
  });
  if (response.deletedCount) res.status(200).json(true);
  else res.status(201).json(false);
});

module.exports = router;

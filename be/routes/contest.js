const express = require('express');
const ContestService = require('../services/contest');
const router = express.Router();

router.get('/', async (req, res) => {
  const now = new Date();
  now.setHours(now.getHours());
  const contestDatas = await ContestService.selectContest({ now });

  res.json(contestDatas);
});

router.post('/add', async (req, res) => {
  const { name, title, startDate, url } = req.body;
  const result = await ContestService.addContest({ name, title, startDate, url });

  res.status(200).json(result);
});

router.post('/delete', async (req, res) => {
  if (!req.session.user) {
    res.status(201).json(false);
    return;
  }
  const { contest_id } = req.body;

  const result = await ContestService.deleteContest({ contest_id });

  if (result) return res.status(200).json(result);
  return res.status(201).json(result);
});

module.exports = router;

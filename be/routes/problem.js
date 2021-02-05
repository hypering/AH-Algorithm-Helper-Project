const express = require('express');
const ProblemService = require('../services/problem');
const router = express.Router();

router.post('/', async (req, res) => {
  const { selectedDifficulty, selectedCate, problemCnt } = req.body;

  const pickedProblems = await ProblemService.selectProblem({
    selectedDifficulty,
    selectedCate,
    problemCnt,
  });

  res.json({ res: pickedProblems });
});

router.get('/delete', async (req, res) => {
  await ProblemService.deleteAllProblem();
  res.json(true);
});

module.exports = router;

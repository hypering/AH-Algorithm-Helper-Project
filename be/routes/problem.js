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

module.exports = router;

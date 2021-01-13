const express = require('express');
const { problemModel } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { selectedDifficulty, selectedCate } = req.body;
  let problemCnt = req.body.problemCnt;
  const problemData = await problemModel.find({
    $and: [
      {
        level: { $gte: selectedDifficulty[0], $lte: selectedDifficulty[1] },
        category: { $in: selectedCate },
      },
    ],
  });
  let pickedProblemsNum = [];
  let pickedProblems = [];
  let pickedCnt = 0;
  if (problemData.length < problemCnt) problemCnt = problemData.length;
  //랜덤 뽑기
  while (pickedCnt != problemCnt) {
    let token = Math.floor(Math.random() * problemData.length);
    if (pickedProblemsNum.findIndex((e) => e == token) === -1) {
      pickedProblemsNum.push(token);
      pickedProblems.push(problemData[token]);
      pickedCnt++;
    }
  }
  res.json({ res: pickedProblems });
});

module.exports = router;

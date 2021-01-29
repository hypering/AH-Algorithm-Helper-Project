const { problemModel } = require('../models');

const ProblemService = {
  selectProblem: async ({ selectedDifficulty, selectedCate, problemCnt }) => {
    const problemData = await problemModel.find({
      $and: [
        {
          level: { $gte: selectedDifficulty[0], $lte: selectedDifficulty[1] },
          category: { $in: selectedCate },
        },
      ],
    });
    const pickedProblemsNum = [];
    const pickedProblems = [];
    let pickedCnt = 0;
    const compareCnt = Math.min(problemData.length, problemCnt);

    while (pickedCnt != compareCnt) {
      let token = Math.floor(Math.random() * problemData.length);
      if (pickedProblemsNum.findIndex((e) => e == token) === -1) {
        pickedProblemsNum.push(token);
        pickedProblems.push(problemData[token]);
        pickedCnt++;
      }
    }
    return pickedProblems;
  },
};

module.exports = ProblemService;

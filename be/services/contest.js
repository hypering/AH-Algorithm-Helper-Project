const { contestModel } = require('../models');

const ContestService = {
  selectContest: async ({ now }) => {
    const contestDates = await contestModel
      .find({
        startDate: { $gte: now },
      })
      .sort({ startDate: 0 });
    return contestDates;
  },
  addContest: async ({ name, title, startDate, url }) => {
    await contestModel.create({
      name,
      title,
      startDate,
      url,
    });
    return true;
  },
  deleteContest: async ({ contest_id }) => {
    const response = await contestModel.deleteOne({
      _id: contest_id,
    });
    if (response.deletedCount) return true;
    return false;
  },
};

module.exports = ContestService;

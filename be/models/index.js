const problemModel = require('./problem');
const contestModel = require('./contest');
const { boardModel, addComment } = require('./board');

const userModel = require('./user');

module.exports = { problemModel, contestModel, boardModel, addComment, userModel };

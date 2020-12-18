const mongoose = require('mongoose');

const { Schema } = mongoose;

const contestSchema = new Schema(
  {
    name: String,
    createAt: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

const contestModel = mongoose.model('contest', contestSchema);

module.exports = contestModel;

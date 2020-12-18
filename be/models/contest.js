const mongoose = require('mongoose');

const { Schema } = mongoose;

const contestSchema = new Schema(
  {
    name: String,
    title: String,
    startDate: Date,
    url: String,
  },
  { versionKey: false },
);

const contestModel = mongoose.model('contest', contestSchema);

module.exports = contestModel;

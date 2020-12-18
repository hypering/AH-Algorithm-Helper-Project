const mongoose = require('mongoose');

const { Schema } = mongoose;

const problemSchema = new Schema(
  {
    num: { type: String, unique: true },
    category: String,
    level: String,
  },
  { versionKey: false },
);

const problemModel = mongoose.model('problem', problemSchema);

module.exports = problemModel;

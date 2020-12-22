const mongoose = require('mongoose');

const { Schema } = mongoose;

const problemSchema = new Schema(
  {
    num: { type: Number, unique: true },
    category: [String],
    level: Number,
  },
  { versionKey: false },
);

const problemModel = mongoose.model('problem', problemSchema);

module.exports = problemModel;

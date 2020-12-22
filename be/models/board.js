const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    author: String,
    img_url: String,
    tags: [String],
    content: String,
    heart: Number,
    comment: [Object],
    clicked: Number,
  },
  { versionKey: false },
);

const boardModel = mongoose.model('board', boardSchema);

module.exports = boardModel;

const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = new Schema(
  {
    author: String,
    pwd: String,
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

boardSchema.statics.create = function (body) {
  const newArticle = new this(body);
  return newArticle.save();
};

module.exports = boardModel;

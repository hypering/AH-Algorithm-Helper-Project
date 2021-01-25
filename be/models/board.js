const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = new mongoose.Schema({
  writerId: String,
  createAt: { type: Date, default: Date.now() },
  context: String,
});
const boardSchema = new Schema(
  {
    author: String,
    pwd: String,
    img_url: String,
    tags: [String],
    content: String,
    heart: [String],
    comment: [commentSchema],
    clicked: [String],
    createAt: { type: Date, default: Date.now() },
  },
  { versionKey: false },
);

const boardModel = mongoose.model('board', boardSchema);
const addComment = async function (boardId, commentBody) {
  const queryPost = await boardModel.findOne({ _id: boardId });

  await queryPost.comment.push(commentBody);
  await queryPost.save();

  return queryPost.comment[queryPost.comment.length - 1]._id;
};
boardSchema.statics.create = function (body) {
  const newArticle = new this(body);
  return newArticle.save();
};

module.exports = { boardModel, addComment };

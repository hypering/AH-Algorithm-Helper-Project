const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: String,
    userPw: String,
    nickName: String,
    email: String,
    createAt: { type: Date, default: Date.now },
  },
  { versionKey: false },
);

const userModel = mongoose.model('problem', userSchema);

module.exports = userModel;

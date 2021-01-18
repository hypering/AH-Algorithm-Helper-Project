const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: String,
    userPw: String,
    nickName: String,
    email: { type: String, default: '' },
    createAt: { type: Date, default: Date.now },
    posts: [String],
    introduction: String,
    profile: { type: String, default: 'defaultProfile.jpg' },
  },
  { versionKey: false },
);

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

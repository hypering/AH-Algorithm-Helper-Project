const { userModel, boardModel } = require('../models');
const refinePostDatas = require('../lib/refinePostDatas');
const bcrypt = require('bcrypt');
const axios = require('axios');

const UserService = {
  editUser: async ({ user, userIntrod, userEmail }) => {
    const queryUser = await userModel.findOne({ _id: user._id });
    queryUser.email = userEmail;
    queryUser.introduction = String(userIntrod);
    queryUser.profile = user._id;
    await queryUser.save();
    return queryUser;
  },
  joinUser: async ({ userId, userPw, nickname, userEmail }) => {
    const existId = await userModel.findOne({
      userId,
    });

    if (existId) {
      return false;
    }

    const hashPw = await bcrypt.hash(userPw, 10);

    await userModel.create({
      userId,
      userPw: hashPw,
      nickname,
      email: userEmail,
    });

    return true;
  },
  loginUser: async ({ userId, userPw }) => {
    const existId = await userModel.findOne({
      userId,
    });

    if (!existId) {
      return false;
    }

    const isLogined = await bcrypt.compare(userPw, existId.userPw);
    if (!isLogined) {
      return false;
    }
    return existId;
  },
  githubLogin: async ({ code, clientId, secret }) => {
    const { data } = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        code,
        client_id: clientId,
        client_secret: secret,
      },
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    const searchParams = new URLSearchParams(data);
    const accessToken = searchParams.get('access_token');

    const USER_PROFILE_URL = 'https://api.github.com/user';
    const { data: userInfomation } = await axios.get(USER_PROFILE_URL, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
      withCredentials: true,
    });

    const existId = await userModel.findOne({
      userId: userInfomation.login + userInfomation.id,
    });

    if (existId) return existId;

    const User = await userModel.create({
      userId: userInfomation.login + userInfomation.id,
      nickname: userInfomation.login,
      email: userInfomation.email,
    });

    return User;
  },
  getUser: async ({ userId }) => {
    const queryUser = await userModel.findOne(
      { userId: userId },
      { userId: true, posts: true, email: true, introduction: true, profile: true },
    );
    let posts = [];

    for (let i = 0; i < queryUser.posts.length; i++) {
      const queryPost = await boardModel.findOne({ _id: queryUser.posts[i] });
      if (queryPost !== null) posts.push(queryPost);
    }
    posts.sort((a, b) => {
      return a.createAt < b.createAt ? 0 : -1;
    });
    console.log(posts);
    const refinedDatas = await refinePostDatas(posts);

    return { queryUser, refinedDatas };
  },
  getUserForEdit: async ({ userKey }) => {
    const queryUser = await userModel.findOne({ _id: userKey });
    return queryUser;
  },
  checkId: async ({ inputId }) => {
    const queryUser = await userModel.findOne({ userId: inputId });
    return queryUser;
  },
};

module.exports = UserService;

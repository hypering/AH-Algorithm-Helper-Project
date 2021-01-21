const express = require('express');
const bcrypt = require('bcrypt');
const { userModel, boardModel } = require('../models');
const Validation = require('../lib/validation');
const axios = require('axios');
const { upload } = require('../lib/profileUpload');
const router = express.Router();

// 로그인 유무 확인
// 403 : 인증정보 실패시 에러코드
router.post('/', async (req, res) => {
  if (req.session.user) {
    res
      .status(200)
      .json({ isLogined: true, userKey: req.session.user._id, userId: req.session.user.userId });
  } else res.status(403).json({ isLogined: false, userKey: '', userId: '' });
});
router.post('/edit', upload.single('img'), async (req, res) => {
  const { userIntrod, userEmail } = req.body;
  const queryUser = await userModel.findOne({ _id: req.session.user._id });
  queryUser.email = userEmail;
  queryUser.introduction = String(userIntrod);
  queryUser.profile = req.session.user._id;
  await queryUser.save();
  res.writeHead(302, { Location: `http://127.0.0.1:3000/account/${req.session.user.userId}` });
  res.end();
});
router.post('/idcheck', async (req, res) => {
  const { inputId } = req.body;
  const queryUser = await userModel.findOne({ userId: inputId });
  if (queryUser) {
    res.status(409);
    res.json(false);
  } else {
    res.status(200);
    res.json(true);
  }
});
router.post('/getUserForEdit', async (req, res) => {
  const userKey = req.session.user._id;
  const queryUser = await userModel.findOne({ _id: userKey });

  if (!req.session.user) return res.status(403).json(false);
  if (!queryUser) return res.status(204).json(false);

  return res.status(200).json(queryUser);
});
router.post('/getUser', async (req, res) => {
  const { userId } = req.body;
  const queryUser = await userModel.findOne(
    { userId: userId },
    { userId: true, posts: true, email: true, introduction: true, profile: true },
  );
  let posts = [];

  for (let i = 0; i < queryUser.posts.length; i++) {
    const queryPost = await boardModel.findOne({ _id: queryUser.posts[i] });
    posts.push(queryPost);
  }
  const refinedDatas = await Promise.all(
    posts.map(async (element) => {
      const queryUser = await userModel.findOne({ _id: element.author });
      const refinedComment = await Promise.all(
        element.comment.map(async (e) => {
          const queryCommentUser = await userModel.findOne({ _id: e.writerId });
          return {
            _id: e._id,
            createAt: e.createAt,
            context: e.context,
            writerKey: e.writerId,
            writerId: queryCommentUser.userId,
            profile: queryUser.profile,
          };
        }),
      );

      return {
        _id: element._id,
        tags: element.tags,
        heart: element.heart,
        comment: refinedComment,
        clicked: element.clicked,
        author: queryUser.userId,
        img_url: element.img_url,
        content: element.content,
        profile: queryUser.profile,
      };
    }),
  );

  if (queryUser) res.status(200).json({ posts: refinedDatas, queryUser });
  else {
    res.status(404).json(false);
  }
});

// 로컬 회원가입
// 409 : 회원가입 실패시 에러코드
router.post('/join', Validation.isUser, async (req, res) => {
  const { userId, userPw, nickname, userEmail } = req.body;

  const existId = await userModel.findOne({
    userId,
  });
  if (existId) {
    res.status(409).json(false);
    return;
  }
  const hashPw = await bcrypt.hash(userPw, 10);
  await userModel.create({
    userId,
    userPw: hashPw,
    nickname,
    email: userEmail,
  });
  if (process.env.ENV === 'development') {
    res.writeHead(302, { Location: 'http://127.0.0.1:3000/' });
  } else {
    res.writeHead(302, { Location: 'http://49.50.166.11:4000/' });
  }
  res.end();
});

// 로컬 로그인
// 401: 로그인 실패시 상태코드
router.post('/login', Validation.isUser, async (req, res) => {
  const { userId, userPw } = req.body;

  const existId = await userModel.findOne({
    userId,
  });

  if (!existId) {
    res.status(401).json(false);
    return;
  }

  const isLogined = await bcrypt.compare(userPw, existId.userPw);
  if (!isLogined) {
    res.status(401).json(false);
    return;
  }

  req.session.user = existId;
  res.status(200).json({ isLogined: true, userKey: existId._id, userId: existId.userId });
});

// 로컬 로그아웃
router.post('/logout', Validation.isUser, async (req, res) => {
  req.session.destroy();

  res.status(200).json(true);
});

router.post('/github', async (req, res) => {
  try {
    const { code } = req.body;
    const clientId =
      process.env.ENV === 'prod' ? process.env.PROD_CLIENT_ID : process.env.DEV_CLIENT_ID;
    const secret =
      process.env.ENV === 'prod' ? process.env.PROD_CLIENT_SECRET : process.env.DEV_CLIENT_SECRET;

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

    if (existId) {
      req.session.user = existId;
      res
        .status(200)
        .json({ isLogined: true, userKey: req.session.user._id, userId: req.session.user.userId });
      return;
    }

    const User = await userModel.create({
      userId: userInfomation.login + userInfomation.id,
      nickname: userInfomation.login,
      email: userInfomation.email,
    });

    req.session.user = User;
    res
      .status(200)
      .json({ isLogined: true, userKey: req.session.user._id, userId: req.session.user.userId });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

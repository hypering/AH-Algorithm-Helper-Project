const express = require('express');
const Validation = require('../lib/validation');
const { upload } = require('../lib/profileUpload');
const UserService = require('../services/user');
const router = express.Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    res.status(200).json({
      isLogined: true,
      userKey: req.session.user._id,
      userId: req.session.user.userId,
      profile: req.session.user.profile,
    });
  } else res.status(401).json({ isLogined: false, userKey: '', userId: '', userProfile: '' });
});

router.post('/edit', upload.single('img'), async (req, res) => {
  const user = req.session.user;
  if (!user) {
    res.status(401).json(false);
  }
  const { userIntrod, userEmail } = req.body;
  const queryUser = await UserService.editUser({ user, userIntrod, userEmail });

  req.session.user = queryUser;

  if (process.env.ENV === 'development') {
    res.writeHead(302, { Location: `http://127.0.0.1:3000/account/${user.userId}` });
  } else {
    res.writeHead(302, { Location: `http://49.50.166.11:4000/${user.userId}` });
  }
  res.end();
});

router.post('/idcheck', async (req, res) => {
  const { inputId } = req.body;
  const queryUser = await UserService.checkId({ inputId });

  if (queryUser) {
    res.status(409).json(false);
  } else {
    res.status(200).json(true);
  }
});

router.get('/getUserForEdit', async (req, res) => {
  if (!req.session.user) return res.status(403).json(false);

  const userKey = req.session.user._id;
  const queryUser = await UserService.getUserForEdit({ userKey });

  if (!queryUser) return res.status(204).json(false);

  return res.status(200).json(queryUser);
});

router.post('/getUser', async (req, res) => {
  const { userId } = req.body;
  const { queryUser, refinedDatas } = await UserService.getUser({ userId });

  if (!queryUser) return res.status(404).json(false);

  res.status(200).json({ posts: refinedDatas, queryUser });
});

// 로컬 회원가입
// 409 : 회원가입 실패시 에러코드
router.post('/join', Validation.isUser, async (req, res) => {
  const { userId, userPw, nickname, userEmail } = req.body;

  const result = await UserService.joinUser({ userId, userPw, nickname, userEmail });

  if (!result) {
    return res.status(409).json(false);
  }

  if (process.env.ENV === 'development') {
    res.writeHead(302, { Location: 'http://127.0.0.1:3000/' });
  } else {
    res.writeHead(302, { Location: 'http://49.50.166.11:4000/' });
  }
  res.end();
});

router.post('/login', Validation.isUser, async (req, res) => {
  const { userId, userPw } = req.body;

  const existId = await UserService.loginUser({ userId, userPw });
  if (!existId) {
    return res.status(401).json(false);
  }

  req.session.user = existId;
  res.status(200).json({
    isLogined: true,
    userKey: existId._id,
    userId: existId.userId,
    profile: existId.profile,
  });
});

router.get('/logout', Validation.isUser, async (req, res) => {
  req.session.destroy();

  res.status(200).json(true);
});

router.post('/github', async (req, res) => {
  const { code } = req.body;
  const clientId =
    process.env.ENV === 'prod' ? process.env.PROD_CLIENT_ID : process.env.DEV_CLIENT_ID;
  const secret =
    process.env.ENV === 'prod' ? process.env.PROD_CLIENT_SECRET : process.env.DEV_CLIENT_SECRET;

  const existId = await UserService.githubLogin({ code, clientId, secret });

  req.session.user = existId;
  res.status(200).json({
    isLogined: true,
    userKey: existId._id,
    userId: existId.userId,
    userProfile: existId.profile,
  });
});

module.exports = router;

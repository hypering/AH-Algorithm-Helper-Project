const express = require('express');
const bcrypt = require('bcrypt');
const { userModel } = require('../models');
const Validation = require('../lib/validation');

const router = express.Router();

// 로그인 유무 확인
// 403 : 인증정보 실패시 에러코드
router.app('/', async (req, res) => {
  if (req.session.user) res.status(200).json(true);
  else res.status(403).json(false);
});

// 로컬 회원가입
// 409 : 회원가입 실패시 에러코드
router.post('/join', Validation.isUser, async (req, res) => {
  const { userId, userPw, nickname, email } = req.body;

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
    email,
  });

  res.status(200).json(true);
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

  res.session.user = existId;
  res.status(200).json(true);
});

// 로컬 회원가입
router.post('/logout', Validation.isUser, async (req, res) => {
  req.session.destroy();
  res.status(200).json(true);
});

module.exports = router;

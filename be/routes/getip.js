const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log('asd');
  const ip_addr =
    (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;

  res.json({ ip: ip_addr });
});

module.exports = router;

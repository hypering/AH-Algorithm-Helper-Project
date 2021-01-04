const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const ip_addr =
    (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;

  res.json({ ip: ip_addr });
});

module.exports = router;

const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const config = require('../awsConfig.json');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com/');

const s3 = new AWS.S3({
  endpoint: endpoint,
  region: config.region,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  },
});

const storage = multerS3({
  s3: s3,
  bucket: 'algorithm-helper',
  acl: 'public-read-write',
  overwite: true,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `users/profile/${req.session.user._id}`);
  },
  limits: { fileSize: 2 * 1024 * 1024 },
});

exports.upload = multer({ storage: storage });

const express = require('express');

const auth = require('./auth/auth.routes');
const users = require('./users/users.routes');

const { basicMiddleware } = require('../middlewares');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/auth', [basicMiddleware], auth);
router.use('/users', [basicMiddleware], users);

module.exports = router;

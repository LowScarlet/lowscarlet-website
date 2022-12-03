const jwt = require('jsonwebtoken');
const { getUserById } = require('./api/users/users.services');
const { NOT_FOUND, UN_AUTHORIZED } = require('./utils/message');

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`${NOT_FOUND} - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
}

function isAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    throw new Error(UN_AUTHORIZED);
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) {
    res.status(401);
    if (err.name === 'TokenExpiredError') {
      throw new Error(err.name);
    }
    throw new Error(UN_AUTHORIZED);
  }

  return next();
}

async function basicMiddleware(req, res, next) {
  const { authorization } = req.headers;

  try {
    if (authorization) {
      const token = authorization.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      req.user = await getUserById(payload.userId);
    }
  } catch (err) {
    req.user = {};
  }

  return next();
}

module.exports = {
  notFound,
  errorHandler,

  basicMiddleware,
  isAuthenticated
};

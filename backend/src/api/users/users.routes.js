/* eslint-disable max-len */
const express = require('express');
const { isAuthenticated } = require('../../middlewares');
const { DONT_HAVE_PERMISSION } = require('../../utils/message');
const {
  getUserByUsername, userFilter, isUser, uservalidation, updateUserById, deleteUser, findUsersByUsername, getUsers
} = require('./users.services');

const router = express.Router();

router.get('', async (req, res, next) => {
  const { search, skip, take } = req.query;
  let listUsers;
  try {
    if (search) {
      listUsers = await findUsersByUsername({ username: search, skip, take });
    } else {
      listUsers = await getUsers({ skip, take });
    }
    Object.keys(listUsers).forEach((key) => {
      listUsers[key] = userFilter(listUsers[key], 'public');
    });

    res.json(
      listUsers
    );
  } catch (err) {
    next(err);
  }
});

router.get('/:username/:other', async (req, res, next) => {
  const { user } = req;
  const { username } = req.params;

  try {
    const targetUser = await getUserByUsername(username);
    res.json(
      userFilter(targetUser, isUser(user, targetUser) ? 'semi-full' : 'public')
    );
  } catch (err) {
    next(err);
  }
});

router.put('/:username', [isAuthenticated], async (req, res, next) => {
  const { user, body } = req;
  const { username } = req.params;

  try {
    const targetUser = await getUserByUsername(username);
    const isTargetUser = isUser(user, targetUser);
    if (!isTargetUser) {
      res.status(403);
      throw new Error(DONT_HAVE_PERMISSION);
    }
    const { value, message } = await uservalidation({ data: req.body, user });
    if (!value) {
      res.status(400);
      throw new Error(message);
    }
    const upTargetUser = await updateUserById(user.id, body);
    res.json(
      userFilter(upTargetUser, isTargetUser ? 'semi-full' : 'public')
    );
  } catch (err) {
    next(err);
  }
});

router.delete('/:username', [isAuthenticated], async (req, res, next) => {
  const { user } = req;
  const { username } = req.params;

  try {
    const targetUser = await getUserByUsername(username);
    const isTargetUser = isUser(user, targetUser);
    if (!isTargetUser) {
      res.status(403);
      throw new Error(DONT_HAVE_PERMISSION);
    }
    await deleteUser(targetUser.id);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

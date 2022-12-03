/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const { db } = require('../../utils/db');
const {
  VALIDATION_USERNAME_1, VALIDATION_USERNAME_2, VALIDATION_USERNAME_3, VALIDATION_EMAIL_1, VALIDATION_PASSWORD_1, VALIDATION_USERNAME_4, VALIDATION_EMAIL_2, VALIDATION_PROBLEM_NOT_FOUND, VALIDATION_USERNAME_5
} = require('../../utils/message');

const role_priority = {
  MEMBER: 3,
  MOD: 2,
  ADMIN: 1,
  SUPERUSER: 0,
};

// Is Role
function hasRole(props) {
  const { user, role } = props;
  if (!user) return false;
  return role_priority[user.role] <= role_priority[role];
}

// Is User
function isUser(user, targetUser) {
  try {
    if (user || targetUser) {
      return user.id === targetUser.id;
    }
    return false;
  } catch (err) {
    return false;
  }
}

// Is Authenticated
function isAuthenticated(user) {
  try {
    return !(!user.id);
  } catch (error) {
    return false;
  }
}

// Get all users
function getUsers(props = {}) {
  const { skip, take } = props;
  const data = {
    take: 15
  };
  if (skip) data.skip = parseInt(skip, 10);
  if (take) data.take = parseInt(take, 10);
  return db.user.findMany(data);
}

// Get User by id
function getUserById(id) {
  const data = {
    where: {
      id,
    },
  };
  return db.user.findUnique(data);
}

// Get User by Username
function getUserByUsername(username) {
  const data = {
    where: {
      username,
    },
  };
  return db.user.findUnique(data);
}

// Get User by Email
function getUserByEmail(email) {
  const data = {
    where: {
      email,
    },
  };
  return db.user.findUnique(data);
}

// Get all User with similiar username
function findUsersByUsername(props) {
  const {
    username, mode, skip, take
  } = props;
  const data = {
    take: 15,
    where: {
      username: {
        contains: username,
        mode: 'insensitive'
      }
    }
  };
  if (mode) data.where.username.mode = mode;
  if (skip) data.skip = parseInt(skip, 10);
  if (take) data.take = parseInt(take, 10);
  return db.user.findMany(data);
}

// Create User (Register)
function createUser(user) {
  const { username, email, password } = user;
  const hash_password = bcrypt.hashSync(password, 12);
  return db.user.create({
    data: {
      username,
      email,
      displayName: username,
      password: hash_password,
    }
  });
}

// Create User (Register)
function deleteUser(id) {
  return db.user.delete({
    where: {
      id,
    },
  });
}

// Update User by Username
function updateUserByUsername(uname, rawData) {
  const data = {
    where: {
      username: uname,
    },
    data: rawData,
  };
  delete data.data.id;
  return db.user.update(data);
}
// Update User by Username
function updateUserById(id, rawData) {
  const data = {
    where: {
      id,
    },
    data: rawData,
  };
  delete data.data.id;
  return db.user.update(data);
}

function userFilter(user, type) {
  if (type === 'public') {
    delete user.email;
    delete user.password;
  } else if (type === 'semi-full') {
    delete user.password;
  }
  return user;
}

// User Data Serializer
async function uservalidation(props) {
  const { data, user } = props;
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in data) {
    if (key === 'username') {
      if (!(/^([a-zA-Z0-9_]+)$/.test(data[key]))) {
        return {
          value: false,
          message: VALIDATION_USERNAME_1
        };
      }
      if (data[key].length < 4) {
        return {
          value: false,
          message: VALIDATION_USERNAME_2
        };
      }
      if (data[key].length > 48) {
        return {
          value: false,
          message: VALIDATION_USERNAME_3
        };
      }
      if (await getUserByUsername(data[key])) {
        return {
          value: false,
          message: VALIDATION_USERNAME_4
        };
      }
      if (user && !hasRole({ user, role: 'SUPERUSER' })) {
        return {
          value: false,
          message: VALIDATION_USERNAME_5
        };
      }
    }

    if (key === 'email') {
      if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(data[key])) {
        return {
          value: false,
          message: VALIDATION_EMAIL_1
        };
      }
      if (await getUserByEmail(data[key])) {
        return {
          value: false,
          message: VALIDATION_EMAIL_2
        };
      }
    }

    if (key === 'password') {
      if (data[key].length < 4) {
        return {
          value: false,
          message: VALIDATION_PASSWORD_1
        };
      }
    }
  }
  return {
    value: true,
    message: VALIDATION_PROBLEM_NOT_FOUND
  };
}

module.exports = {
  isUser,
  hasRole,
  isAuthenticated,
  getUsers,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  findUsersByUsername,
  createUser,
  deleteUser,
  updateUserByUsername,
  updateUserById,
  userFilter,
  uservalidation,
};

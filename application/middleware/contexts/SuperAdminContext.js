const JWT = require('jsonwebtoken');
const DB = require('../../models');
const PrivilegeError = require('../../../errors/ForbiddenError');

module.exports = async (req, res, next) => {
  if (!req.User.IsSuperAdmin) next(new PrivilegeError('Not super admin'));
  else next();
};

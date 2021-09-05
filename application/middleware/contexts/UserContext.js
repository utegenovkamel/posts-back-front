const AuthenticationError = require('../../../errors/UnauthorizedError');
const AuthService = require('../../services/AuthService');

module.exports = async (req, res, next) => {
  let token = req.headers['authorization'];
  if (!token) {
    return next(new AuthenticationError('Authorization token not found'));
  }
  try {
    const user = await AuthService.decodeToken(token.slice(7));
    console.log('user', user);
    req.User = user;
    next();
  } catch (e) {
    next(e);
  }
};

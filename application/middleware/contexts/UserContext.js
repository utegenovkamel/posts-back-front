const AuthenticationError = require('../../../errors/UnauthorizedError');
const AuthService = require('../../services/AuthService');

module.exports = async (req, res, next) => {
  let token = req.headers['authorization'];
  if (!token) {
    next(new AuthenticationError('authorization token not found'));
    return;
  }
  try {
    const user = await AuthService.attemptDecodeToken(token.slice(7));
    req.User = user;
    next();
  } catch (e) {
    next(e);
  }
};

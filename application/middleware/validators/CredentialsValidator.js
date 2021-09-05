const AuthenticationError = require('../../../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  if (!req.body.Username) {
    return next(new AuthenticationError('Field Username is required.'));
  }
  if (!req.body.Password) {
    return next(new AuthenticationError('Field Password is required.'));
  }
  next();
};

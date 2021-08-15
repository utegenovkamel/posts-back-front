const jwt = require('jsonwebtoken');
const AuthenticationError = require('../../errors/UnauthorizedError');

const verifyJwt = (req, res, next) => {
  const Secret = process.env.JWT_SECRET;
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  token = token.slice(7, token.length).trimLeft();

  jwt.verify(token, Secret, (err, User) => {
    if (err) {
      throw new AuthenticationError('Invalid token.');
    }
    req.User = User;
    next();
  });
};

module.exports = verifyJwt;

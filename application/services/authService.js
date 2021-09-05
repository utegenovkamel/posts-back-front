const DB = require('../models');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const ConflictError = require('../../errors/ConflictError');
const AuthenticationError = require('../../errors/UnauthorizedError');
const TokenExpiredError = JWT.TokenExpiredError;
const JsonWebTokenError = JWT.JsonWebTokenError;

const User = DB.sequelize.models.User;
const Secret = process.env.JWT_SECRET;

class AuthService {
  async registration(body) {
    const { Username, Firstname, Lastname, Email, Password } = body;
    const candidate = await User.findOne({
      where: { Username },
    });

    if (candidate) {
      throw new ConflictError('User already exists');
    }

    const hashedPassword = await bcrypt.hash(Password, 7);
    return await User.create({
      Username,
      Email,
      Firstname,
      Lastname,
      Password: hashedPassword,
    });
  }

  async login(body) {
    const { Username, Password } = body;
    const user = await User.findOne({
      where: { Username },
    });

    if (!user) throw new AuthenticationError('Invalid credentials.');

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) throw new AuthenticationError('Invalid credentials.');

    // Token expires in 14 days.
    const jwt = JWT.sign({ UserId: user.id }, Secret, {
      expiresIn: 3600 * 24 * 14,
    });

    return { user, jwt };
  }

  // tries to decode JWT, returns instance of User model or throws AuthenticationError
  async decodeToken(Token) {
    try {
      const decodedToken = JWT.verify(Token, Secret);

      const user = await User.findOne({
        attributes: { exclude: ['Password'] },
        where: { id: decodedToken.UserId },
      });

      if (!user)
        throw new AuthenticationError('Invalid token. Bound entity not found.');
      else return user;
    } catch (e) {
      if (e instanceof TokenExpiredError)
        throw new AuthenticationError('Token expired.');
      if (e instanceof JsonWebTokenError)
        throw new AuthenticationError('Invalid token.');
      else throw e;
    }
  }
}

module.exports = new AuthService();

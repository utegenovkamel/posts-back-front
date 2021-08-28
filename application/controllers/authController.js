const AuthService = require('../services/authService');
const AuthenticationError = require('../../errors/UnauthorizedError');
const ConflictError = require('../../errors/ConflictError');
const UnprocessableEntityError = require('../../errors/UnprocessableEntityError');
const {
  ValidationError,
  DatabaseError,
  ForeignKeyConstraintError,
} = require('sequelize');

class AuthController {
  async registration(req, res, next) {
    try {
      res.json(await AuthService.registration(req.body));
    } catch (e) {
      if (e instanceof ValidationError)
        next(new UnprocessableEntityError(e.errors));
      else if (e instanceof DatabaseError)
        next(new UnprocessableEntityError(e.message));
      else if (e instanceof ForeignKeyConstraintError)
        next(new ConflictError());
      else next(e);
    }
  }

  async login(req, res, next) {
    try {
      res.json(await AuthService.login(req.body));
    } catch (e) {
      if (e instanceof AuthenticationError) next(e);
      console.log(e);
    }
  }
}

module.exports = new AuthController();

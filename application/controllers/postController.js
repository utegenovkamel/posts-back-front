const {
  ValidationError,
  DatabaseError,
  ForeignKeyConstraintError,
} = require('sequelize');
const ConflictError = require('../../errors/ConflictError');
const NotFoundError = require('../../errors/NotFoundError');
const UnprocessableEntityError = require('../../errors/UnprocessableEntityError');

const PostService = require('../services/postService');

class PostController {
  async getPosts(req, res) {
    try {
      const result = await PostService.getPosts();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json(err.message);
    }
  }

  async getMyPosts(req, res, next) {
    try {
      const result = await PostService.getMyPosts(req.User);
      if (result) res.json(result);
      else next(new NotFoundError());
    } catch (err) {
      console.log(err);
      res.status(400).json(err.message);
    }
  }

  async getMyOnePost(req, res) {
    try {
      res.json(await PostService.getMyOnePost(req.params));
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  async create(req, res, next) {
    try {
      res.json(await PostService.create(req.User, req.body));
    } catch (err) {
      console.log('err', err);
      if (err instanceof ValidationError)
        next(new UnprocessableEntityError(err.errors));
      else if (err instanceof DatabaseError)
        next(new UnprocessableEntityError(err.message));
      else if (err instanceof ForeignKeyConstraintError)
        next(new ConflictError());
      else next(err);
    }
  }

  async update(req, res, next) {
    try {
      const result = await PostService.update(req.User, req.params, req.body);
      if (result[0]) res.sendStatus(204);
      else next(new NotFoundError());
    } catch (err) {
      if (err instanceof ValidationError)
        next(new UnprocessableEntityError(err.errors));
      else if (err instanceof DatabaseError)
        next(new UnprocessableEntityError(err.message));
      else if (err instanceof ForeignKeyConstraintError)
        next(new ConflictError());
      else next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await PostService.delete(req.params, req.User);
      if (result) res.json(result);
      else next(new NotFoundError());
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
}

module.exports = new PostController();

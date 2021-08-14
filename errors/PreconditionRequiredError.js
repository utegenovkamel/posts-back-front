module.exports = class PreconditionRequired extends Error {
  constructor(message = 'PreconditionRequired') {
    super(message);
    this.name = 'PreconditionRequired';
    this.status = 428;
  }
};

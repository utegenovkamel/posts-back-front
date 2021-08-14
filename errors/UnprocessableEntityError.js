module.exports = class UnprocessableEntityError extends Error {
  constructor(errors = {}) {
    super('Unprocessable Entity');
    this.name = 'UnprocessableEntityError';
    this.status = 422;
    this.errors = errors;
  }
};

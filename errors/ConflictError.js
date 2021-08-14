module.exports = class ConflictError extends Error {
  constructor(message = 'Data Conflict') {
    super(message);
    this.name = 'ConflictError';
    this.status = 409;
  }
};

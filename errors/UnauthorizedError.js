module.exports = class AuthenticationError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'AuthenticationError';
    this.status = 401;
  }
};

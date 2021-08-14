module.exports = class PrivilegeError extends Error {
  constructor(message = 'Forbidden') {
    super(message);
    this.name = 'PrivilegeError';
    this.status = 403;
  }
};

module.exports = class NotAllowedError extends Error {
  constructor(message = 'Not Allowed') {
    super(message);
    this.name = 'NotAllowedErrpr';
    this.status = 405;
  }
};

module.exports = class UrlError extends Error {
  constructor(message = 'Not found') {
    super(message);
    this.name = 'UrlError';
    this.status = 404;
  }
};

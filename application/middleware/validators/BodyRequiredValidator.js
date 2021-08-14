const unprocessableEntityError = require('../../../errors/UnprocessableEntityError');

module.exports = (req, res, next) => {
  if (JSON.stringify(req.body) === '{}')
    next(new unprocessableEntityError('Request body can not be empty.'));
  else next();
};

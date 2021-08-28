const UnprocessableEntityError = require('../../../errors/UnprocessableEntityError');

module.exports = (req, res, next) => {
  if (JSON.stringify(req.body) === '{}')
    next(new UnprocessableEntityError('Request body can not be empty.'));
  else next();
};

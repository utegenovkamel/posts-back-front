const PrivilegeError = require('../../../errors/ForbiddenError');
const UnprocessableEntityError = require('../../../errors/UnprocessableEntityError');

module.exports = (err, req, res, next) => {
  if (err instanceof UnprocessableEntityError) {
    res.status(err.status).json(err.errors);
  } else next(err);
};

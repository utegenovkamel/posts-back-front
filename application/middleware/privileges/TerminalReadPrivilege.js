const ForbiddenError = require('../../../errors/ForbiddenError');

module.exports = async (req, res, next) => {
  try {
    const privilege = req.User.Group.Privileges.find(
      (priv) => priv.Code === 'tpr' || priv.Code === 'tpw',
    );

    if (!privilege) {
      throw new ForbiddenError();
    }
    next();
  } catch (error) {
    next(error);
  }
};
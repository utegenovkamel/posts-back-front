const DB = require('../models');
const HttpLog = DB.sequelize.models.HttpLog;

module.exports = async (req, res, next) => {
  if (req.headers) req.headers.authorization = 'some-token';
  HttpLog.create({
    IpAddress: req.header('x-real-ip') || req.connection.remoteAddress,
    Headers: JSON.stringify(req.headers),
    Body: JSON.stringify(req.body),
    Path: req.originalUrl,
    UserId: req.User ? req.User.id : null,
  });
  next();
};

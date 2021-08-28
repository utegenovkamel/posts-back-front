const Express = require('express');
const Router = Express.Router();

const AuthController = require('../application/controllers/AuthController');
const CredentialsRequired = require('../application/middleware/validators/CredentialsValidator');
const BodyRequired = require('../application/middleware/validators/BodyRequiredValidator');

Router.post('/login', BodyRequired, CredentialsRequired, AuthController.login);
Router.post('/registration', AuthController.registration);

module.exports = Router;

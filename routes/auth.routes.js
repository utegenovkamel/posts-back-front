const Express = require('express');
const Router = Express.Router();

const UserContext = require('../application/middleware/contexts/UserContext');
const AuthController = require('../application/controllers/AuthController');

const CredentialsRequired = require("../application/middleware/validators/CredentialsValidator");
const BodyRequired = require("../application/middleware/validators/BodyRequiredValidator");

Router.post('/login', BodyRequired, CredentialsRequired, AuthController.logIn);
Router.post('/password/change', UserContext, AuthController.changePassword);
Router.post(
    '/register',
    AuthController.registerCheck(),
    AuthController.register
)

module.exports = Router;


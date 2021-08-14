const Express = require('express')
const CORS = require('cors')
const BodyParser = require('body-parser');
const DB = require('./application/models');
const UserContext = require('./application/middleware/contexts/UserContext');
const AppRouter = require('./routers/AppRouter');
const AuthRouter = require('./routers/AuthRouter');
const HttpLog = require('./application/middleware/HttpLog');
const ValidationErrorHandler = require('./application/middleware/handlers/ValidationHandler');

const App = Express()


DB.sequelize
    .authenticate()
    .then(() => {
        App.use(CORS());
        App.use(BodyParser.json({ limit: '15mb' }));

        App.use('/api/v1/app', UserContext, HttpLog, AppRouter);
        App.use('/api/v1/auth', HttpLog, AuthRouter);

        //Error handlers
        App.use(ValidationErrorHandler);

        //Start server
        App.listen(process.env.APPLICATION_PORT, () => {
            console.log('Server has started!');
        });
    })
    .catch((e) => {
        console.log(e);
        process.exit();
    });

const { Router } = require('express')
const router = Router()
const AuthController = require('../controllers/authController')

router.post(
    '/register',
    AuthController.registerCheck(),
    AuthController.register
)

router.post('/login', AuthController.loginCheck(), AuthController.login)

module.exports = router

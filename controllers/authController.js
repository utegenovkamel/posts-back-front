const { check, validationResult } = require('express-validator')
const AuthService = require('../services/authService')

class AuthController {
    registerCheck() {
        return [
            check('email', 'Некорректный email').isEmail(),
            check('password', 'Минимальная длина пароля 6 символов').isLength({
                min: 6,
            }),
        ]
    }

    loginCheck() {
        return [
            check('email', 'Введите корректный email')
                .normalizeEmail()
                .isEmail(),
            check('password', 'Введите пароль').exists(),
        ]
    }

    async register(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json('Некорректный данные при регистрации')
                // return res.status(400).json({
                //     errors: errors.array(),
                //     message: 'Некорректный данные при регистрации',
                // })
            }

            await AuthService.register(req.body)
            res.status(201).json('Пользователь создан')
        } catch (err) {
            console.log(err)
            res.status(500).json(err.message)
        }
    }

    async login(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему',
                })
            }

            const userInfo = await AuthService.login(req.body)
            res.json(userInfo)
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }
}

module.exports = new AuthController()

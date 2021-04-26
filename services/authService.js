const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

class AuthService {
    async register(authData) {
        const { email, password } = authData
        const candidate = await User.findOne({ email })

        if (candidate) {
            throw new Error('Такой пользователь уже существует')
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new User({ email, password: hashedPassword })

        await newUser.save()
    }

    async login(authData) {
        const { email, password } = authData
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Пользователь не найден')
        }

        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            throw new Error('Неверный пароль, попробуйте снова')
        }

        return {
            token: jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
                expiresIn: '24h',
            }),
            userId: user.id,
        }
    }
}

module.exports = new AuthService()

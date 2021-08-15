const AuthService = require('../services/authService');

class AuthController {
  // registerCheck() {
  //     return [
  //         check('email', 'Некорректный email').isEmail(),
  //         check('password', 'Минимальная длина пароля 6 символов').isLength({
  //             min: 6,
  //         }),
  //     ]
  // }
  //
  // loginCheck() {
  //     return [
  //         check('email', 'Введите корректный email')
  //             .normalizeEmail()
  //             .isEmail(),
  //         check('password', 'Введите пароль').exists(),
  //     ]
  // }

  // async login(req, res) {
  //     try {
  //         const errors = validationResult(req)
  //         if (!errors.isEmpty()) {
  //             return res.status(400).json({
  //                 errors: errors.array(),
  //                 message: 'Некорректный данные при входе в систему',
  //             })
  //         }
  //
  //         const userInfo = await AuthService.login(req.body)
  //         res.json(userInfo)
  //     } catch (err) {
  //         console.log(err)
  //         res.status(400).json(err.message)
  //     }
  // }

  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json('Некорректный данные при регистрации');
        // return res.status(400).json({
        //     errors: errors.array(),
        //     message: 'Некорректный данные при регистрации',
        // })
      }

      await AuthService.register(req.body);
      res.status(201).json('Пользователь создан');
    } catch (err) {
      console.log(err);
      res.status(500).json(err.message);
    }
  }

  async logIn(req, res, next) {
    const { Username, Password } = req.body;
    try {
      res.json(await AuthService.attemptAuthentication(Username, Password));
    } catch (e) {
      if (e instanceof AuthenticationError) next(e);
      console.log(e);
    }
  }

  async changePassword(req, res, next) {
    const { PasswordOld, Password } = req.body;
    try {
      await AuthService.attemptChangePassword(
        PasswordOld,
        Password,
        req.User.id,
      );
      res.sendStatus(204);
    } catch (e) {
      if (e instanceof AuthenticationError) next(e);
      else if (e instanceof ValidationError)
        next(new UnprocessableEntityError(e.errors));
      else next(e);
    }
  }
}

module.exports = new AuthController();

const { Router } = require('express')
const router = Router()
const authRouter = require('./auth.routes')
const postsRouter = require('./posts.routes')

router.use('/auth', authRouter)
router.use('/posts', postsRouter)

module.exports = router

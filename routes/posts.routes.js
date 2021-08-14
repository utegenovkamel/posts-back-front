const { Router } = require('express')
const router = Router()
const auth = require('../application/middleware/auth.middleware')
const PostController = require('../application/controllers/postController')

router.get('', auth, PostController.getAllPosts)

router.get('/my', auth, PostController.getUserPosts)

router.get('/my/:postId', auth, PostController.getPost)

router.post('', auth, PostController.create)

router.put('', auth, PostController.update)

router.delete('/:postId', auth, PostController.delete)

module.exports = router

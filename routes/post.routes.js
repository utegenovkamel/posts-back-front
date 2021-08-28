const { Router } = require('express');
const router = Router();
const PostController = require('../application/controllers/postController');

router.get('', PostController.getAllPosts);

router.get('/my', PostController.getUserPosts);

router.get('/my/:postId', PostController.getPost);

router.post('', PostController.create);

router.put('', PostController.update);

router.delete('/:postId', PostController.delete);

module.exports = router;

const { Router } = require('express');
const router = Router();
const PostController = require('../application/controllers/postController');

router.get('', PostController.getPosts);

router.get('/my', PostController.getMyPosts);

// router.get('/my/:postId', PostController.getPost);

router.post('', PostController.create);

router.put('', PostController.update);

router.delete('/:postId', PostController.delete);

module.exports = router;

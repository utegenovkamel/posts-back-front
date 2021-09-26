const { Router } = require('express');
const router = Router();
const PostController = require('../application/controllers/postController');

router.get('', PostController.getPosts);

router.get('/my', PostController.getMyPosts);

router.get('/my/:PostId', PostController.getMyOnePost);

router.post('', PostController.create);

router.patch('/:PostId', PostController.update);

router.delete('/:PostId', PostController.delete);

module.exports = router;

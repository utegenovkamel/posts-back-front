const PostService = require('../services/postService')

class PostController {
    async getAllPosts(req, res) {
        try {
            const posts = await PostService.getAllPosts()
            res.json(posts)
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }

    async getUserPosts(req, res) {
        try {
            const userPosts = await PostService.getUserPosts(req.user.userId)
            res.json(userPosts)
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }

    async getPost(req, res) {
        try {
            const post = await PostService.getPost(req.params.postId)
            res.json(post)
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }

    async create(req, res) {
        try {
            const post = await PostService.create({
                createdBy: req.user.userId,
                ...req.body,
            })
            res.json('Пост создан')
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)
            res.json('Пост обнавлен')
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await PostService.delete(req.params.postId)
            res.json(deletedPost)
        } catch (err) {
            console.log(err)
            res.status(400).json(err.message)
        }
    }
}

module.exports = new PostController()

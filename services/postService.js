const Post = require('../models/Post')
const { post } = require('../routes/auth.routes')

class PostService {
    async getAllPosts() {
        return await Post.find()
    }

    async getUserPosts(userId) {
        return await Post.find({ createdBy: userId })
    }

    async getPost(postId) {
        return await Post.findById(postId)
    }

    async create(post) {
        const createdPost = await Post.create(post)
        return createdPost
    }

    async update(post) {
        if (!post._id) {
            throw new Error('Не указан id поста')
        }
        return await Post.findByIdAndUpdate(post._id, post, { new: true })
    }

    async delete(postId) {
        if (!postId) {
            throw new Error('Не указан id поста')
        }
        return await Post.findByIdAndDelete(postId)
    }
}

module.exports = new PostService()

const DB = require('../models');
const Post = DB.sequelize.models.Post;

class PostService {
  async getPosts() {
    return await Post.findAll();
  }

  async getMyPosts(user) {
    const { id: UserId } = user;
    return await Post.findAll({ where: { UserId } });
  }

  // async getPost(params) {
  //   const { PostId } = params;
  //   return await Post.findOne({ where: { PostId } });
  // }

  async create(user, body) {
    const { id: UserId } = user;
    const { Title, Description } = body;
    return await Post.create({ UserId, Title, Description });
  }

  async getMyOnePost(params) {
    const { PostId } = params;
    return await Post.findOne({ where: { id: PostId } });
  }

  async update(user, params, body) {
    const { id: UserId } = user;
    const { PostId } = params;
    const { Title, Description } = body;

    return await Post.update(
      { Title, Description },
      { where: { id: PostId, UserId } },
    );
  }

  async delete(params, user) {
    const { PostId } = params;
    const { id: UserId } = user;
    return await Post.destroy({ where: { id: PostId, UserId } });
  }
}

module.exports = new PostService();

const DB = require('../models');
const Post = DB.sequelize.models.Post;

class PostService {
  async getPosts() {
    return await Post.findAll();
  }

  async getMyPosts(user) {
    const { UserId } = user;
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

  async update(user, params, body) {
    const { UserId } = user;
    const { PostId } = params;
    const { Title, Description } = body;

    return await Post.update(
      { Title, Description },
      { where: { id: PostId, UserId } },
    );
  }

  async delete(params) {
    const { PostId } = params;
    return await Post.destroy({ where: { id: PostId } });
  }
}

module.exports = new PostService();

const User = require('./fixtures/UserFixture.json');
const Post = require('./fixtures/PostFixture.json');

module.exports = seed = async (DB) => {
  await DB.sequelize.models.User.bulkCreate(User);
  await DB.sequelize.models.Post.bulkCreate(Post);
};

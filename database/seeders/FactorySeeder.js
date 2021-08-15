const UserFactory = require('./factories/UserFactory');
const WorkTimeFactory = require('./factories/WorktimeFactory');

module.exports = seed = async (DB) => {
  await DB.sequelize.models.User.bulkCreate(await UserFactory(200, DB));
  await DB.sequelize.models.WorkTime.bulkCreate(
    await WorkTimeFactory(1000, DB),
  );
};

const Tenant = require('./fixtures/TenantFixture.json');

module.exports = seed = async (DB) => {
  await DB.sequelize.models.Tenant.bulkCreate(Tenant);
  await DB.sequelize.models.Building.bulkCreate(Building);
  await DB.sequelize.models.Terminal.bulkCreate(Terminal);
  await DB.sequelize.models.Privilege.bulkCreate(Privilege);
  await DB.sequelize.models.Group.bulkCreate(Group);
  await DB.sequelize.models.User.bulkCreate(User);
  await DB.sequelize.models.WorkTime.bulkCreate(WorkTime);
  await DB.sequelize.models.Identificator.bulkCreate(Identificator);

  await FixGroups(DB);
};

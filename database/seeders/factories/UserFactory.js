const faker = require('faker');

module.exports = make = async (count, DB) => {
  const Tenant = await DB.sequelize.models.Tenant.findAll();

  Users = [];

  for (let i = 0; i < count; i++) {
    const tenantId = Math.ceil(Math.random() * Tenant.length);
    const Group = await DB.sequelize.models.Group.findAll({
      where: { TenantId: tenantId },
    });
    GroupIdArr = [];

    for (let i = 0; i < Group.length; i++) {
      GroupIdArr.push(Group[i].id);
    }
    Users.push(await prepItem(tenantId, GroupIdArr));
  }

  return Users;
};

const prepItem = async (tenantId, GroupIdArr) => {
  return {
    Username: faker.unique(faker.name.firstName),
    Password: 'qwerty123',
    Firstname: faker.name.firstName(),
    Lastname: faker.name.lastName(),
    Email: faker.internet.email(),
    IsSuperadmin: false,
    IsActive: faker.datatype.boolean(),
    Locale: ['en', 'ru', 'cs'][faker.datatype.number({ min: 0, max: 2 })],
    GroupId:
      GroupIdArr[faker.datatype.number({ min: 0, max: GroupIdArr.length - 1 })],
    TenantId: tenantId,
  };
};

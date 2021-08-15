const faker = require('faker');

module.exports = make = async (count, DB) => {
  const Users = await DB.sequelize.models.User.findAll();

  const UserIdArr = [];
  const WorkTime = [];
  for (let i = 0; i < Users.length; i++) {
    UserIdArr.push(Users[i].id);
  }
  for (let i = 0; i < count; i++) {
    WorkTime.push(await prepItem(UserIdArr));
  }

  return WorkTime;
};

const prepItem = async (UserIdArr) => {
  const From = faker.date.past();
  const hour = new Date(From).getUTCHours();
  const Until = new Date(
    new Date(From).setUTCHours(
      faker.datatype.number({ min: hour + 1, max: 23}),
    ),
  ).setUTCMinutes( faker.datatype.number({ min: 0, max: 59}));

  return {
    Date: From,
    From: From,
    FromSource : "hardware",
    UntilSource : "hardware",
    Until: Until,
    UserId:
      UserIdArr[faker.datatype.number({ min: 0, max: UserIdArr.length - 1 })],
  };
};

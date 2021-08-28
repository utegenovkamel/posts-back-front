const DB = require('../../application/models');
const FixtureSeeder = require('../../database/seeders/FixtureSeeder');

DB.sequelize
  .authenticate()
  .then(async () => {
    await DB.sequelize.sync({ force: true });
    await FixtureSeeder(DB);
  })
  .then(() => {
    console.log('--- SUCCESS');
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  })
  .finally(() => process.exit());

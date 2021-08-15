const DB = require('../../application/models');
const ListSeeder = require('../../database/seeders/ListSeeder');
const FactorySeeder = require('../../database/seeders/FactorySeeder');
const FixtureSeeder = require('../../database/seeders/FixtureSeeder');

DB.sequelize
  .authenticate()
  .then(async () => {
    await DB.sequelize.sync({ force: true });
    await ListSeeder(DB);
    await FixtureSeeder(DB);
    await FactorySeeder(DB);
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

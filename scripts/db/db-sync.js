const db = require('../../application/models');
const models = db.sequelize.models;

db.sequelize
  .authenticate()
  .then(async () => {
    await db.sequelize.sync({ force: true });
  })
  .then(() => {
    console.log('SUCCESS');
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  })
  .finally(() => process.exit());

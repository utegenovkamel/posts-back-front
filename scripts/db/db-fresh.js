const db = require('../../application/models');

db.sequelize
  .authenticate()
  .then(async () => {
    await db.sequelize.sync({ force: true });
  })
  .then(() => {
    console.log('SUCCESS');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => process.exit());

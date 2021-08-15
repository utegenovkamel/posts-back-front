const db = require("../../application/models");
const models = db.sequelize.models;

db.sequelize.authenticate()
    .then(async () => {
        await db.sequelize.sync({force:true});
        //await models.Client.sync({alter:true});
        //await models.Privilege.sync({alter:true});
        //await models.Person.sync({alter:true});
        //await models.Construction.sync({alter:true});
        //await models.Company.sync({alter:true})
        //await models.Constlog.sync({alter:true});

    })
    .then(() =>{
        console.log("SUCCESS");
        process.exit();
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    })
    .finally(() => process.exit());

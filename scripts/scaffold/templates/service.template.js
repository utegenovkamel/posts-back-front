const DB = require("../models");
const TTTModelNameTTT = DB.sequelize.models.TTTModelNameTTT;

module.exports = {
    getAll : async () => await TTTModelNameTTT.findAll(),
    getById : async (id) => await TTTModelNameTTT.findByPk(id),
    findOne : async (options) => await TTTModelNameTTT.findOne(options),
    findMore: async (options) => await TTTModelNameTTT.findAll(options),
    create : async (attr) => await TTTModelNameTTT.create(attr),
    update : async (attr, id) => await TTTModelNameTTT.update(attr, {where :{id:id}}),
    delete : async (id) => await TTTModelNameTTT.destroy({where: {id : id}})
}
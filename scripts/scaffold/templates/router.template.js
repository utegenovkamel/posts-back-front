const Express = require("express");
const Router = Express.Router();
const TTTModelNameTTTController = require("../../application/controllers/TTTModelNameTTTController");
const BodyRequired = require("../../application/middleware/validators/BodyRequiredValidator");

Router.get("/", TTTModelNameTTTController.getAll);
Router.get("/:TTTModelNameTTTId", TTTModelNameTTTController.getById);
Router.post("/", BodyRequired, TTTModelNameTTTController.create);
Router.patch("/:TTTModelNameTTTId", BodyRequired, TTTModelNameTTTController.update);
Router.delete("/:TTTModelNameTTTId", TTTModelNameTTTController.delete);

module.exports = Router;
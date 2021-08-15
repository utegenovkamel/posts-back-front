process.env.scriptName = "scaffold";
const makeModel = require("./make-model");
const makeController = require("./make-controller");
const makeService = require("./make-service");
const makeRouter = require("./make-router");

try {
    const modelName = process.argv.pop();
    makeModel(modelName);
    makeService(modelName);
    makeController(modelName);
    makeRouter(modelName);
    console.log("Model, service, router and controller for '" + modelName  + "' have been scaffolded.");
} catch (e) {
    console.log(e);
} finally {
    process.exit();
}



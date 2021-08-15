const config = require("./_config");
const projectRoot = __dirname + "/../.."
const controllerPath = config.controllerPath;
const fs = require("fs");

const makeController = (modelName) => {
    let template = fs.readFileSync( __dirname + "/templates/controller.template.js").toString();
    let controller = fillTemplate(template,modelName);
    fs.writeFileSync(projectRoot + controllerPath + "/" + modelName + "Controller.js" , controller);
}

const fillTemplate = (template, modelName) => {
    template = template.replace(/TTTModelNameTTT/g,modelName);
    template = template.replace(/tttModelNamettt/g,modelName.toLowerCase());
    return template;
}

const run = (modelName) => {
    makeController(modelName);
    console.log("Controller for '" + modelName + "' has been made.");
}

if(process.env.scriptName !== "scaffold") {
    try {
        run(process.argv.pop());
    } catch (e) {
        console.log(e);
    } finally {
        process.exit();
    }
}
module.exports = run;

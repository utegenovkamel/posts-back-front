const config = require("./_config");
const projectRoot = __dirname + "/../.."
const servicePath = config.servicePath;
const fs = require("fs");

const makeService = (modelName) => {
    let template = fs.readFileSync( __dirname + "/templates/service.template.js").toString();
    let service = fillTemplate(template,modelName);
    fs.writeFileSync(projectRoot + servicePath + "/" + modelName + "Service.js" , service);
}

const fillTemplate = (template, modelName) => {
    template = template.replace(/TTTModelNameTTT/g,modelName);
    template = template.replace(/tttModelNamettt/g,modelName.toLowerCase());
    return template;
}

const run = (modelName) => {
    makeService(modelName);
    console.log("Service for '" + modelName + "' has been made.");
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

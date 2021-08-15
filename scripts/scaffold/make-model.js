const config = require("./_config");
const projectRoot = __dirname + "/../.."
const modelPath = config.modelPath;
const fs = require("fs");

const makeModel = (modelName) => {
    let template = fs.readFileSync( __dirname + "/templates/model.template.js").toString();
    let model =fillTemplate(template,modelName);
    fs.writeFileSync(projectRoot + modelPath + "/" + modelName + ".js" , model);
}

const fillTemplate = (template, modelName) => {
    template = template.replace(/TTTModelNameTTT/g,modelName);
    template = template.replace(/tttModelNamettt/g,modelName.toLowerCase());
    return template;
}

const run = (modelName) => {
    makeModel(modelName);
    console.log("Model for '" + modelName + "' has been made.");
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
const config = require("./_config");
const projectRoot = __dirname + "/../.."
const routesPath = config.routesPath;
const routeRegistrarPath = config.routeRegistrarPath;
const fs = require("fs");

const makeRouter = (modelName) => {
    let template = fs.readFileSync( __dirname + "/templates/router.template.js").toString();
    let controller = fillTemplate(template,modelName);
    fs.writeFileSync(projectRoot + routesPath + "/" + modelName + "Router.js" , controller);
}

const fillTemplate = (template, modelName) => {
    template = template.replace(/TTTModelNameTTT/g,modelName);
    template = template.replace(/tttModelNamettt/g,modelName.toLowerCase());
    return template;
}

const registerRouter = (modelName) => {
    let routeRegistrar = fs.readFileSync( projectRoot + routeRegistrarPath).toString();
    routeRegistrar = routeRegistrar.replace(
        "/** routers */",
    '/** routers */ \nconst ' + modelName + 'Router = require("./app/' + modelName +'Router");'
    );
    routeRegistrar = routeRegistrar.replace(
        "/** mappings */",
        '/** mappings */ \nRouter.use("/' + modelName.toLowerCase() + '", ' + modelName + 'Router);'
    )
    fs.writeFileSync(projectRoot + routeRegistrarPath, routeRegistrar);
}

const run = (modelName) => {
    makeRouter(modelName);
    registerRouter(modelName);
    console.log("Router for '" + modelName + "' has been made.");
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

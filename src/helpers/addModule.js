const async = require('async');
const fs = require('fs');
const module_name = process.argv[2];
const ctrl = require('./moduleResources/controller');
const sc = require('./moduleResources/schema');
const mdl = require('./moduleResources/model');
const rot = require('./moduleResources/routes');
const srv = require('./moduleResources/service');
const val = require('./moduleResources/validation');

if (module_name !== undefined) { 
console.log(sc);
    const controller = {
        file_name: `controllers/${module_name.toLocaleLowerCase()}.controller`,
        content: ctrl.getController(module_name)
    };
    const controller_index = {
        file_name: `controllers/index`,
        content: `\nexports.${module_name}Controller = require('./${module_name.toLocaleLowerCase()}.controller');`
    };
    const spec = {
        file_name: `controllers/${module_name.toLocaleLowerCase()}.controller.spec`
    };
    const schema = {
        file_name: `models/schemas/${module_name.toLocaleLowerCase()}.schema`,
        content: sc.getSchema(module_name)
    };
    const schema_index = {
        file_name: `models/schemas/index`,
        content: `\nexports.${module_name}Schema = require('./${module_name.toLocaleLowerCase()}.schema');`
    };
    const model = {
        file_name: `models/${module_name.toLocaleLowerCase()}.model`,
        content: mdl.getModel(module_name)
    };
    const model_index = {
        file_name: `models/index`,
        content: `\nexports.${module_name}Model = require('./${module_name.toLocaleLowerCase()}.model');`
    };
    const route = {
        file_name: `routes/${module_name.toLocaleLowerCase()}.routes`,
        content: rot.getRoutes(module_name)
    };
    const route_index = {
        file_name: `routes/index`,
        content: `\nexports.${module_name}Router = require('./${module_name.toLocaleLowerCase()}.routes');`
    };
    const service = {
        file_name: `services/${module_name.toLocaleLowerCase()}.service`,
        content: srv.getService(module_name)
    };
    const service_index = {
        file_name: `services/index`,
        content: `\nexports.${module_name}Service = require('./${module_name.toLocaleLowerCase()}.service');`
    };
    const validation = {
        file_name: `validation/${module_name.toLocaleLowerCase()}.validation`,
        content: val.getValidation(module_name)
    };
    const validation_index = {
        file_name: `validation/index`,
        content: `\nexports.${module_name} = require('./${module_name.toLocaleLowerCase()}.validation');`
    };

    async.each([controller, controller_index, spec, schema, schema_index,
                model, model_index, route, route_index, service, service_index,
    validation, validation_index], function (file, callback) {

        fs.appendFile('./src/app/' + file.file_name + '.js', `${file.content}`, function (err) {
            err ? console.log(err) : console.log(file.file_name + '.js was updated.');
            callback();
        });

    }, function (err) {
        err ? console.log('A file failed to process') : console.log('All files have been processed successfully');
    })

 }else{ console.log("Please type a name for controller"); }
exports.getRoutes = (module_name) =>`
const { asPromise } = require('../../interfaces/http/utils');
const { ${module_name} } = require('../validation');

module.exports = function ${module_name}Router(${module_name}Controller) {
  const ctrl = function(method) {
    return function(req, res) {
      return ${module_name}Controller[method](req, res);
    };
  };

  return async function(fastify) {
    fastify.get("/", {schema: ${module_name}.get}, asPromise(ctrl("get")));
    fastify.get("/:id", { schema: ${module_name}.getOne } , asPromise(ctrl("getOne")));
    fastify.post("/", { schema: ${module_name}.add }, asPromise(ctrl("add")));
    fastify.put("/:id", { schema: ${module_name}.update }, asPromise(ctrl("update")));
    fastify.delete("/:id", { schema: ${module_name}.delete }, asPromise(ctrl("delete")));
  };
};`
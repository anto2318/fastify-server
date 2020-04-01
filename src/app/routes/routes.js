const { asPromise } = require('../../interfaces/http/utils');
const { validation } = require('../validation');

module.exports = function Router(Controller) {
  const ctrl = function(method) {
    return function(req, res) {
      return Controller[method](req, res);
    };
  };

  return async function(fastify) {
    fastify.get("/", {schema: validation.get}, asPromise(ctrl("get")));
    fastify.get("/:id", { schema: validation.getOne } , asPromise(ctrl("getOne")));
    fastify.post("/", { schema: validation.add }, asPromise(ctrl("add")));
    fastify.put("/:id", { schema: validation.update }, asPromise(ctrl("update")));
    fastify.delete("/:id", { schema: validation.delete }, asPromise(ctrl("delete")));
  };
};

const { asPromise } = require('../../interfaces/http/utils');
const { test } = require('../validation');

module.exports = function testRouter(testController) {
  const ctrl = function(method) {
    return function(req, res) {
      return testController[method](req, res);
    };
  };

  return async function(fastify) {
    fastify.get("/", {schema: test.get}, asPromise(ctrl("get")));
    fastify.get("/:id", { schema: test.getOne } , asPromise(ctrl("getOne")));
    fastify.post("/", { schema: test.add }, asPromise(ctrl("add")));
    fastify.put("/:id", { schema: test.update }, asPromise(ctrl("update")));
    fastify.delete("/:id", { schema: test.delete }, asPromise(ctrl("delete")));
  };
};
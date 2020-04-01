const fastifyPlugin = require("fastify-plugin");

function createScopePerRequest(container) {
  return function scopePerRequest(fastify, _, next) {
    fastify.decorate("container", container);

    next();
  };
}

module.exports = fastifyPlugin(createScopePerRequest);
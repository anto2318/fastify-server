const { Router } = require("../../app/routes");
const { web } = require("../../../config");
const swagger = require('fastify-swagger');

module.exports = ({ controller }) =>
  async function(fastify, _, next) {
    fastify
    .register(swagger, {
      swagger: {
        info: {
          version: web.artifact.version,
          title: 'Documentation',
          description: 'API Documentation'
        }
      },
      exposeRoute: true,
      routePrefix: "/docs"
    })
      .register(Router(controller), {
        prefix: "/api"
      })
      .get("/version", (_, reply) => {
        reply.send(web.artifact);
      });

    next();
  };
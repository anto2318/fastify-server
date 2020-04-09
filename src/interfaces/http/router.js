const routes = require("../../app/routes");
const { web } = require("../../../config");
const swagger = require('fastify-swagger');
const { camelCase } = require("change-case");
const { pipe, toPairs, map } = require("ramda");

module.exports = controllers =>
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
      .get("/version", (_, reply) => {
        reply.send(web.artifact);
      });
      
    map(router => {
        const name = camelCase(router.name).split('Router')[0];
        fastify.register(router(controllers[`${name}Controller`]), {
        prefix: `/api/${name}`
      })
    })(routes)

    next();
  };
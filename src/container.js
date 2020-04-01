const { createContainer, asClass, asFunction, asValue } = require("awilix");
const { camelCase } = require("change-case");
const { pipe, toPairs, map, fromPairs } = require("ramda");

const config = require("../config");
const { Application, services, controllers } = require("./app/");

const { Server, router } = require("./interfaces/http/");
const { createScopePerRequest } = require("./interfaces/http/middleware");

const container = createContainer();
// System
container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    router: asFunction(router).singleton()
  })
  .register({
    config: asValue(config)
  });

// Middlewares
container.register({
  containerPlugin: asValue(createScopePerRequest(container))
});

// Services
container.register(
  pipe(
    toPairs,
    map(([key, value]) => [camelCase(key), asClass(value).scoped()]),
    fromPairs
  )(services)
);

// Controllers
container.register(
  pipe(
    toPairs,
    map(([key, value]) => [camelCase(key), asClass(value).scoped()]),
    fromPairs
  )(controllers)
);

module.exports = container;

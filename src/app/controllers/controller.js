function Controller({ controllerService }) {
    return {
      get: async (_, reply) => {
        const result = await controllerService.get();
        reply.send(result);
      },
      getOne: async (request, reply) => {
        const id = request.params.id;
  
        const result = await controllerService.getOne(id);
        reply.send(result);
      },
      add: async (request, reply) => {
        const entity = request.body;
  
        const result = await controllerService.add(entity);
        reply.send(result);
      },
      update: async (request, reply) => {
        const id = request.params.id;
        const entity = request.body;
  
        const result = await controllerService.update(id, entity);
        reply.send(result);
      },
      delete: async (request, reply) => {
        const id = request.params.id;
  
        const result = await controllerService.deleteDocument(id);
        reply.send(result);
      },
    };
  }
  
  module.exports = Controller;
  
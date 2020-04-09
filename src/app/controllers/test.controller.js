
function testController({ testService }) {
    return {
      get: async (_, reply) => {
        const result = await testService.get();
        reply.send(result);
      },
      getOne: async (request, reply) => {
        const id = request.params.id;
  
        const result = await testService.getOne(id);
        reply.send(result);
      },
      add: async (request, reply) => {
        const entity = request.body;
  
        const result = await testService.add(entity);
        reply.send(result);
      },
      update: async (request, reply) => {
        const id = request.params.id;
        const entity = request.body;
  
        const result = await testService.update(id, entity);
        reply.send(result);
      },
      delete: async (request, reply) => {
        const id = request.params.id;
  
        const result = await testService.deleteDocument(id);
        reply.send(result);
      },
    };
  }
  
  module.exports = testController;

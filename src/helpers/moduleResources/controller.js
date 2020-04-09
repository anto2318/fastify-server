exports.getController = (module_name) => `
function ${module_name}Controller({ ${module_name.toLocaleLowerCase()}Service }) {
    return {
      get: async (_, reply) => {
        const result = await ${module_name.toLocaleLowerCase()}Service.get();
        reply.send(result);
      },
      getOne: async (request, reply) => {
        const id = request.params.id;
  
        const result = await ${module_name.toLocaleLowerCase()}Service.getOne(id);
        reply.send(result);
      },
      add: async (request, reply) => {
        const entity = request.body;
  
        const result = await ${module_name.toLocaleLowerCase()}Service.add(entity);
        reply.send(result);
      },
      update: async (request, reply) => {
        const id = request.params.id;
        const entity = request.body;
  
        const result = await ${module_name.toLocaleLowerCase()}Service.update(id, entity);
        reply.send(result);
      },
      delete: async (request, reply) => {
        const id = request.params.id;
  
        const result = await ${module_name.toLocaleLowerCase()}Service.deleteDocument(id);
        reply.send(result);
      },
    };
  }
  
  module.exports = ${module_name}Controller;
`
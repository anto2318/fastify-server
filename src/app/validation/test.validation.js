
module.exports = {
    get: {
      response: {
      200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
              name: { type: 'string' },
              createdAt: { type: 'string' },
              updatedAt: { type: 'string' }
        }
      }
    }
  }
  },
    getOne:  {
      params: { 
        type: 'object',
        additionalProperties: false,
        required: [ 'id' ],
        properties: { id: { type: 'string', pattern: "^[0-9a-fA-F]{24}$" } }
     }
    },
    add:  {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
        }
      }
    },
    update: {
      params: { 
        type: 'object',
        additionalProperties: false,
        required: [ 'id' ],
        properties: { id: { type: 'string', pattern: "^[0-9a-fA-F]{24}$" } }
     },
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
        }
      }
    },
    delete:  {
      params: { 
        type: 'object',
        additionalProperties: false,
        required: [ 'id' ],
        properties: { id: { type: 'string', pattern: "^[0-9a-fA-F]{24}$" } }
     }
    }
  };

exports.getValidation = (module_name) =>`
module.exports = {
    get: {
      response: {
      200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
              /*
                Add schema properties here
              */
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
        required: [/* Add schema properties required here */],
        properties: {
          /*
            Add schema properties here
          */
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
        required: [/* Add schema properties required here */],
        properties: {
        /*
            Add schema properties here
        */
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
`
exports.EntitiesNotFoundError = class EntitiesNotFoundError extends Error {
    constructor() {
      const id = "EntitiesNotFoundError";
      const message = `Entities not found`;
      const statusCode = 404;
      super(id, message, statusCode)
    }
  };
  
  exports.EntityNotFoundError = class EntityNotFoundError extends Error {
      constructor(data) {
        this.id = "EntityNotFoundError";
        this.message = `Entity ${JSON.stringify(data)} not found`;
        this.stack = data;
        this.statusCode = 404;
      }
    };
    
    exports.EntityExistsUnprocessableEntityError = class EntityExistsUnprocessableEntityError extends Error {
      constructor(data) {
        this.id = "EntityExistsUnprocessableEntityError";
        this.message = `Entity ${JSON.stringify(data)} not found`;
        this.stack = data;
        this.statusCode = 422;
      }
    };
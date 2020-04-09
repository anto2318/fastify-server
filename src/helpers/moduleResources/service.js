exports.getService = (module_name) =>`
const { EntitiesNotFoundError, EntityNotFoundError, EntityExistsUnprocessableEntityError } = require('../errors');
const { ${module_name}Model } = require('../models')

function ${module_name}Service() {
  return { get, getOne, add, update, deleteDocument };

  async function get() {
    const result = await ${module_name}Model.find()
    if (result.length == 0) {
        throw new EntitiesNotFoundError();
      }
      return result;
  }

  async function getOne(id) {
    const result = await ${module_name}Model.findById(id)

    if (!result) {
        throw new EntityNotFoundError();
      }
      return result;
  }

  async function add(entity) {
      const data = {
        ...entity,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      const obj = new ${module_name}Model(data)
      obj.save()
        .catch(e => {
            if (e.name === 'MongoError' && e.code === 11000) {
                throw new EntityExistsUnprocessableEntityError({ entity });
            }
            throw e;
        })

    return obj;
  }

  async function update(id, entity) {
    const data = {
      ...entity,
      updatedAt: new Date()
    };
    const updated = await ${module_name}Model
      .findByIdAndUpdate(
        id,
       data,
        { new: true }
      )
      .catch(e => {
        throw e;
      });

        if (!updated) {
        throw new EntityNotFoundError(id);
        }
        return updated;
   }

   async function deleteDocument(id) {
    const result = await ${module_name}Model.findByIdAndRemove(id)
    .catch(e => {
        throw e;
      });

      if (!result) {
        throw new EntityNotFoundError();
      }
      return 'Entity deleted sucessfully';
   }
}

module.exports = ${module_name}Service;

`
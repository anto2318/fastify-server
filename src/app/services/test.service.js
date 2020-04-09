
const { EntitiesNotFoundError, EntityNotFoundError, EntityExistsUnprocessableEntityError } = require('../errors');
const { testModel } = require('../models')

function testService() {
  return { get, getOne, add, update, deleteDocument };

  async function get() {
    const result = await testModel.find()
    if (result.length == 0) {
        throw new EntitiesNotFoundError();
      }
      return result;
  }

  async function getOne(id) {
    const result = await testModel.findById(id)

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
      const obj = new testModel(data)
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
    const updated = await testModel
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
    const result = await testModel.findByIdAndRemove(id)
    .catch(e => {
        throw e;
      });

      if (!result) {
        throw new EntityNotFoundError();
      }
      return 'Entity deleted sucessfully';
   }
}

module.exports = testService;


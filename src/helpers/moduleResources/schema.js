exports.getSchema = (module_name) =>`
const { Schema } = require('mongoose');

const Definition = {
  /*
    Add attributes here
  */

  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
};

const ${module_name}Schema = new Schema(Definition, {
  versionKey: false,
  minimize: false,
  strict: true
});

module.exports = ${module_name}Schema;`;
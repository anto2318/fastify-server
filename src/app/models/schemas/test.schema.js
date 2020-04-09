
const { Schema } = require('mongoose');

const Definition = {
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
};

const testSchema = new Schema(Definition, {
  versionKey: false,
  minimize: false,
  strict: true
});

module.exports = testSchema;
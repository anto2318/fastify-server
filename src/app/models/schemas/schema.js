const { Schema } = require('mongoose');

const Definition = {
  name: {
    type: Schema.Types.String,
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

const schema = new Schema(Definition, {
  versionKey: false,
  minimize: false,
  strict: true
});

module.exports = schema;
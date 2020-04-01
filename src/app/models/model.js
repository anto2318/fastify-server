const mongoose = require('mongoose');
const { schema } = require('./schemas');

module.exports = mongoose.model('Model', schema);
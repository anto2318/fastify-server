
const mongoose = require('mongoose');
const { testSchema } = require('./schemas');

module.exports = mongoose.model('test', testSchema);

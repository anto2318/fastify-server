exports.getModel = (module_name) =>`
const mongoose = require('mongoose');
const { ${module_name}Schema } = require('./schemas');

module.exports = mongoose.model('${module_name}', ${module_name}Schema);
`
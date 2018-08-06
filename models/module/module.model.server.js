const mongoose = require('mongoose');
const moduleSchema = require('./module.schema.server');

const moduleModel = mongoose.model('ModuleModel', moduleSchema);
// const moduleModel = require('../module/module.model.server');

module.exports = {
};
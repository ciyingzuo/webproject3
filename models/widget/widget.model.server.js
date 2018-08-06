const mongoose = require('mongoose');
const widgetSchema = require('./widget.schema.server');

const widgetModel = mongoose.model('WidgetModel', widgetSchema);
// const lessonModel = require('../widget/widget.model.server');

module.exports = {
};
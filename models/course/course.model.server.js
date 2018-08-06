const mongoose = require('mongoose');
const lessonSchema = require('./course.schema.server');

const lessonModel = mongoose.model('LessonModel', lessonSchema);
// const lessonModel = require('../lesson/lesson.model.server');

module.exports = {
};
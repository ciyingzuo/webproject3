const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courseModel'
    },
    lesson: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'lessonModel'
        }
    ]
}, {collection: 'module'});
const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    courseId: String,
    seat: Number,
    student: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userModel'
        }
    ]
}, {collection: 'section'});
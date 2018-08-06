const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courseModel'
    },
    seat: Number,
    student: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userModel'
        }
    ]
}, {collection: 'section'});
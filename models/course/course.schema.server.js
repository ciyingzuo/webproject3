const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'moduleModel'
    },
    section: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'sectionModel'
        }
    ]
}, {collection: 'course'});
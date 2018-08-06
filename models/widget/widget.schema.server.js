const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    type: String,
    text: String,
    subText: String,
    widget:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'lessonModel'
        }

}, {collection: 'widget'});
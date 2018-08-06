const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'moduleModel'
    },
    widget: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'widgetModel'
        }
    ]
}, {collection: 'lesson'});
var mongoose = require('mongoose');

module.exports = mongoose.Schema({
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectionModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
}, {collection: 'enrollment'});
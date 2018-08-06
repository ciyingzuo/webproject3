const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: Number,
    section: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectionModel'
    }]
}, {collection: 'user'});

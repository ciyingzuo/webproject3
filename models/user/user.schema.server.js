const mongoose = require('mongoose');
 var UserSchema= mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: Number,
    testUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }
}, {collection: 'user'});

module.exports = UserSchema;

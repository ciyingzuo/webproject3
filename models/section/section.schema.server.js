const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    courseId: String,
    seat: Number,
}, {collection: 'section'});
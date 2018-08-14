const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    title: String,
    point: Number,
    type: String,
    text: [String],
    answer: []
}, {collection: 'question'});
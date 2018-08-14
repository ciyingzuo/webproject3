const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizModel'
    },
    answer: [],
    date: {}
}, {collection: 'submission'});
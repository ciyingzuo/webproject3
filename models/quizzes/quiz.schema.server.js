const mongoose = require('mongoose')
module.exports = mongoose.Schema({
  title: {type: String},
  question: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionModel'
  }]
}, {collection: 'quiz'});

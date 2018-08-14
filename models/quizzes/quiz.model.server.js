const mongoose = require('mongoose')
const quizSchema = require('./quiz.schema.server');
const quizModel = mongoose.model('QuizModel', quizSchema);

findAllQuiz = () =>
    quizModel.find()

findQuizById = (quizId) => {
    return quizModel.findById(quizId).populate("question").exec();
}


module.exports = {
    findAllQuiz,
    findQuizById
};

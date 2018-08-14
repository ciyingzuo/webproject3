const mongoose = require('mongoose')
const schema = require('./submission.schema.server')
const submissionModel = mongoose.model('SubmissionModel', schema)

submit = (userId, quizId, answer) => {
    return submissionModel.create({
        user: userId,
        quiz: quizId,
        answer: answer,
        date: new Date()
    })
}

findSubmissionById = submissionId => {
    return submissionModel.findById(submissionId)
}

findAllSubmissions = () =>
    submissionModel.find().populate('user').populate('quiz');

findAllSubmissionsForStudent = studentId =>
    submissionModel.find({student: studentId});

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({quiz: quizId}).populate('user').populate('quiz');

module.exports = {
    submit,
    findAllSubmissions,
    findAllSubmissionsForStudent,
    findAllSubmissionsForQuiz,
    findSubmissionById
}
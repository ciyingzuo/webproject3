module.exports = app => {

    const quizModel = require('../models/quizzes/quiz.model.server');
    const submissionModel = require('../models/quizzes/submission.model.server');

    findAllQuiz = (req, res) => {
        quizModel.findAllQuiz()
            .then(quiz => res.send(quiz))
    }

    findQuizById = (req, res) => {
        quizModel.findQuizById(req.params['quizId'])
            .then(quiz => res.send(quiz))
    }

    submitQuiz = (req, res) => {
        // const userId = req.session['currentUser']._id;

        submissionModel.submit('5b6a219424e8a422803bfac4', req.params['quizId'], req.body).then(res.sendStatus(200))
    }

    findSubmissionByQuizId = (req, res) => {
        submissionModel.findAllSubmissionsForQuiz(req.params['quizId']).then(submission => res.send(submission));
    }

    findSubmissionById = (req, res) => {
        submissionModel.findSubmissionById(req.params['submissionId']).then(submission => res.send(submission));
    }

    findAllSubmission = (req, res)=> {
        submissionModel.findAllSubmissions().then(submission => {
            res.send(submission)
        })
    }
    app.get('/api/quiz/allSubmission', findAllSubmission);
    app.get('/api/quiz', findAllQuiz);
    app.get('/api/quiz/:quizId', findQuizById);
    app.post('/api/quiz/:quizId/submission', submitQuiz);
    app.get('/api/quiz/:quizId/submission', findSubmissionByQuizId);
    app.get('/api/submission/:submissionId', findSubmissionById)

}
module.exports = app => {
    const enrollmentModel = require('../models/enrollment/enrollment.model.server');
    const sectionModel = require('../models/section/section.model.server');

    app.post('/api/student/:userId/section/:sectionId', (req, res) => {
        sectionModel.updateSection(req.body);
        enrollmentModel.enroll(req.params['userId'], req.params['sectionId'])
            .then(section => res.send(section))
    })


    app.get('/api/student/:userId/section', (req, res) =>
        enrollmentModel.findSectionForUser(req.params['userId'])
            .then(section => res.send(section))
    )

    app.delete('/api/student/:userId/section/:sectionId', (req, res) => {
        sectionModel.updateSection(req.body);
            enrollmentModel.drop(req.params['userId'], req.params['sectionId'])
                .then(section => res.send(section))
        }
    )

};
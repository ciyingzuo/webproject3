module.exports = app => {
    const enrollmentModel = require('../models/enrollment/enrollment.model.server');
    const sectionModel = require('../models/section/section.model.server');

    app.post('/api/student/:userId/section/:sectionId', (req, res) => {
        const section = sectionModel.findSection(req.params['sectionId']);
        if (section.seat == 0) {
            res.sendStatus(400);
            return;
        } else {
            sectionModel.enroll(req.params['sectionId'])
        }
        enrollmentModel.enroll(req.params['userId'], req.params['sectionId'])
            .then(section => res.send(section))
    })


    app.get('/api/student/:userId/section', (req, res) =>
        enrollmentModel.findSectionForUser(req.params['userId'])
            .then(section => res.send(section))
    )

    app.delete('/api/student/:userId/section/:sectionId', (req, res) => {
        sectionModel.drop(req.params['sectionId']);
            enrollmentModel.drop(req.params['userId'], req.params['sectionId'])
                .then(section => res.send(section))
        }
    )

};
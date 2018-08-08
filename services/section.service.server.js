module.exports = app => {
    const sectionModel = require('../models/section/section.model.server');


    app.get('/api/section', (req, res) =>
        sectionModel
            .findAllSections()
            .then(sections => res.send(sections))
    )

    app.get('/api/course/:courseId/section', (req, res) =>
        sectionModel
            .findAllSectionsForCourse(req.params['courseId'])
            .then(sections => res.send(sections))
    )

    app.get('/api/section/:sectionId', (req,res) =>
        sectionModel.findSection(req.params['sectionId'])
)

    app.delete('/api/section/:sectionId', (req,res) =>
        sectionModel
            .deleteSection(req.body)
            .then(sections => res.send(sections))
    )

    app.put('/api/section/:sectionId', (req, res) =>
        sectionModel
            .updateSection(req.body)
            .then(sections => res.send(sections))
    )

    app.post('/api/course/:courseId/section', (req, res) =>
        sectionModel
            .createSection(req.body)
            .then(section => res.send(section))
    )
};
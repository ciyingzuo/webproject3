module.exports = app => {
  const sectionModel = require('../models/section/section.model.server');

  app.put('/api/section/:sectionId/enroll', (req, res) => {
    const currentUser = req.session['currentUser'];
    const section = sectionModel.findSection(req.params['sectionId']);
    console.log(section.seat)
    if(section.seat === 0){
        res.sendStatus(400);
        return;
    }
    sectionModel
      .enroll(currentUser._id, req.params['sectionId'])
      .then(status => res.sendStatus(200))
  });

    app.put('/api/section/:sectionId/drop', (req, res) => {
        const currentUser = req.session['currentUser'];
        section = sectionModel.findSection(req.params['sectionId']);
        sectionModel
            .drop(currentUser._id, req.params['sectionId'])
            .then(user => res.send(user))
    });

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

    app.put('/api/section', (req, res) =>
        sectionModel
            .updateSection(req.body)
            .then(sections => res.send(sections))
    )

  app.post('/api/section', (req, res) =>
    sectionModel
      .createSection(req.body)
      .then(section => res.send(section))
  )
};
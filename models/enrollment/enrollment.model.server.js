var mongoose = require('mongoose');

var enrollmentSchema = require('./enrollment.schema.server');

var enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);
enroll = (userId, sectionId) => {
    enrollmentModel.remove({user: userId, section: sectionId});
    return enrollmentModel.create({
        user: userId,
        section: sectionId
    });
}

findSectionForUser = (userId) => {
    return enrollmentModel.find({user: userId}).populate('section')
        .exec();
}

drop = (userId, sectionId) => {
    return enrollmentModel.remove({user: userId, section: sectionId})
        .exec();
}

module.exports = {
    enroll,
    findSectionForUser,
    drop
}
;
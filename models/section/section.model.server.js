const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);
const userModel = require('../user/user.model.server');

findAllSections = () =>
    sectionModel.find();

findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId});

createSection = section =>
    sectionModel.create(section);

findSection = sectionId =>
    sectionModel.findById(sectionId);

enroll = (sectionId) => {
    sectionModel.findById(sectionId).then
    (section => {
        sectionModel.update({_id: sectionId}, {seat: (section.seat - 1)})
    });
}

drop = (sectionId) => {
    sectionModel.findById(sectionId).then
    (section => {
        sectionModel.update({_id: sectionId}, {seat: (section.seat + 1)})
    });
}

deleteSection = section => {
    return sectionModel.remove({_id: section._id})
}


updateSection = section =>
    sectionModel.update({_id: section._id}, {title: section.title, seat: section.seat})

module.exports = {
    drop,
    findSection,
    enroll,
    findAllSections,
    findAllSectionsForCourse,
    createSection,
    updateSection,
    deleteSection
};
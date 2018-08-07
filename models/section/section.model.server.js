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

enroll = (userId, sectionId) => {
    sectionModel.findById(sectionId).then
    (section => {
        sectionModel.update({_id: sectionId}, {seat: (section.seat - 1)})
    });
    userModel.findUserById(userId)
        .then(user => {
            user.section.pull(sectionId);
            user.section.push(sectionId);
            return user.save();
        });
    return userModel.findUserById(userId)
}

drop = (userId, sectionId) => {
    sectionModel.findById(sectionId).then
    (section => {
        sectionModel.update({_id: sectionId}, {seat: section.seat + 1})
    });
    userModel.findUserById(userId)
        .then(user => {
            user.section.pull(sectionId);
            return user.save();
        });
    return userModel.findUserById(userId)
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
    updateSection
};
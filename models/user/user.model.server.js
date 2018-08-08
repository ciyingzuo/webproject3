const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');

const userModel = mongoose.model('UserModel', userSchema);

findAllUsers = () =>
    userModel.find();

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

findUserById = userId =>
    userModel.findById(userId);

findUserByIdExpanded = userId =>
    userModel
        .findById(userId)
        .populate('section')
        .exec();

updateUser = user => {
    return userModel.update({_id: user._id}, {emailAddress: user.emailAddress, phoneNumber: user.phoneNumber});
};
deleteUser = user => {
    return userModel.remove({_id: user._id});
}
;
createUser = user => {
    return userModel.create(user);
};

module.exports = {
    findUserByIdExpanded,
    findUserById,
    findAllUsers,
    findUserByCredentials,
    deleteUser,
    updateUser,
    createUser
};
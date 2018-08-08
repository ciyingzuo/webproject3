module.exports = app => {

    const userModel = require('../models/user/user.model.server');

    findAllUsers = (req, res) =>
        userModel.findAllUsers()
            .then(users => {
                res.send(users);
            });

    login = (req, res) => {
        const user = req.body;
        userModel.findUserByCredentials(user.username, user.password)
            .then(user => {
                req.session['currentUser'] = user;
                res.send(req.session['currentUser']);
            });
    };

    logout = (req, res) => {
        req.session.destroy();
    }

    currentUser = (req, res) => {
        const currentUser = req.session['currentUser'];
        if (currentUser) {
            userModel.findUserByIdExpanded(currentUser._id)
                .then(user => res.send(user))
        } else {
            res.sendStatus(403)
        }
    };

    createUser = (req, res) => {
        userModel.createUser(req.body).then(user => {
            req.session['currentUser'] = user;
            res.send(req.session['currentUser']);
        });
    };

    updateUser= (req, res) => {
        userModel.updateUser(req.body).then(user => {
            res.sendStatus(200);
        });
    }

    deleteUser = (req, res) => {
        userModel.deleteUser(req.body).then(user => {
            res.sendStatus(200);
        });
    }

    app.get('/logout', logout);
    app.post('/user', createUser);
    app.get('/currentUser', currentUser);
    app.get('/user', findAllUsers);
    app.post('/login', login);
    app.put('/user', updateUser);
    app.delete('/user', deleteUser);
};
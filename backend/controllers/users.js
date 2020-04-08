const User = require("../models/users");
const bcrypt = require("bcryptjs");
exports.getProfile = (req, res, next) => {
    User.findOne({
            _id: req.enduser._id
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "User not authenticated! Please login..."
                });
            }
            res.status(200).json({
                user: user
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}

exports.postProfile = (req, res, next) => {
    const password = req.body.password;
    const newpassword = req.body.newpassword;
    if (password === newpassword) {
        return res.status(401).json({
            message: "Password does not match!"
        });
    }

    User.findOne({
            _id: req.enduser._id
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Authentication failed"
                })
            }
            return bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (!doMatch) {
                        return res.status(401).json({
                            message: "Password does not match!"
                        })
                    }
                    return bcrypt.hash(newpassword, 12)
                        .then(hashPassword => {
                            user.password = hashPassword;
                            return user.save()
                                .then(result => {
                                    res.status(200).json({
                                        message : "Changed successfully"
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        message: err
                                    })
                                })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: err
                            })
                        })
                })
                .catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })

        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        })
}